/**
 * LUMINA VISION - INTERACTIVE IMAGE GALLERY LOGIC
 */

// Gallery Database
const galleryData = [
  {
    id: "img-1",
    title: "Neon Metropolis",
    category: "cyberpunk",
    imageSrc: "images/cyberpunk_city.png",
    description: "Futuristic rainy night in a sprawling cyberpunk megacity illuminated by vibrant neon hues and reflective wet pavement.",
    photographer: "Kaelen Vance",
    photographerAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    likes: 482,
    date: "2026-08-10",
    camera: "Sony A7R V",
    lens: "35mm f/1.4 GM",
    iso: "ISO 400",
    shutter: "1/125s",
    tags: ["Cyberpunk", "Neon", "City", "Night", "Rain"]
  },
  {
    id: "img-2",
    title: "Alpine Golden Hour",
    category: "nature",
    imageSrc: "images/nature_mountain.png",
    description: "Breathtaking morning light breaking over rugged mountain peaks reflected in a crystal clear alpine lake.",
    photographer: "Elena Rostova",
    photographerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    likes: 619,
    date: "2026-08-12",
    camera: "Canon EOS R5",
    lens: "16-35mm f/2.8L",
    iso: "ISO 100",
    shutter: "1/60s",
    tags: ["Nature", "Mountain", "Lake", "Sunrise", "Landscape"]
  },
  {
    id: "img-3",
    title: "Holographic Fluidity",
    category: "abstract",
    imageSrc: "images/abstract_art.png",
    description: "Sinuous 3D glass sculpture displaying iridescent spectral gradients and high-contrast metallic reflections.",
    photographer: "Soren Thorne",
    photographerAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    likes: 354,
    date: "2026-08-15",
    camera: "Octane Render 3D",
    lens: "Macro 100mm",
    iso: "ISO 50",
    shutter: "1/500s",
    tags: ["Abstract", "3D Art", "Glass", "Iridescent", "Design"]
  },
  {
    id: "img-4",
    title: "Minimalist Monolith",
    category: "architecture",
    imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    description: "Sleek geometric lines and shadow play on modern brutalist architectural facades.",
    photographer: "Marcus Vance",
    photographerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    likes: 290,
    date: "2026-07-28",
    camera: "Fujifilm GFX 100 II",
    lens: "23mm f/4 R LM",
    iso: "ISO 160",
    shutter: "1/200s",
    tags: ["Architecture", "Minimalist", "Geometry", "Modern"]
  },
  {
    id: "img-5",
    title: "Celestial Solitude",
    category: "portrait",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80",
    description: "Captivating portrait study highlighting dramatic lighting contrasts and emotional intensity.",
    photographer: "Aria Thorne",
    photographerAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    likes: 540,
    date: "2026-08-01",
    camera: "Nikon Z9",
    lens: "85mm f/1.2 S",
    iso: "ISO 64",
    shutter: "1/320s",
    tags: ["Portrait", "Studio", "Lighting", "Fashion"]
  },
  {
    id: "img-6",
    title: "Majestic Golden Eagle",
    category: "wildlife",
    imageSrc: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80",
    description: "High-speed telephoto capture of a golden eagle soaring above snow-capped mountain crests.",
    photographer: "David Atten",
    photographerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    likes: 412,
    date: "2026-08-05",
    camera: "Sony A1",
    lens: "600mm f/4 GM",
    iso: "ISO 800",
    shutter: "1/3200s",
    tags: ["Wildlife", "Eagle", "Birds", "Nature", "Action"]
  },
  {
    id: "img-7",
    title: "Tokyo Cyber Alleyway",
    category: "cyberpunk",
    imageSrc: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    description: "Atmospheric lantern-lit backstreet in Shinjuku during a midnight rainstorm.",
    photographer: "Kenji Sato",
    photographerAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=100&q=80",
    likes: 523,
    date: "2026-07-20",
    camera: "Leica SL2",
    lens: "50mm f/1.4 Summilux",
    iso: "ISO 1250",
    shutter: "1/160s",
    tags: ["Cyberpunk", "Tokyo", "Street", "Night", "Japan"]
  },
  {
    id: "img-8",
    title: "Spectral Prism Burst",
    category: "abstract",
    imageSrc: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80",
    description: "Macro optical prism refraction breaking light into vivid neon spectrums.",
    photographer: "Maya Lin",
    photographerAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    likes: 310,
    date: "2026-08-09",
    camera: "Hasselblad X2D",
    lens: "120mm f/3.5 Macro",
    iso: "ISO 100",
    shutter: "1/250s",
    tags: ["Abstract", "Prism", "Light", "Color", "Macro"]
  },
  {
    id: "img-9",
    title: "Curved Glass Sanctuary",
    category: "architecture",
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Futuristic skyscraper soaring into cloud-dusted skies with reflective mirror glass.",
    photographer: "Marcus Vance",
    photographerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    likes: 478,
    date: "2026-07-15",
    camera: "Canon EOS R3",
    lens: "24mm f/1.4L",
    iso: "ISO 200",
    shutter: "1/400s",
    tags: ["Architecture", "Skyscraper", "Glass", "City"]
  },
  {
    id: "img-10",
    title: "Solitary Arctic Fox",
    category: "wildlife",
    imageSrc: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80",
    description: "An arctic fox navigating frozen tundras amidst a gentle snowfall.",
    photographer: "Nils Lindqvist",
    photographerAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80",
    likes: 689,
    date: "2026-08-11",
    camera: "Nikon Z8",
    lens: "400mm f/2.8 TC",
    iso: "ISO 640",
    shutter: "1/1000s",
    tags: ["Wildlife", "Arctic", "Snow", "Fox", "Nature"]
  },
  {
    id: "img-11",
    title: "Mystic Emerald Canopy",
    category: "nature",
    imageSrc: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    description: "Sunlight filtering through dense ancient pine trees in a misty mountain forest.",
    photographer: "Elena Rostova",
    photographerAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    likes: 512,
    date: "2026-08-04",
    camera: "Sony A7 IV",
    lens: "24-105mm f/4 G",
    iso: "ISO 320",
    shutter: "1/80s",
    tags: ["Nature", "Forest", "Trees", "Misty", "Green"]
  },
  {
    id: "img-12",
    title: "Silhouette in Crimson",
    category: "portrait",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    description: "Cinematic portrait taking advantage of rich golden hour sunset hues and deep shadows.",
    photographer: "Aria Thorne",
    photographerAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    likes: 388,
    date: "2026-07-30",
    camera: "Canon EOS R5",
    lens: "50mm f/1.2L",
    iso: "ISO 100",
    shutter: "1/500s",
    tags: ["Portrait", "Sunset", "Shadows", "Cinematic"]
  }
];

