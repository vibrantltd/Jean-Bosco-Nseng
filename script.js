/* Jean Bosco Nsengiyumva — portfolio
   Vanilla JavaScript only. Content is kept here so the site makes no JSON requests. */

const ALBUMS = [
  {
    "id": "workshop",
    "title": "NATIONAL WORKSHOP ON STRENGTHENING AGRICULTURAL EXTENSION PRACTITIONERS IN RWANDA",
    "meta": "12 March 2026 · Musanze District",
    "cover_image": "assets/gallery-p07_i1.jpg",
    "images": [
      "assets/gallery-p02_i1.jpg",
      "assets/gallery-p02_i2.jpg",
      "assets/gallery-p03_i1.jpg",
      "assets/gallery-p03_i2.jpg",
      "assets/gallery-p04_i1.jpg",
      "assets/gallery-p05_i1.jpg",
      "assets/gallery-p05_i2.jpg",
      "assets/gallery-p06_i1.jpg",
      "assets/gallery-p07_i1.jpg",
      "assets/gallery-p07_i2.jpg"
    ]
  },
  {
    "id": "dialogue",
    "title": "NATIONAL DIALOGUE ON AGRICULTURE EXTENSION AND ADVISORY SERVICES",
    "meta": "26 March 2026 · Lemigo Hotel, Kigali",
    "cover_image": "assets/gallery-p09_i2.jpg",
    "images": [
      "assets/gallery-p09_i1.jpg",
      "assets/gallery-p09_i2.jpg",
      "assets/gallery-p10_i1.jpg",
      "assets/gallery-p10_i2.jpg",
      "assets/gallery-p11_i1.jpg",
      "assets/gallery-p11_i2.jpg",
      "assets/gallery-p12_i1.jpg",
      "assets/gallery-p13_i1.jpg",
      "assets/gallery-p13_i2.jpg",
      "assets/gallery-p14_i1.jpg",
      "assets/gallery-p15_i1.jpg",
      "assets/gallery-p15_i2.jpg",
      "assets/gallery-p16_i1.jpg",
      "assets/gallery-p17_i1.jpg",
      "assets/gallery-p18_i1.jpg"
    ]
  },
  {
    "id": "agroecology",
    "title": "2ND NATIONAL AGROECOLOGY SYMPOSIUM & EXHIBITION",
    "meta": "10 July 2026 · M Hotel, Kigali",
    "cover_image": "assets/gallery-p19_i1.jpg",
    "images": [
      "assets/gallery-p19_i1.jpg",
      "assets/gallery-p19_i2.jpg",
      "assets/gallery-p20_i1.jpg",
      "assets/gallery-p20_i2.jpg",
      "assets/gallery-p21_i1.jpg",
      "assets/gallery-p22_i1.jpg",
      "assets/gallery-p23_i1.jpg",
      "assets/gallery-p23_i2.jpg",
      "assets/gallery-p24_i1.jpg",
      "assets/gallery-p24_i2.jpg",
      "assets/gallery-p25_i1.jpg",
      "assets/gallery-p25_i2.jpg",
      "assets/gallery-p26_i1.jpg",
      "assets/gallery-p26_i2.jpg",
      "assets/gallery-p27_i1.jpg",
      "assets/gallery-p27_i2.jpg",
      "assets/gallery-p28_i1.jpg",
      "assets/gallery-p28_i2.jpg",
      "assets/gallery-p29_i1.jpg"
    ]
  },
  {
    "id": "seedpotato",
    "title": "SEED POTATO HUB PROJECT — GICUMBI, KANIGA",
    "meta": "Agricultural field documentation · AgriResearch Unguka",
    "cover_image": "assets/gallery-p34_i1.jpg",
    "images": [
      "assets/gallery-p31_i1.jpg",
      "assets/gallery-p32_i1.jpg",
      "assets/gallery-p32_i2.jpg",
      "assets/gallery-p33_i1.jpg",
      "assets/gallery-p34_i1.jpg",
      "assets/gallery-p35_i1.jpg",
      "assets/gallery-p36_i1.jpg"
    ]
  },
  {
    "id": "burera",
    "title": "FIELD ACTIVITY — BUTARO, BURERA DISTRICT",
    "meta": "Field photography · Butaro, Burera District, Rwanda",
    "cover_image": "assets/VIB1520.jpg",
    "images": [
      "assets/VIB1520.jpg",
      "assets/VIB1540.jpg",
      "assets/VIB1542.jpg",
      "assets/_VIB1574.jpg",
      "assets/_VIB1627.jpg",
      "assets/_VIB1642.jpg",
      "assets/_VIB1722.jpg",
      "assets/_VIB1728.jpg",
      "assets/_VIB1759.jpg",
      "assets/_VIB1766_2.jpg"
    ]
  },
  {
    "id": "graphics",
    "title": "GRAPHIC DESIGN PROJECTS",
    "meta": "Selected graphic design and visual communication work",
    "cover_image": "assets/gallery-p41_i1.jpg",
    "images": [
      "assets/gallery-p38_i1.jpg",
      "assets/gallery-p38_i2.jpg",
      "assets/gallery-p39_i1.jpg",
      "assets/gallery-p40_i1.jpg",
      "assets/gallery-p41_i1.jpg",
      "assets/gallery-p42_i1.jpg",
      "assets/gallery-p43_i1.jpg",
      "assets/gallery-p44_i1.jpg"
    ]
  }
];

