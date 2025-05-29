import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const initHeroSwiper = () => {
  const swiper = new Swiper('.hero-slider', {
    modules: [Pagination],
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: '.hero-slider__controls.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className}" type="button" aria-label="Перейти к слайду ${index + 1}"></button>`;
      },
    },
    breakpoints: {
      320: {
        grabCursor: true,
        allowTouchMove: true,
      },
      768: {
        grabCursor: true,
        allowTouchMove: true,
      },
      1440: {
        grabCursor: false,
        allowTouchMove: false,
      },
    },
    on: {
      init: function () {
        movePagination(this);
      },
      slideChange: function () {
        movePagination(this);
      },
    }
  });

  function movePagination (swiperInstance) {
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
    const slideInner = activeSlide.querySelector('.hero-slider__slide-inner');
    const paginationContainer = document.querySelector('.hero-slider__controls.swiper-pagination');

    if (slideInner && paginationContainer) {
      slideInner.appendChild(paginationContainer);
    }
  }
  return swiper;
};

export { initHeroSwiper };
