import { initHeroSwiper } from './modules/hero-slider.js';
import { addMenuListeners, openSubMenu } from './modules/navigation.js';
import { addModalListeners } from './modules/modal-window.js';
import { showPhoneMask } from './modules/phone-input-mask.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeroSwiper();
  openSubMenu();
  addMenuListeners();
  addModalListeners();
  showPhoneMask();
});