const VIDEOS = [
  {
    "id": "1r987EP77L4aFggm50iimfOQ1ssbf4RB3",
    "title": "Featured film",
    "label": "VIDEO 01",
    "description": "A selection from my video production work."
  },
  {
    "id": "1i3bOqJsZKUPIoA9akPd2e14BvN0REHzU",
    "title": "Behind the story",
    "label": "VIDEO 02",
    "description": "More moments captured through the lens."
  }
];

const TRANSLATIONS = {
  "en": {
    "navWork": "Selected work",
    "navAbout": "About",
    "navServices": "What I do",
    "navContact": "Get in touch ↗",
    "eyebrow": "MULTIMEDIA CREATOR · RWANDA",
    "heroTitle": "Stories worth<br><em>seeing.</em>",
    "heroIntro": "I'm Jean Bosco Nsengiyumva — a photographer, videographer and graphic designer creating visual content that connects people, places and ideas.",
    "explore": "Explore my work ↘",
    "aboutLink": "A little about me ↗",
    "based": "BASED IN RWANDA",
    "heroCaption": "DOCUMENTING PEOPLE & IDEAS",
    "introHeadline": "Curiosity behind the camera.<br><strong>Purpose in every frame.</strong>",
    "introText": "I work across photography, video and design to document real moments and shape clear, thoughtful visual communication.",
    "workEyebrow": "A SELECTION OF MY WORK",
    "workTitle": "Selected <em>work.</em>",
    "workIntro": "Event documentation, agricultural field stories, exhibitions and graphic design projects.",
    "filterAll": "All work",
    "filterEvents": "Events",
    "filterField": "Field stories",
    "filterDesign": "Graphic design",
    "servicesEyebrow": "CREATIVE & DIGITAL SERVICES",
    "servicesTitle": "Ideas into<br><em>experiences.</em>",
    "servicesIntro": "Creative production and practical digital support for people, organizations and businesses.",
    "discuss": "Discuss a project ↗",
    "servicePhoto": "Photography & studio",
    "servicePhotoDesc": "Portraits, events, weddings, celebrations and documentary photography.",
    "serviceVideo": "Videography & editing",
    "serviceVideoDesc": "Video coverage, editing, post-production and visual storytelling.",
    "serviceDesign": "Graphic design",
    "serviceDesignDesc": "Brand identity, campaign materials, layouts and promotional design.",
    "serviceDigital": "Web & digital support",
    "serviceDigitalDesc": "Website design, hosting, maintenance and practical IT support.",
    "serviceSocial": "Social media management",
    "serviceSocialDesc": "Content planning, page management and digital communication.",
    "aboutEyebrow": "THE PERSON BEHIND THE WORK",
    "aboutTitle": "Creative eye.<br><em>Technical mind.</em>",
    "aboutLead": "I’m Jean Bosco, a Rwanda-based multimedia creator with a background in graphic design, photography, videography and technology.",
    "aboutBody": "My experience spans creative production, field coordination, digital communication and community engagement. I enjoy turning ideas and real-life experiences into thoughtful visual stories.",
    "exp1": "Territory Coordinator & Graphic Designer · SOLEKTRA RWANDA Ltd",
    "exp2": "Founder · VIBRANT DIGITAL SOLUTIONS Ltd",
    "exp3": "Graphic Design, IT Support & Web Development · AGRIRESEARCH UNGUKA Ltd",
    "exp4": "Digital Ambassador · RiSA Digital Ambassador Program",
    "connect": "Let's connect ↗",
    "practiceEyebrow": "TOOLS & PRACTICE",
    "skillsTitle": "What I <em>bring.</em>",
    "skillsIntro": "A mix of creative craft, production skills and technical experience.",
    "skill1": "Photography",
    "skill2": "Videography",
    "skill3": "Graphic design",
    "skill4": "Digital & technology",
    "tools": "TOOLS I USE",
    "clientEyebrow": "SELECTED CLIENT EXPERIENCE",
    "clientTitle": "Work with <em>organizations.</em>",
    "clientBio": "Website · Graphic design & photography support",
    "clientAgri": "Website · Graphic design & photography support",
    "clientNote": "Presented as previous client/work relationships, not independently verified endorsements.",
    "contactEyebrow": "HAVE A STORY TO TELL?",
    "contactTitle": "Let's make<br><em>something meaningful.</em>",
    "contactIntro": "For creative collaborations, photography, video production or digital projects, I'd be glad to hear from you.",
    "rights": "All rights reserved.",
    "top": "BACK TO TOP ↑",
    "navVideos": "Videos"
  },
  "fr": {
    "navWork": "Réalisations",
    "navAbout": "À propos",
    "navServices": "Mes services",
    "navContact": "Me contacter ↗",
    "eyebrow": "CRÉATEUR MULTIMÉDIA · RWANDA",
    "heroTitle": "Des histoires à<br><em>voir.</em>",
    "heroIntro": "Je suis Jean Bosco Nsengiyumva — photographe, vidéaste et graphiste. Je crée des contenus visuels qui rapprochent les personnes, les lieux et les idées.",
    "explore": "Voir mes réalisations ↘",
    "aboutLink": "À propos de moi ↗",
    "based": "BASÉ AU RWANDA",
    "heroCaption": "RACONTER LES PERSONNES ET LES IDÉES",
    "introHeadline": "La curiosité derrière l’objectif.<br><strong>Un sens dans chaque image.</strong>",
    "introText": "Je travaille dans la photographie, la vidéo et le design pour documenter des moments réels et créer une communication visuelle claire.",
    "workEyebrow": "UNE SÉLECTION DE MES RÉALISATIONS",
    "workTitle": "Mes <em>réalisations.</em>",
    "workIntro": "Reportages événementiels, projets agricoles, expositions et travaux de design graphique.",
    "filterAll": "Tout",
    "filterEvents": "Événements",
    "filterField": "Terrain",
    "filterDesign": "Design graphique",
    "servicesEyebrow": "SERVICES CRÉATIFS ET NUMÉRIQUES",
    "servicesTitle": "Des idées aux<br><em>expériences.</em>",
    "servicesIntro": "Production créative et accompagnement numérique pour les personnes, organisations et entreprises.",
    "discuss": "Parlons de votre projet ↗",
    "servicePhoto": "Photographie et studio",
    "servicePhotoDesc": "Portraits, événements, mariages, célébrations et photographie documentaire.",
    "serviceVideo": "Vidéo et montage",
    "serviceVideoDesc": "Captation vidéo, montage, postproduction et narration visuelle.",
    "serviceDesign": "Design graphique",
    "serviceDesignDesc": "Identité visuelle, supports de campagne, mise en page et supports promotionnels.",
    "serviceDigital": "Web et assistance numérique",
    "serviceDigitalDesc": "Conception de sites web, hébergement, maintenance et assistance informatique.",
    "serviceSocial": "Gestion des réseaux sociaux",
    "serviceSocialDesc": "Planification de contenu, gestion de pages et communication numérique.",
    "aboutEyebrow": "LA PERSONNE DERRIÈRE LE TRAVAIL",
    "aboutTitle": "Un regard créatif.<br><em>Un esprit technique.</em>",
    "aboutLead": "Je suis Jean Bosco, créateur multimédia basé au Rwanda, avec une expérience en design graphique, photographie, vidéo et technologie.",
    "aboutBody": "Mon expérience couvre la production créative, la coordination sur le terrain, la communication numérique et l’engagement communautaire. J’aime transformer les idées et les expériences réelles en récits visuels réfléchis.",
    "exp1": "Coordinateur territorial et graphiste · SOLEKTRA RWANDA Ltd",
    "exp2": "Fondateur · VIBRANT DIGITAL SOLUTIONS Ltd",
    "exp3": "Design graphique, assistance informatique et développement web · AGRIRESEARCH UNGUKA Ltd",
    "exp4": "Ambassadeur numérique · Programme RiSA Digital Ambassador",
    "connect": "Prenons contact ↗",
    "practiceEyebrow": "OUTILS ET PRATIQUE",
    "skillsTitle": "Mes <em>compétences.</em>",
    "skillsIntro": "Un mélange de créativité, de production et d’expérience technique.",
    "skill1": "Photographie",
    "skill2": "Vidéographie",
    "skill3": "Design graphique",
    "skill4": "Numérique et technologie",
    "tools": "MES OUTILS",
    "clientEyebrow": "EXPÉRIENCE AVEC DES CLIENTS",
    "clientTitle": "Collaborations avec des <em>organisations.</em>",
    "clientBio": "Site web · Design graphique et photographie",
    "clientAgri": "Site web · Design graphique et photographie",
    "clientNote": "Présentés comme des expériences professionnelles antérieures, et non comme des recommandations vérifiées indépendamment.",
    "contactEyebrow": "UN PROJET À RACONTER ?",
    "contactTitle": "Créons quelque chose<br><em>qui a du sens.</em>",
    "contactIntro": "Pour une collaboration créative, une séance photo, une production vidéo ou un projet numérique, contactez-moi.",
    "rights": "Tous droits réservés.",
    "top": "RETOUR EN HAUT ↑",
    "navVideos": "Vidéos"
  },
  "rw": {
    "navWork": "Imirimo nakoze",
    "navAbout": "Ibyanjye",
    "navServices": "Serivisi ntanga",
    "navContact": "Tuvugane ↗",
    "eyebrow": "UMUHANGA MU BIKORWA BYA MULTIMÉDIA · RWANDA",
    "heroTitle": "Inkuru zikwiye<br><em>kubonwa.</em>",
    "heroIntro": "Nitwa Jean Bosco Nsengiyumva — ndi umufotozi, ukora amashusho n'ibishushanyo mbonera. Ntegura ibikubiyemo bigaragaza abantu, ahantu n'ibitekerezo.",
    "explore": "Reba imirimo nakoze ↘",
    "aboutLink": "Menya byinshi kuri njye ↗",
    "based": "NKORERA MU RWANDA",
    "heroCaption": "KUGARAGAZA ABANTU N'IBITEKEREZO",
    "introHeadline": "Amatsiko inyuma ya camera.<br><strong>Intego muri buri foto.</strong>",
    "introText": "Nkora ibijyanye no gufotora, amashusho n'ibishushanyo mbonera kugira ngo ngaragaze ibihe nyakuri kandi ntange ubutumwa busobanutse.",
    "workEyebrow": "BIMWE MU BYO NAKOZE",
    "workTitle": "Imirimo <em>nakoze.</em>",
    "workIntro": "Amafoto y'ibirori n'inama, ibikorwa by'ubuhinzi, imurikabikorwa n'ibishushanyo mbonera.",
    "filterAll": "Byose",
    "filterEvents": "Ibirori n'inama",
    "filterField": "Ibikorwa mu murima",
    "filterDesign": "Graphic design",
    "servicesEyebrow": "SERIVISI Z'UBUHANGA N'IKORANABUHANGA",
    "servicesTitle": "Ibitekerezo tubigire<br><em>ibikorwa.</em>",
    "servicesIntro": "Serivisi zo guhanga no gufasha mu ikoranabuhanga ku bantu, imiryango n'ibigo.",
    "discuss": "Ganira nanjye ku mushinga ↗",
    "servicePhoto": "Gufotora na studio",
    "servicePhotoDesc": "Amafoto y'abantu, ibirori, ubukwe, iminsi mikuru n'ibikorwa byo mu buzima busanzwe.",
    "serviceVideo": "Gukora no gutunganya amashusho",
    "serviceVideoDesc": "Gufata amashusho, kuyatunganya no kuyaha ubutumwa busobanutse.",
    "serviceDesign": "Graphic design",
    "serviceDesignDesc": "Ibimenyetso biranga ikigo, ibyapa, amatangazo n'ibindi bishushanyo.",
    "serviceDigital": "Web design n'ubufasha mu ikoranabuhanga",
    "serviceDigitalDesc": "Gukora imbuga za internet, kuzibika kuri hosting, kuzikurikirana no gufasha mu bya IT.",
    "serviceSocial": "Gucunga imbuga nkoranyambaga",
    "serviceSocialDesc": "Gutegura ibikorerwa kuri social media, gucunga amapaji no gutanga amakuru.",
    "aboutEyebrow": "UMUNTU URI INYUMA Y'IBIKORWA",
    "aboutTitle": "Ijisho rihanga.<br><em>Ubwenge mu ikoranabuhanga.</em>",
    "aboutLead": "Ndi Jean Bosco, umuhanga mu bikorwa bya multimédia ukorera mu Rwanda, ufite ubumenyi mu graphic design, gufotora, gukora amashusho n'ikoranabuhanga.",
    "aboutBody": "Mfite ubunararibonye mu gutegura ibihangano, guhuza ibikorwa byo mu mirima, itumanaho rya digitale no gukorana n'abaturage. Nkunda guhindura ibitekerezo n'ibyabaye nyakuri inkuru zigaragara neza.",
    "exp1": "Umuhuzabikorwa w'akarere n'umuhanga mu bishushanyo · SOLEKTRA RWANDA Ltd",
    "exp2": "Umuyobozi washinze · VIBRANT DIGITAL SOLUTIONS Ltd",
    "exp3": "Graphic design, ubufasha bwa IT no gukora imbuga za internet · AGRIRESEARCH UNGUKA Ltd",
    "exp4": "Digital Ambassador · RiSA Digital Ambassador Program",
    "connect": "Tuvugane ↗",
    "practiceEyebrow": "IBIKORESHO N'UBUMENYI",
    "skillsTitle": "Ibyo <em>nshoboye.</em>",
    "skillsIntro": "Guhuza guhanga, ubuhanga mu gutunganya ibihangano n'ubumenyi mu ikoranabuhanga.",
    "skill1": "Gufotora",
    "skill2": "Gukora amashusho",
    "skill3": "Graphic design",
    "skill4": "Ikoranabuhanga",
    "tools": "IBIKORESHO NKORESHA",
    "clientEyebrow": "IBIGO TWAKORANYE",
    "clientTitle": "Imikoranire n'<em>ibigo.</em>",
    "clientBio": "Urubuga · Graphic design no gufotora",
    "clientAgri": "Urubuga · Graphic design no gufotora",
    "clientNote": "Ibi bigo bigaragazwa nk'aho twakoranye mu kazi; si inyandiko zemeza ubuhamya bwabyo mu buryo bwigenga.",
    "contactEyebrow": "UFITE UMUSHINGA CYANGWA INKURU?",
    "contactTitle": "Dukore ikintu<br><em>gifite umumaro.</em>",
    "contactIntro": "Ku bufatanye mu guhanga, gufotora, gukora amashusho cyangwa imishinga ya digitale, nditeguye kuganira nawe.",
    "rights": "Uburenganzira bwose burabitswe.",
    "top": "SUBIRA HEJURU ↑",
    "navVideos": "Amashusho"
  }
};

