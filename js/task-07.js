'use strict';

const fontSizeControl = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

fontSizeControl.addEventListener('input', event => {
  output.style.fontSize = event.target.value + 'px';
});
