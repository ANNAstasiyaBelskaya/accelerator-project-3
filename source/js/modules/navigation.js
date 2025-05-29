const openMenu = () => {
  const menuButton = document.querySelector('.page-header__menu-button');
  const navigationContainer = document.querySelector('.page-header__navigation');
  const overlay = document.querySelector('.page-header__overlay-container');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('opened');
    navigationContainer.classList.toggle('opened');
    overlay.classList.toggle('opened');
    body.classList.toggle('no-scroll');
  });
};

export { openMenu };

