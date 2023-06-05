'use strict';

const totalCount = document.querySelector('#value');

let count = 0;

totalCount.textContent = count;

const handleDecrement = () => {
  count--;
  totalCount.textContent = count;
};

const handleIncrement = () => {
  count++;
  totalCount.textContent = count;
};

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', handleDecrement);
buttonIncrement.addEventListener('click', handleIncrement);
