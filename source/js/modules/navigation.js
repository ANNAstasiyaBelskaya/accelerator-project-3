const navigationContainer = document.querySelector('.page-header__navigation');
const navigationItems = navigationContainer.querySelectorAll('.navigation__item');
const menuButton = document.querySelector('.page-header__menu-button');
const overlay = document.querySelector('.page-header__overlay-container');
const body = document.querySelector('body');

const openMenu = () => {
  menuButton.classList.add('opened');
  navigationContainer.classList.add('opened');
  overlay.classList.add('opened');
  body.classList.add('no-scroll');
};

const openSubMenu = () => {
  navigationItems.forEach((item) => {
    const innerList = item.querySelector('.navigation__inner-list');
    const link = item.querySelector('.navigation__link');

    if (innerList && link) {
      link.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        innerList.classList.toggle('opened');
        link.classList.toggle('opened');
      });
    }
  });
};

const closeMenu = () => {
  menuButton.classList.remove('opened');
  navigationContainer.classList.remove('opened');
  overlay.classList.remove('opened');
  body.classList.remove('no-scroll');

  navigationItems.forEach((item) => {
    const innerList = item.querySelector('.navigation__inner-list');
    const link = item.querySelector('.navigation__link');

    if(innerList && link) {
      innerList.classList.remove('opened');
      link.classList.remove('opened');
    }
  });
};

const addMenuListeners = () => {
  menuButton.addEventListener('click', () => {
    if (navigationContainer.classList.contains('opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', () => {
    closeMenu();
  });
};

export { openSubMenu, addMenuListeners };
