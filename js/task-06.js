'use strict';

const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', () => {
  const inputMaxLength = +textInput.dataset.length;
  if (textInput.value.length !== inputMaxLength) {
    textInput.classList.add('invalid');
  } else {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  }
});
