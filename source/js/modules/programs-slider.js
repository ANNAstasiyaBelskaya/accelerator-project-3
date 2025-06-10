import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { Scrollbar } from 'swiper/modules';

const initProgramsSwiper = () => {
  const swiper = new Swiper('.programs__wrapper', {
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '.programs__slider-control-button.swiper-button-next',
      prevEl: '.programs__slider-control-button.swiper-button-prev',
    },
    scrollbar: {
      el: '.programs__scrollbar.swiper-scrollbar',
      hide: false,
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
