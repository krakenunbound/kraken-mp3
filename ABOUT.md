# Kraken MP3 Player — Project Notes

**GitHub Repository:** https://github.com/krakenunbound/kraken-mp3

## Overview

Desktop MP3 player built with Electron, ocean/Kraken theme, and bioluminescent visual effects. This folder is the alternate (non–Winamp-panel) Electron UI. The shipped Winamp-style app lives in `F:\Kraken_MP3_Winamp` ([kraken-mp3-winamp](https://github.com/krakenunbound/kraken-mp3-winamp)).

## Tech Stack

- **Framework**: Electron v28.0.0
- **Build Tool**: electron-builder v24.9.1
- **Audio Metadata**: music-metadata v7.14.0
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Platform**: Windows (NSIS installer + portable)

## Project Structure

```
F:\Kraken_MP3\
├── src/
│   ├── main.js          # Electron main process
│   ├── renderer.js      # UI logic, audio, effects
│   ├── index.html       # UI template
│   └── styles.css       # Ocean-themed styling
├── assets/
│   └── icons/           # App icon (.ico, .png, .svg)
├── build/
│   └── uninstaller.nsh  # NSIS uninstall cleanup
├── screenshots/         # README images
├── package.json
├── README.md
└── ABOUT.md             # This file
```

### Excluded from Git (see .gitignore)

- `node_modules/` — install via `npm install`
- `dist/` — build output
- `mp3/` — local sample audio for testing

## Key Features

### Audio Playback

- Formats: MP3, FLAC, WAV, OGG, M4A, AAC, WMA, OPUS
- Play / pause / previous / next, seek, volume, mute
- Shuffle and repeat (off / all / one)

### Visual Effects (8 particle types)

Bubbles, Rain, Shooting Stars, Embers, Dust, Snow, Fireflies, or Off — each with quantity, size, and speed in `localStorage`.

### Audio Visualizers

Bars, Waveform, or Circle.

### UI

- Compact resizable player
- Comment ticker, rotating wallpapers, always-on-top
- Custom wallpapers: Documents/Kraken MP3/Wallpapers

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space | Play/Pause |
| Left/Right | Seek ±5s |
| Ctrl+Left/Right | Previous/Next track |
| Up/Down | Volume |
| M | Mute |
| S | Shuffle |
| R | Repeat cycle |
| Ctrl+O | Open files |
| ~ | Toggle effects menu |
| F12 | DevTools |

## Development

```bash
npm install
npm start
npm run build
npm run build:win
```

## Architecture

- **main.js** — window management, dialogs, IPC, single instance, CLI file open  
- **renderer.js** — audio, Web Audio visualizer, particle canvases, playlist, metadata  

## File Associations

`.mp3`, `.flac`, `.wav`, `.ogg`, `.m4a`, `.aac`