const FILTERS = {
  all: ['workshop', 'dialogue', 'agroecology', 'seedpotato', 'burera', 'graphics'],
  events: ['workshop', 'dialogue', 'agroecology'],
  field: ['seedpotato', 'burera'],
  design: ['graphics']
};

const DRIVE_URL = 'https://drive.google.com/file/d/';

/* ---------- Project gallery ---------- */
function renderAlbums(filter = 'all') {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.replaceChildren();
  const allowed = FILTERS[filter] || FILTERS.all;
  const label = document.documentElement.lang === 'rw'
    ? 'Reba amafoto yose ↗'
    : document.documentElement.lang === 'fr'
      ? 'Voir la galerie ↗'
      : 'View full gallery ↗';

  ALBUMS.filter(album => allowed.includes(album.id)).forEach(album => {
    const card = document.createElement('article');
    card.className = 'work-card album-card';

    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'work-visual album-open';
    open.setAttribute('aria-label', 'Open gallery: ' + album.title);

    const img = document.createElement('img');
    img.src = album.cover_image;
    img.alt = album.title;
    img.loading = 'lazy';

    const caption = document.createElement('span');
    caption.className = 'visual-caption';
    caption.textContent = album.title;
    open.append(img, caption);
    open.addEventListener('click', () => openAlbum(album.id));

    const info = document.createElement('div');
    info.className = 'work-info';
    const text = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = album.title;
    const meta = document.createElement('p');
    meta.textContent = album.meta;
    text.append(title, meta);

    const action = document.createElement('span');
    action.className = 'album-cta';
    action.textContent = label;
    info.append(text, action);
    card.append(open, info);
    grid.append(card);
  });
}

