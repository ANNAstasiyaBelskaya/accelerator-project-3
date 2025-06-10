const addSelectListeners = () => {
  const selectContainer = document.querySelector('.form__field-input--select');
  const selectElement = document.querySelector('.form__field-input select');

  selectElement.addEventListener('click', () => {
    selectContainer.classList.toggle('opened');
  });
};

export { addSelectListeners };
