# Jean Bosco Nsengiyumva — Professional Portfolio

A responsive, multilingual portfolio website built with semantic HTML, organized CSS, and vanilla JavaScript. It is designed for static hosting and requires no build step or third-party JavaScript framework.

## Project structure

- `index.html` — page structure, navigation, portfolio sections, and accessible photo-gallery dialog.
- `style.css` — global layout, typography, responsive rules, and photo-gallery styling.
- `video.css` — isolated responsive styling for the video portfolio and embedded players.
- `script.js` — navigation, language switching, project filters, photo galleries, and reveal effects.
- `videos.js` — video-card rendering and Google Drive player setup.
- `albums.json` — photo-album catalogue and image paths.
- `videos.json` — video titles, labels, descriptions, and Google Drive file IDs.
- `translations.json` — English, French, and Kinyarwanda interface translations.
- `projects.json` — retained legacy project catalogue for compatibility; the live Selected Work gallery uses `albums.json`.
- `assets/` — supplied profile and portfolio photographs.

## Video playback

The two video cards use the Google Drive embedded preview player. Each card also includes an **Open in Google Drive** link as a fallback. This allows visitors to watch the video on the portfolio when embedding is permitted, or open the original Drive viewer directly.

For playback to work for public visitors, set the sharing access of **each video file** in Google Drive to **Anyone with the link — Viewer**:

1. Open the video in Google Drive.
2. Select **Share**.
3. Under **General access**, choose **Anyone with the link**.
4. Confirm the role is **Viewer**, then save.

The website cannot change Google Drive permissions on the owner's behalf. If a file remains restricted, visitors may see a sign-in or access-request screen in the embedded player; the Drive fallback link will open the same file and show Google's access message.

To replace a video, edit the matching entry in `videos.json` and update its `id`, `title`, `label`, or `description`. The ID is the part of the Google Drive URL between `/d/` and `/view`.

## Run locally

Because the site loads its JSON catalogues with `fetch()`, run it through a local web server instead of opening `index.html` directly as a `file://` URL.

For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Publish

Upload the **contents** of this folder to the root of a static hosting project. GitHub Pages, Netlify, Cloudflare Pages, and standard web hosting are supported. Keep the JSON files, JavaScript files, stylesheets, and `assets/` directory at the same relative paths.

### GitHub Pages

1. Upload the contents of this folder to the root of your GitHub repository.
2. Open **Settings → Pages**.
3. Select **Deploy from a branch**, choose `main` and `/(root)`, then save.
4. Wait for the deployment to finish and open the published URL.

## Before publishing

- Confirm contact details, employment titles, and dates.
- Confirm permission to publish all project photographs and identifiable people.
- Confirm that both Google Drive videos are set to **Anyone with the link — Viewer**.
- Review the English, French, and Kinyarwanda wording.

## Maintenance

- Add or update photo albums in `albums.json`.
- Add or update videos in `videos.json`.
- Update interface wording in `translations.json`.
- Add new filters or album categories in the `FILTERS` object in `script.js`.
- Keep all page behavior in external JavaScript files and all styling in external CSS files; the HTML contains no inline event handlers or inline styles.
