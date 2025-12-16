# Messenger

A minimal Electron wrapper for messenger.com.

## Development

```bash
npm install
npm start
```

## Build

To create a macOS app:

```bash
npm run build
```

The built `.dmg` will be in `dist/`.

## Install

1. Open `dist/Messenger-1.0.0-arm64.dmg`
2. Drag `Messenger.app` to Applications
3. On first launch: right-click > Open (app is unsigned)

## Notes

If `npm install` fails downloading Electron, use the mirror:

```bash
ELECTRON_MIRROR="https://npmmirror.com/mirrors/electron/" npm install
```