// App State
const state = {
  currentCategory: 'all',
  searchQuery: '',
  sortOrder: 'featured',
  viewMode: 'grid', // 'grid' | 'list'
  onlyFavorites: false,
  favorites: JSON.parse(localStorage.getItem('lumina_favorites')) || [],
  
  // Lightbox State
  lightboxOpen: false,
  currentImageIndex: 0,
  visibleImages: [...galleryData],
  isSlideshowRunning: false,
  slideshowTimer: null,
  slideshowProgressTimer: null,
  isZoomed: false
};

// DOM Elements
const elements = {
  categoryPills: document.getElementById('category-pills'),
  galleryGrid: document.getElementById('gallery-grid'),
  searchInput: document.getElementById('search-input'),
  searchClearBtn: document.getElementById('search-clear-btn'),
  resultsCount: document.getElementById('results-count'),
  sortSelect: document.getElementById('sort-select'),
  viewGridBtn: document.getElementById('view-grid-btn'),
  viewListBtn: document.getElementById('view-list-btn'),
  favToggleBtn: document.getElementById('fav-toggle-btn'),
  favBadge: document.getElementById('fav-badge'),

  // Lightbox Elements
  lightboxModal: document.getElementById('lightbox-modal'),
  lightboxImage: document.getElementById('lightbox-image'),
  lightboxBody: document.getElementById('lightbox-body'),
  lbTitleHead: document.getElementById('lb-title-head'),
  lbCounterCurrent: document.getElementById('lb-counter-current'),
  lbCounterTotal: document.getElementById('lb-counter-total'),
  lbImgTitle: document.getElementById('lb-img-title'),
  lbImgDesc: document.getElementById('lb-img-desc'),
  exifCamera: document.getElementById('exif-camera'),
  exifLens: document.getElementById('exif-lens'),
  exifIso: document.getElementById('exif-iso'),
  exifShutter: document.getElementById('exif-shutter'),
  lightboxThumbnails: document.getElementById('lightbox-thumbnails'),
  slideshowProgressBar: document.getElementById('slideshow-progress-bar'),

  // Lightbox Buttons
  lbSlideshowBtn: document.getElementById('lb-slideshow-btn'),
  lbZoomBtn: document.getElementById('lb-zoom-btn'),
  lbFullscreenBtn: document.getElementById('lb-fullscreen-btn'),
  lbLikeBtn: document.getElementById('lb-like-btn'),
  lbLikeIcon: document.getElementById('lb-like-icon'),
  lbCloseBtn: document.getElementById('lb-close-btn'),
  navPrev: document.getElementById('nav-prev'),
  navNext: document.getElementById('nav-next'),

  toastContainer: document.getElementById('toast-container')
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initCategories();
  updateFavoritesBadge();
  filterAndRenderGallery();
  bindEvents();
});

