# Jean Bosco Nsengiyumva — Portfolio

A responsive portfolio built with plain HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — page structure and content sections
- `style.css` — main responsive design
- `video.css` — video section styling
- `script.js` — gallery data, video data, translations and interactions
- `assets/` — photographs and visual assets

## No JSON / no build step
The website does not request or parse JSON files. Album details, video details and the English, French and Kinyarwanda interface text are stored as ordinary JavaScript arrays and objects in `script.js`. This avoids extra catalogue fetch requests and keeps the project deployable as a static website.

## Run locally
Open `index.html` in a browser, or use any static web server. No package installation or build process is required.

## Video playback
The videos use Google Drive preview embeds. For public playback, set each Drive file's sharing access to **Anyone with the link — Viewer**. The direct Google Drive link remains available below each player.

## Update content
Edit the `ALBUMS`, `VIDEOS` and `TRANSLATIONS` values near the top of `script.js`. Keep image paths relative to the project root and preserve the album IDs used in the `FILTERS` object.
