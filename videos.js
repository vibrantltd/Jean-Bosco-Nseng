/* -------------------------------------------------------------------------- */
/* Video portfolio — Google Drive embeds with direct-link fallbacks            */
/* -------------------------------------------------------------------------- */

const VIDEO_CATALOGUE_PATH = 'videos.json';
const DRIVE_FILE_URL = 'https://drive.google.com/file/d/';

/** Build one video card with an embedded Drive player and a fallback link. */
function createVideoCard(video) {
  const card = document.createElement('article');
  card.className = 'video-card';

  const heading = document.createElement('div');
  heading.className = 'video-card-heading';

  const label = document.createElement('span');
  label.className = 'video-card-label';
  label.textContent = video.label;

  const title = document.createElement('h3');
  title.textContent = video.title;
  heading.append(label, title);

  const player = document.createElement('iframe');
  player.className = 'drive-player';
  player.src = `${DRIVE_FILE_URL}${encodeURIComponent(video.id)}/preview`;
  player.title = `${video.title} — Google Drive video player`;
  player.loading = 'lazy';
  player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  player.allowFullscreen = true;
  player.referrerPolicy = 'strict-origin-when-cross-origin';

  const footer = document.createElement('div');
  footer.className = 'video-card-footer';

  const description = document.createElement('p');
  description.textContent = video.description;

  const driveLink = document.createElement('a');
  driveLink.href = `${DRIVE_FILE_URL}${encodeURIComponent(video.id)}/view?usp=sharing`;
  driveLink.target = '_blank';
  driveLink.rel = 'noopener noreferrer';
  driveLink.textContent = 'Open in Google Drive ↗';
  driveLink.setAttribute('aria-label', `Open ${video.title} in Google Drive`);

  footer.append(description, driveLink);
  card.append(heading, player, footer);
  return card;
}

/** Load and render the videos from the separate catalogue file. */
async function loadVideoGallery() {
  const gallery = document.getElementById('video-grid');
  if (!gallery) return;

  try {
    const response = await fetch(VIDEO_CATALOGUE_PATH);
    if (!response.ok) throw new Error('Unable to load the video catalogue.');

    const videos = await response.json();
    videos.forEach((video) => gallery.append(createVideoCard(video)));
  } catch (error) {
    console.error(error);
    const message = document.createElement('p');
    message.className = 'video-load-error';
    message.textContent = 'Videos could not be loaded. Please use the Google Drive links below.';
    gallery.append(message);
  }
}

document.addEventListener('DOMContentLoaded', loadVideoGallery);