/* ==========================================================================
   CATEGORY & FILTER MANAGEMENT
   ========================================================================== */

function initCategories() {
  const categories = [
    { id: 'all', label: 'All Photos', icon: '✨' },
    { id: 'nature', label: 'Nature', icon: '🌲' },
    { id: 'architecture', label: 'Architecture', icon: '🏛️' },
    { id: 'cyberpunk', label: 'Cyberpunk', icon: '🌃' },
    { id: 'portrait', label: 'Portrait', icon: '🎭' },
    { id: 'abstract', label: 'Abstract', icon: '🎨' },
    { id: 'wildlife', label: 'Wildlife', icon: '🦅' }
  ];

  elements.categoryPills.innerHTML = categories.map(cat => {
    const count = cat.id === 'all' 
      ? galleryData.length 
      : galleryData.filter(img => img.category === cat.id).length;
    
    return `
      <button 
        class="category-pill ${cat.id === state.currentCategory ? 'active' : ''}" 
        data-category="${cat.id}"
        role="tab"
        aria-selected="${cat.id === state.currentCategory}"
      >
        <span>${cat.icon}</span>
        <span>${cat.label}</span>
        <span class="pill-count">${count}</span>
      </button>
    `;
  }).join('');
}

function updateFavoritesBadge() {
  elements.favBadge.textContent = state.favorites.length;
}

/* ==========================================================================
   GALLERY FILTERING & RENDERING
   ========================================================================== */

