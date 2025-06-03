const modalBackground = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');
const closeModalButton = modalContent.querySelector('.modal__close-button');
const openModalButton = document.querySelector('.about__modal-button');

const openModal = () => {
  modalBackground.style.display = 'block';
};

const closeModal = () => {
  modalBackground.style.display = 'none';
};

const addModalListeners = () => {
  openModalButton.addEventListener('click', () => {
    openModal();
  });
  closeModalButton.addEventListener('click', () => {
    closeModal();
  });
  modalBackground.addEventListener('click', (evt) => {
    if (evt.target === modalBackground) {
      closeModal();
    }
  });
};

export { addModalListeners };
