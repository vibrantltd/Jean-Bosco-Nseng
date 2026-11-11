/* -------------------------------------------------------------------------- */
/* Jean Bosco Nsengiyumva — portfolio interactions                           */
/* -------------------------------------------------------------------------- */

const FILTERS = {
  all: ['workshop', 'dialogue', 'agroecology', 'seedpotato', 'burera', 'graphics'],
  events: ['workshop', 'dialogue', 'agroecology'],
  field: ['seedpotato', 'burera'],
  design: ['graphics'],
};

let albums = [];
let translations = {};

/** Load the site's language dictionary from its dedicated JSON file. */
async function loadTranslations() {
  const response = await fetch('translations.json');
  if (!response.ok) throw new Error('The language dictionary could not be loaded.');
  translations = await response.json();
}

/** Load the album catalogue from its dedicated JSON file. */
async function loadAlbums() {
  const response = await fetch('albums.json');
  if (!response.ok) throw new Error('The portfolio album catalogue could not be loaded.');
  albums = await response.json();
  renderAlbums();
}

/** Return the gallery action label for the active language. */
function galleryButtonLabel() {
  const language = document.documentElement.lang;
  if (language === 'fr') return 'Voir la galerie ↗';
  if (language === 'rw') return 'Reba amafoto yose ↗';
  return 'View full gallery ↗';
}

/** Render the Selected Work cards for the selected category. */
function renderAlbums(filter = 'all') {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.replaceChildren();
  const selectedAlbums = FILTERS[filter] || FILTERS.all;

  albums.filter((album) => selectedAlbums.includes(album.id)).forEach((album) => {
    const card = document.createElement('article');
    card.className = 'work-card album-card';

    const openButton = document.createElement('button');
    openButton.type = 'button';
    openButton.className = 'work-visual album-open';
    openButton.setAttribute('aria-label', 'Open gallery: ' + album.title);
    openButton.addEventListener('click', () => openAlbum(album.id));

    const image = document.createElement('img');
    image.src = album.cover_image;
    image.alt = album.title;
    image.loading = 'lazy';
    openButton.append(image);

    const caption = document.createElement('span');
    caption.className = 'visual-caption';
    caption.textContent = album.title;
    openButton.append(caption);

    const information = document.createElement('div');
    information.className = 'work-info';
    const text = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = album.title;
    const meta = document.createElement('p');
    meta.textContent = album.meta;
    text.append(title, meta);

    const action = document.createElement('span');
    action.className = 'album-cta';
    action.textContent = galleryButtonLabel();
    information.append(text, action);
    card.append(openButton, information);
    grid.append(card);
  });
}

/** Open an album in the accessible photo gallery dialog. */
function openAlbum(albumId) {
  const album = albums.find((item) => item.id === albumId);
  if (!album) return;

  const modal = document.getElementById('gallery-modal');
  document.getElementById('gallery-title').textContent = album.title;
  document.getElementById('gallery-meta').textContent = album.meta;

  const gallery = document.getElementById('gallery-images');
  gallery.replaceChildren();

  album.images.forEach((source, index) => {
    const link = document.createElement('a');
    link.href = source;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'gallery-image';

    const image = document.createElement('img');
    image.src = source;
    image.alt = album.title + ' — photograph ' + (index + 1);
    image.loading = 'lazy';
    link.append(image);
    gallery.append(link);
  });

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('gallery-close').focus();
}

/** Close the gallery and restore page scrolling. */
function closeAlbum() {
  const modal = document.getElementById('gallery-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

/** Apply translated interface text and persist the selected language. */
function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i]').forEach((element) => {
    const translation = dictionary[element.dataset.i];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-html]').forEach((element) => {
    const translation = dictionary[element.dataset.html];
    if (translation) element.innerHTML = translation;
  });

  try {
    localStorage.setItem('jb-lang', language);
  } catch (error) {
  console.error('Portfolio loading failed:', error);

  const grid = document.getElementById('project-grid');

  grid.textContent =
    'Unable to load portfolio data: ' + error.message;
}
    // Local storage may be unavailable in private or restricted browsing modes.
  }

  const activeFilter = document.querySelector('.filter.active');
  if (activeFilter) renderAlbums(activeFilter.dataset.filter);
}

/** Set up the mobile menu, language selector, filters and gallery controls. */
function initializeNavigation() {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav');

  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    });
  });

  document.querySelectorAll('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((filter) => filter.classList.remove('active'));
      button.classList.add('active');
      renderAlbums(button.dataset.filter);
    });
  });

  const languageSelector = document.getElementById('language');
  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('jb-lang') || 'en';
  } catch (error) {
    // Keep English as the default when local storage is unavailable.
  }

  languageSelector.value = savedLanguage;
  languageSelector.addEventListener('change', () => setLanguage(languageSelector.value));

  document.getElementById('gallery-close').addEventListener('click', closeAlbum);
  document.getElementById('gallery-modal').addEventListener('click', (event) => {
    if (event.target.id === 'gallery-modal') closeAlbum();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAlbum();
  });
}

/** Reveal content as it enters the viewport, respecting reduced motion. */
function initializeRevealAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}

/** Start the portfolio once the document is ready. */
document.addEventListener('DOMContentLoaded', async () => {
  initializeNavigation();
  initializeRevealAnimations();
  document.getElementById('year').textContent = new Date().getFullYear();

  try {
    await loadTranslations();
    setLanguage(document.getElementById('language').value || 'en');
    await loadAlbums();
  } catch (error) {
    console.error(error);
    const grid = document.getElementById('project-grid');
    grid.textContent = 'The portfolio content could not be loaded. Please refresh the page.';
  }
});