function filterAndRenderGallery() {
  let filtered = [...galleryData];

  // 1. Category Filter
  if (state.currentCategory !== 'all') {
    filtered = filtered.filter(img => img.category === state.currentCategory);
  }

  // 2. Favorites Filter
  if (state.onlyFavorites) {
    filtered = filtered.filter(img => state.favorites.includes(img.id));
  }

  // 3. Search Filter
  if (state.searchQuery.trim() !== '') {
    const query = state.searchQuery.toLowerCase().trim();
    filtered = filtered.filter(img => 
      img.title.toLowerCase().includes(query) ||
      img.category.toLowerCase().includes(query) ||
      img.photographer.toLowerCase().includes(query) ||
      img.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // 4. Sort Logic
  switch (state.sortOrder) {
    case 'popular':
      filtered.sort((a, b) => b.likes - a.likes);
      break;
    case 'title':
      filtered.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'newest':
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'featured':
    default:
      // Keep natural featured ordering
      break;
  }

  state.visibleImages = filtered;
  elements.resultsCount.textContent = filtered.length;

  renderGrid(filtered);
}

function renderGrid(images) {
  if (images.length === 0) {
    elements.galleryGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">📷</div>
        <h3>No Masterpieces Found</h3>
        <p>We couldn't find any images matching your current search or filters.</p>
        <button class="reset-search-btn" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  elements.galleryGrid.innerHTML = images.map((img, index) => {
    const isLiked = state.favorites.includes(img.id);
    return `
      <article 
        class="gallery-card" 
        style="animation-delay: ${index * 0.04}s;" 
        data-id="${img.id}"
        onclick="openLightboxByIndex(${index})"
      >
        <div class="image-wrapper">
          <img 
            src="${img.imageSrc}" 
            alt="${img.title}" 
            class="card-img" 
            loading="lazy" 
          />
          <div class="card-overlay">
            <div class="overlay-top">
              <span class="category-tag">${img.category}</span>
              <div class="card-action-btns">
                <button 
                  class="card-btn ${isLiked ? 'liked' : ''}" 
                  onclick="event.stopPropagation(); toggleFavorite('${img.id}')"
                  title="${isLiked ? 'Remove from favorites' : 'Add to favorites'}"
                  aria-label="Favorite image"
                >
                  ${isLiked ? '❤️' : '🤍'}
                </button>
                <button class="card-btn" title="Quick View" aria-label="Quick View">
                  👁️
                </button>
              </div>
            </div>

            <div class="overlay-bottom">
              <h3 class="card-title">${escapeHtml(img.title)}</h3>
              <div class="card-photographer">
                <img src="${img.photographerAvatar}" alt="${img.photographer}" class="photographer-avatar" />
                <span>${img.photographer}</span>
                <span>• ❤️ ${img.likes}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function resetFilters() {
  state.currentCategory = 'all';
  state.searchQuery = '';
  state.onlyFavorites = false;
  elements.searchInput.value = '';
  elements.searchClearBtn.style.display = 'none';
  elements.favToggleBtn.classList.remove('active');

  // Update pills UI
  document.querySelectorAll('.category-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.category === 'all');
  });

  filterAndRenderGallery();
  showToast('Filters reset');
}

/* ==========================================================================
   FAVORITES ENGINE
   ========================================================================== */

function toggleFavorite(id) {
  const index = state.favorites.indexOf(id);
  const imgObj = galleryData.find(img => img.id === id);

  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast(`Removed "${imgObj ? imgObj.title : 'Image'}" from Favorites`);
  } else {
    state.favorites.push(id);
    showToast(`Added "${imgObj ? imgObj.title : 'Image'}" to Favorites`);
  }

  localStorage.setItem('lumina_favorites', JSON.stringify(state.favorites));
  updateFavoritesBadge();

  // If in favorite mode and unliked, re-filter
  if (state.onlyFavorites) {
    filterAndRenderGallery();
  } else {
    // Re-render cards & lightbox heart icon
    filterAndRenderGallery();
  }

  if (state.lightboxOpen && state.visibleImages[state.currentImageIndex]?.id === id) {
    updateLightboxLikeButton();
  }
}

/* ==========================================================================
   LIGHTBOX ENGINE
   ========================================================================== */

function openLightboxByIndex(index) {
  if (!state.visibleImages[index]) return;

  state.currentImageIndex = index;
  state.lightboxOpen = true;
  state.isZoomed = false;

  elements.lightboxModal.classList.add('active');
  elements.lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  updateLightboxContent();
  renderLightboxThumbnails();
}

function closeLightbox() {
  state.lightboxOpen = false;
  stopSlideshow();

  elements.lightboxModal.classList.remove('active');
  elements.lightboxModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  resetZoom();
}

function updateLightboxContent() {
  const img = state.visibleImages[state.currentImageIndex];
  if (!img) return;

  // Reset zoom on slide change
  resetZoom();

  // Update Counters & Titles
  elements.lbCounterCurrent.textContent = state.currentImageIndex + 1;
  elements.lbCounterTotal.textContent = state.visibleImages.length;
  elements.lbTitleHead.textContent = `— ${img.title}`;
  elements.lbImgTitle.textContent = img.title;
  elements.lbImgDesc.textContent = img.description;

  // Update Image Source
  elements.lightboxImage.src = img.imageSrc;
  elements.lightboxImage.alt = img.title;

  // Update EXIF
  elements.exifCamera.textContent = img.camera;
  elements.exifLens.textContent = img.lens;
  elements.exifIso.textContent = img.iso;
  elements.exifShutter.textContent = img.shutter;

  updateLightboxLikeButton();
  updateActiveThumbnail();
}

function updateLightboxLikeButton() {
  const currentImg = state.visibleImages[state.currentImageIndex];
  if (!currentImg) return;

  const isLiked = state.favorites.includes(currentImg.id);
  elements.lbLikeBtn.classList.toggle('active', isLiked);
  elements.lbLikeIcon.textContent = isLiked ? '❤️ Liked' : '🤍 Like';
}

function showNextImage() {
  if (state.visibleImages.length === 0) return;
  state.currentImageIndex = (state.currentImageIndex + 1) % state.visibleImages.length;
  updateLightboxContent();
}

function showPrevImage() {
  if (state.visibleImages.length === 0) return;
  state.currentImageIndex = (state.currentImageIndex - 1 + state.visibleImages.length) % state.visibleImages.length;
  updateLightboxContent();
}

/* Thumbnail Strip inside Lightbox */
function renderLightboxThumbnails() {
  elements.lightboxThumbnails.innerHTML = state.visibleImages.map((img, i) => `
    <div 
      class="thumb-item ${i === state.currentImageIndex ? 'active' : ''}"
      onclick="jumpToLightboxImage(${i})"
      data-index="${i}"
    >
      <img src="${img.imageSrc}" alt="${img.title}" />
    </div>
  `).join('');
}

function updateActiveThumbnail() {
  document.querySelectorAll('.thumb-item').forEach((thumb, i) => {
    const isActive = i === state.currentImageIndex;
    thumb.classList.toggle('active', isActive);
    if (isActive) {
      thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

function jumpToLightboxImage(index) {
  state.currentImageIndex = index;
  updateLightboxContent();
}

/* ==========================================================================
   SLIDESHOW & ZOOM CONTROLS
   ========================================================================== */

function toggleSlideshow() {
  if (state.isSlideshowRunning) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  state.isSlideshowRunning = true;
  elements.lbSlideshowBtn.classList.add('active');
  elements.lbSlideshowBtn.querySelector('span:nth-child(2)').textContent = 'Pause';
  elements.lbSlideshowBtn.querySelector('.lb-btn-icon').textContent = '⏸';

  showToast('Slideshow Auto-Play Started');
  runSlideshowCycle();
}

function stopSlideshow() {
  state.isSlideshowRunning = false;
  clearInterval(state.slideshowTimer);
  clearInterval(state.slideshowProgressTimer);

  elements.lbSlideshowBtn.classList.remove('active');
  elements.lbSlideshowBtn.querySelector('span:nth-child(2)').textContent = 'Slideshow';
  elements.lbSlideshowBtn.querySelector('.lb-btn-icon').textContent = '▶';
  elements.slideshowProgressBar.style.width = '0%';
}

function runSlideshowCycle() {
  let progress = 0;
  const duration = 3500; // 3.5 seconds per slide
  const step = 50;

  clearInterval(state.slideshowTimer);
  clearInterval(state.slideshowProgressTimer);

  elements.slideshowProgressBar.style.width = '0%';

  state.slideshowProgressTimer = setInterval(() => {
    progress += step;
    const pct = (progress / duration) * 100;
    elements.slideshowProgressBar.style.width = `${pct}%`;
  }, step);

  state.slideshowTimer = setInterval(() => {
    showNextImage();
    progress = 0;
  }, duration);
}

/* Zoom Functionality */
function toggleZoom() {
  state.isZoomed = !state.isZoomed;
  elements.lightboxImage.classList.toggle('zoomed', state.isZoomed);
  elements.lbZoomBtn.classList.toggle('active', state.isZoomed);
  showToast(state.isZoomed ? 'Zoom 1.8x Enabled' : 'Zoom Reset');
}

function resetZoom() {
  state.isZoomed = false;
  elements.lightboxImage.classList.remove('zoomed');
  elements.lbZoomBtn.classList.remove('active');
}

/* Fullscreen Functionality */
function toggleFullscreen() {
  if (!document.fullscreenElement) {
    elements.lightboxModal.requestFullscreen().catch(err => {
      showToast(`Fullscreen error: ${err.message}`);
    });
    elements.lbFullscreenBtn.classList.add('active');
  } else {
    document.exitFullscreen();
    elements.lbFullscreenBtn.classList.remove('active');
  }
}

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */

function bindEvents() {
  // Category Pill Clicks
  elements.categoryPills.addEventListener('click', e => {
    const pill = e.target.closest('.category-pill');
    if (!pill) return;

    document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');

    state.currentCategory = pill.dataset.category;
    filterAndRenderGallery();
  });

  // Live Search Input Listener
  elements.searchInput.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    elements.searchClearBtn.style.display = state.searchQuery ? 'block' : 'none';
    filterAndRenderGallery();
  });

  elements.searchClearBtn.addEventListener('click', () => {
    state.searchQuery = '';
    elements.searchInput.value = '';
    elements.searchClearBtn.style.display = 'none';
    filterAndRenderGallery();
  });

  // Sort Selector Listener
  elements.sortSelect.addEventListener('change', e => {
    state.sortOrder = e.target.value;
    filterAndRenderGallery();
  });

  // Layout View Toggles
  elements.viewGridBtn.addEventListener('click', () => {
    state.viewMode = 'grid';
    elements.viewGridBtn.classList.add('active');
    elements.viewListBtn.classList.remove('active');
    elements.galleryGrid.classList.remove('list-view');
  });

  elements.viewListBtn.addEventListener('click', () => {
    state.viewMode = 'list';
    elements.viewListBtn.classList.add('active');
    elements.viewGridBtn.classList.remove('active');
    elements.galleryGrid.classList.add('list-view');
  });

  // Favorites Filter Toggle
  elements.favToggleBtn.addEventListener('click', () => {
    state.onlyFavorites = !state.onlyFavorites;
    elements.favToggleBtn.classList.toggle('active', state.onlyFavorites);
    filterAndRenderGallery();
    showToast(state.onlyFavorites ? 'Showing Favorites Only' : 'Showing All Images');
  });

  // Lightbox Buttons
  elements.lbCloseBtn.addEventListener('click', closeLightbox);
  elements.navPrev.addEventListener('click', showPrevImage);
  elements.navNext.addEventListener('click', showNextImage);
  elements.lbSlideshowBtn.addEventListener('click', toggleSlideshow);
  elements.lbZoomBtn.addEventListener('click', toggleZoom);
  elements.lbFullscreenBtn.addEventListener('click', toggleFullscreen);

  elements.lbLikeBtn.addEventListener('click', () => {
    const currentImg = state.visibleImages[state.currentImageIndex];
    if (currentImg) {
      toggleFavorite(currentImg.id);
    }
  });

  // Image Click Zoom Toggle in Lightbox
  elements.lightboxImage.addEventListener('click', toggleZoom);

  // Close lightbox on backdrop click
  elements.lightboxModal.addEventListener('click', e => {
    if (e.target === elements.lightboxBody || e.target === elements.lightboxModal) {
      closeLightbox();
    }
  });

  // Global Keyboard Shortcuts
  document.addEventListener('keydown', e => {
    // Focus search on '/'
    if (e.key === '/' && document.activeElement !== elements.searchInput) {
      e.preventDefault();
      elements.searchInput.focus();
      return;
    }

    if (!state.lightboxOpen) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showPrevImage();
        break;
      case 'ArrowRight':
        showNextImage();
        break;
      case ' ':
        e.preventDefault();
        toggleSlideshow();
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
    }
  });
}

/* ==========================================================================
   TOAST HELPER SYSTEM
   ========================================================================== */

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">✨</span>
    <span>${escapeHtml(message)}</span>
  `;

  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2600);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
