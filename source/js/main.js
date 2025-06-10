import { initHeroSwiper } from './modules/hero-slider.js';
import { addMenuListeners, openSubMenu } from './modules/navigation.js';
import { addModalListeners } from './modules/modal-window.js';
import { showPhoneMask } from './modules/phone-input-mask.js';
import { initProgramsSwiper } from './modules/programs-slider.js';
import { initNewsSwiper, addActiveBulletColor, initTabs } from './modules/news-slider.js';
import { initReviewsSwiper } from './modules/reviews-slider.js';
import { addSelectListeners } from './modules/select.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroSwiper();
  openSubMenu();
  addMenuListeners();
  addModalListeners();
  showPhoneMask();
  initProgramsSwiper();
  initNewsSwiper();
  addActiveBulletColor();
  initTabs();
  initReviewsSwiper();
  addSelectListeners();
});

