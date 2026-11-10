# Divex Labs — 60fps Bento Reel Scene

| File | What it is |
|---|---|
| `divex-reel-bento.html` | Self-playing 9:16 stage (1080×1920 logical). Open in Chrome/Edge → **Play / Replay**. |
| `divex-reel-bento-60fps.mp4` | Frame-exact export: 1080×1920, 60fps, 30.0s, H.264, no audio. Drop straight into Premiere/AE/CapCut. |
| `render-reel.cjs` | Re-exports the MP4 after you edit the HTML. |

## Use the MP4, don't screen-record
Every frame is computed from time (`render(t)`), so the export is frame-perfect. A screen recording on a normal
1080p Windows monitor can't show a 1920px-tall frame at 1:1, so it gets scaled down and can drop frames.

Re-render after edits (Windows/macOS/Linux):
```bash
npm i playwright && npx playwright install chromium   # once
# ffmpeg must be on PATH (winget install Gyan.FFmpeg)
node render-reel.cjs                 # → divex-reel-bento-60fps.mp4 (~8 min)
```

## Preview controls (outside the recorded frame)
`Space` play/pause · `R` replay · `G` Instagram safe-zone overlay · `H` hide controls · scrub bar for any frame.
`?autoplay=1` starts on load.

## Timeline
| Time | Scene |
|---|---|
| 0–4s | Hook terminal: `divex init --protocol=software-factory` → `[OK] Zero Bloat / Client Sovereignty / Production Hardened`; camera −8° Y → 0°, 108% → 100% |
| 4–12s | DivOS 2×2 Bento: Schema → FastAPI Gateway (p50 18ms) → UI State → Security Audit 20/20; agents switch QUEUED → RUNNING → DONE with cyan border sweeps |
| 12–22s | RADAR: lead counter to 1,284, trend curve draw, funnel bars, WhatsApp Business / Email dispatch rows QUEUED → SENDING → SENT → REPLIED |
| 22–30s | Grid collapses → obsidian CTA card "Custom SaaS & AI Systems", glowing button **DM 'FACTORY' TO BUILD** |

## SFX cue sheet (sync in your editor)
| Time (s) | Cue | Level |
|---|---|---|
| 0.00 | Sub-bass drop + mechanical switch click | −6 / −3 dB |
| 0.45–1.50 | Low-pass mechanical keystrokes (typing) | −14 dB |
| 1.95, 2.30, 2.65 | Soft confirm tick per `[OK]` | −12 dB |
| 4.10, 4.17, 4.23, 4.30 | Glass tap per Bento card | −12 dB |
| 5.95, 7.55, 9.15, 10.95 | Agent DONE tick | −12 dB |
| 12.30, 12.37, 12.43 | Glass tap per RADAR card | −12 dB |
| 15.6, 16.5, 17.4, 18.3, 19.2 | Dispatch "sent" blip | −14 dB |
| 21.90 | Whoosh (grid collapse) | −8 dB |
| 22.35 | Sub-bass hit (CTA card lands) | −6 dB |
| 24.20 | Glass click (button) | −10 dB |

## Before publishing
- **All numbers are illustrative UI** (18ms, 20/20, 1,284 leads, 14.2% reply rate, the company names). Replace them
  with figures from a real DivOS/RADAR run, or keep them clearly presented as a product demo. Don't present
  them as client results.
- **CTA keyword:** this scene says `FACTORY` as requested; the earlier script, caption and auto-DM use `BUILD`.
  Pick one. To switch, edit the `.btn` text in the HTML and re-render.
- Numbers are fictional and contain no client data, so there's nothing to blur.
