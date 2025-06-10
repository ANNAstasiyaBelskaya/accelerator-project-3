import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const tabs = document.querySelectorAll('.news__tab');
let swiper;

const addActiveBulletColor = () => {
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');

  bullets.forEach((bullet) => {
    bullet.addEventListener('mousedown', () => {
      bullet.classList.add('just-activated');
    });

    bullet.addEventListener('mouseup', () => {
      bullet.classList.remove('just-activated');
    });

    bullet.addEventListener('mouseleave', () => {
      bullet.classList.remove('just-activated');
    });
  });
};

const scrollToActiveTab = () => {
  const activeTab = document.querySelector('.news__tab--active');

  if (activeTab) {
    const tabContainer = document.querySelector('.news__tabs');

    tabContainer.scrollLeft = activeTab.offsetLeft - (tabContainer.offsetWidth - activeTab.offsetWidth) / 2;
  }

};

const changeTab = (index) => {
  tabs.forEach((tab) => {
    tab.classList.remove('news__tab--active');
  });

  tabs[index].classList.add('news__tab--active');
  swiper.slideTo(index);
  scrollToActiveTab();
};

const initNewsSwiper = () => {
  swiper = new Swiper('.news__wrapper', {
    modules: [Pagination, Navigation],
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    spaceBetween: 30,
    pagination: {
      el: '.news__slider-pagination.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${ className }" type="button" aria-label="Перейти к слайду \${index + 1}">${ index + 1 }</button>`;
      }
    },
    navigation: {
      nextEl: '.news__slider-navigation-button.swiper-button-next',
      prevEl: '.news__slider-navigation-button.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        grabCursor: true,
        allowTouchMove: true,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        grabCursor: false,
        allowTouchMove: false,
      },
      1440: {
        grabCursor: false,
        allowTouchMove: false,
      },
    },
    on: {
      slideChange: function () {
        changeTab(this.activeIndex);
      }
    }
  });

  return swiper;
};

const initTabs = () => {
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      changeTab(index);
    });
  });
};

export { initNewsSwiper, addActiveBulletColor, initTabs };
