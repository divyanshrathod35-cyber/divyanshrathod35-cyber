# Hinglish Voiceover — timed to `divex-reel-bento-60fps.mp4`

Indian accent, calm founder tone, ~150 wpm. 71 words total. Each block must finish inside its window so the
voice never runs over a scene change. **Bold** = stress the word, `/` = short pause.

| Window | Scene on screen | Line (Roman Hinglish) |
|---|---|---|
| 0:00.3 – 0:03.8 | Terminal types `divex init` | Aapki agency aapka code **rent** pe de rahi hai. |
| 0:04.2 – 0:11.8 | DivOS 4-card Bento | Divex Labs mein — ek spec, **chaar AI agents**. / Database, API, UI, security audit… / **DivOS** sab ek saath build karta hai. Production-grade. |
| 0:12.2 – 0:21.6 | RADAR lead engine | Product ready? Ab **customers**. / **RADAR** — humara B2B lead engine — high-intent leads dhoondhta hai, / aur WhatsApp aur email pe outreach **khud** bhejta hai. / Pipeline, autopilot pe. |
| 0:22.5 – 0:29.5 | CTA card | Custom SaaS aur AI systems. / Code, hosting, keys — sab **aapka**. / **'FACTORY'** DM karo. / Let's build. |

## Sync points (land these words on these frames)
- "rent" → 0:02.0 (as the `[OK]` lines start)
- "chaar AI agents" → 0:04.3 (the four cards pop in)
- "security audit" → 0:09.3 (the 20/20 ring starts filling)
- "RADAR" → 0:12.6 (lead counter starts)
- "khud bhejta hai" → 0:16–0:18 (rows flip to SENT)
- "FACTORY" → 0:24.2 (button appears)

## TTS-ready version (Devanagari + English)
Paste this into a Hindi (hi-IN) neural voice. Hindi voices read Devanagari correctly and keep the English words
in an Indian accent; Roman Hinglish fed to an English voice gets mispronounced.

```
[1] आपकी agency आपका code rent पे दे रही है।

[2] Divex Labs में — एक spec, चार AI agents। Database, API, UI, security audit… DivOS सब एक साथ build करता है। Production-grade।

[3] Product ready? अब customers। RADAR — हमारा B2B lead engine — high-intent leads ढूँढता है, और WhatsApp और email पे outreach ख़ुद भेजता है। Pipeline, autopilot पे।

[4] Custom SaaS और AI systems। Code, hosting, keys — सब आपका। 'FACTORY' DM करो। Let's build।
```
Generate the four blocks as separate clips and drop each at its window start (0:00.3, 0:04.2, 0:12.2, 0:22.5).

## Recording notes (if Divyansh records it — recommended)
- Phone voice-memo is fine: quiet room, phone 15 cm from mouth, slightly off to the side.
- Record each block 3 times; keep the take that fits the window without rushing.
- In the editor: light noise removal, compressor ~3:1, export −14 LUFS. Duck music −12 dB under the voice.

## Mux a finished VO onto the video
```bash
ffmpeg -i divex-reel-bento-60fps.mp4 -i vo.wav -c:v copy -c:a aac -b:a 320k -shortest divex-reel-with-vo.mp4
```
