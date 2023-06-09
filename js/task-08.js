'use strict';

const loginForm = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

loginForm.addEventListener('submit', handleSubmit);
