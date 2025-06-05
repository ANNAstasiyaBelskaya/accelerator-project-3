import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const initProgramsSwiper = () => {
  const swiper = new Swiper('.programs', {
    modules: [Navigation],
    navigation: {
      nextEl: '.programs__slider-control-button.swiper-button-next',
      prevEl: '.programs__slider-control-button.swiper-button-prev',
    },
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    spaceBetween: 30,
    breakpoints: {
      320: {
        grabCursor: true,
        allowTouchMove: true,
        slidesPerView: 1,
      },
      768: {
        grabCursor: true,
        allowTouchMove: true,
        slidesPerView: 2,
      },
      1440: {
        grabCursor: false,
        allowTouchMove: false,
        slidesPerView: 3,
      },
    },
  });

  return swiper;
};

export { initProgramsSwiper };
