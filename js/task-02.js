'use strict';
const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatoes', 'Herbs', 'Condiments'];

const ul = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

liElements.forEach(li => {
  ul.appendChild(li);
});
