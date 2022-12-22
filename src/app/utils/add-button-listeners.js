import { changeUnits } from './change-temp-units';

export const addListeners = () => {
  const unitSelector = document.querySelectorAll('.tempUnit');
  for (const btns of unitSelector) {
    btns.addEventListener('click', changeUnits);
  }
};
