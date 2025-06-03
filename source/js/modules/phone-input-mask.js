import IMask from '../vendor/imask/esm/imask';
// eslint-disable-next-line no-unused-vars
import MaskedPattern from '../vendor/imask/esm/masked/pattern';

const phoneInput = document.querySelector('.modal__form-input-phone');
const maskOptions = {
  mask: '+7 (000) 000-00-00'
};

const showPhoneMask = () => IMask(phoneInput, maskOptions);

export { showPhoneMask };
