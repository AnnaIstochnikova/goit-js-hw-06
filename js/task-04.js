'use strict';

const totalCount = document.querySelector('#value');

let count = 0;

totalCount.innerHTML = count;

const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', handleDecrement);
buttonIncrement.addEventListener('click', handleIncrement);
