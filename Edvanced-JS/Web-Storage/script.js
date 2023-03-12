'use strict';

const form = document.querySelector('form'),
  checkbox = document.querySelector('#checkbox'),
  change = document.querySelector('#color');

// check the saved settings
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
};
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
  };

// save user settings on the web page
checkbox.addEventListener('change', () =>{
  localStorage.setItem('isChecked', true)
});

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'white';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'red';
  };
});

// store a certain object in storage
const persone = {
    name: 'Piksi',
    occupation: 'student',
    university: 'KPI',
    age: 19
};
const serializedPerson = JSON.stringify(persone);
localStorage.setItem('Piksi', serializedPerson);

console.log('receive object with data');
console.log(JSON.parse(localStorage.getItem('Piksi')));
