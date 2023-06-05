'use strict';
const countCategories = document.querySelectorAll('.item').length;
const numberOfItems = 'Number of categories: ' + countCategories;
console.log(numberOfItems);

const headers = document.getElementsByTagName('h2');
for (const header of headers) {
  console.log('Category: ' + header.innerHTML);
  console.log('Elements: ' + header.parentNode.querySelectorAll('ul > li').length);
}