/* ---------- Photo lightbox ---------- */
function openAlbum(id) {
  const album = ALBUMS.find(item => item.id === id);
  if (!album) return;

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

  const modal = document.getElementById('gallery-modal');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('gallery-close').focus();
}

function closeAlbum() {
  const modal = document.getElementById('gallery-modal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

/* ---------- Video cards ---------- */
function renderVideos() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;
  grid.replaceChildren();

  VIDEOS.forEach(video => {
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
    player.src = DRIVE_URL + encodeURIComponent(video.id) + '/preview';
    player.title = video.title + ' — Google Drive video player';
    player.loading = 'lazy';
    player.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    player.allowFullscreen = true;
    player.referrerPolicy = 'strict-origin-when-cross-origin';

    const footer = document.createElement('div');
    footer.className = 'video-card-footer';
    const description = document.createElement('p');
    description.textContent = video.description;
    const link = document.createElement('a');
    link.href = DRIVE_URL + encodeURIComponent(video.id) + '/view?usp=sharing';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Open in Google Drive ↗';
    footer.append(description, link);

    card.append(heading, player, footer);
    grid.append(card);
  });
}

/* ---------- Language ---------- */
function setLanguage(language) {
  const dictionary = TRANSLATIONS[language] || TRANSLATIONS.en;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i]').forEach(element => {
    const value = dictionary[element.dataset.i];
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-html]').forEach(element => {
    const value = dictionary[element.dataset.html];
    if (value) element.innerHTML = value;
  });

  try { localStorage.setItem('jb-lang', language); } catch (error) {}
  const active = document.querySelector('.filter.active');
  renderAlbums(active ? active.dataset.filter : 'all');
}

/* ---------- Navigation and interactions ---------- */
function initializeNavigation() {
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  menu.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(opened));
    menu.textContent = opened ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = '☰';
  }));

  document.querySelectorAll('.filter').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      renderAlbums(button.dataset.filter);
    });
  });

  const selector = document.getElementById('language');
  let language = 'en';
  try { language = localStorage.getItem('jb-lang') || 'en'; } catch (error) {}
  selector.value = TRANSLATIONS[language] ? language : 'en';
  selector.addEventListener('change', () => setLanguage(selector.value));

  document.getElementById('gallery-close').addEventListener('click', closeAlbum);
  document.getElementById('gallery-modal').addEventListener('click', event => {
    if (event.target.id === 'gallery-modal') closeAlbum();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeAlbum();
  });
}

function initializeRevealAnimations() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  elements.forEach(element => observer.observe(element));
}

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeRevealAnimations();
  document.getElementById('year').textContent = new Date().getFullYear();
  setLanguage(document.getElementById('language').value || 'en');
  renderAlbums();
  renderVideos();
});
