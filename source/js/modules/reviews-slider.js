import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

const initReviewsSwiper = () => {
  const swiper = new Swiper('.reviews__wrapper', {
    modules: [Navigation, Scrollbar],
    direction: 'horizontal',
    loop: false,
    spaceBetween: 30,
    navigation: {
      nextEl: '.reviews__slider-control-button.swiper-button-next',
      prevEl: '.reviews__slider-control-button.swiper-button-prev',
    },
    scrollbar : {
      el: '.reviews__scrollbar.swiper-scrollbar',
      hide: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grabCursor: true,
        allowTouchMove: true,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.2,
        grabCursor: false,
        allowTouchMove: false,
      },
      1440: {
        grabCursor: false,
        allowTouchMove: false,
      },
    },
  });
  return swiper;
};

export { initReviewsSwiper };
