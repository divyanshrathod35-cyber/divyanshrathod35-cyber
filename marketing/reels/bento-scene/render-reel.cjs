#!/usr/bin/env node
/*
 * Frame-exact 60fps export of divex-reel-bento.html → MP4 (1080x1920).
 *
 * The page renders each frame as a pure function of time, so instead of screen-recording
 * (which drops frames and is capped by your monitor's height) we seek to every frame
 * i/60 and screenshot it, then pipe the PNGs into ffmpeg.
 *
 * Requirements: Node 18+, `npm i playwright` (+ `npx playwright install chromium`), ffmpeg on PATH.
 * Usage:  node render-reel.cjs [out.mp4] [fps]
 */
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const { pathToFileURL } = require('url');

const OUT = path.resolve(process.argv[2] || path.join(__dirname, 'divex-reel-bento-60fps.mp4'));
const FPS = parseInt(process.argv[3] || '60', 10);
const PAGE = pathToFileURL(path.join(__dirname, 'divex-reel-bento.html')).href + '?render=1';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(PAGE);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 60000 });
  const duration = await page.evaluate(() => window.__duration);
  const frames = Math.round(duration * FPS);

  const ff = spawn('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'png', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '15', '-tune', 'animation',
    '-pix_fmt', 'yuv420p', '-r', String(FPS), '-movflags', '+faststart', OUT,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg exited ' + c)))));

  const t0 = Date.now();
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.__seek(t), i / FPS);
    const png = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(png)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % FPS === 0) process.stdout.write(`\r${(i / FPS).toFixed(0)}s / ${duration}s`);
  }
  ff.stdin.end();
  await done;
  await browser.close();
  console.log(`\nWrote ${OUT} (${frames} frames @ ${FPS}fps) in ${((Date.now() - t0) / 1000).toFixed(0)}s`);
  if (errors.length) { console.error('Page errors:', errors); process.exitCode = 1; }
})();
