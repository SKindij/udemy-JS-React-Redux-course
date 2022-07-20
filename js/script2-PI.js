'use strict'
console.log('JS-FrontEnd-Udemy-PI');

const leftButton = document.querySelector('#leftButton');
let info = false;
const elemInfo = (event) => {
    console.log(event.target);
    console.log(event.type);
    info = true;
    if (info) {
      leftButton.removeEventListener('click', elemInfo)
    };
};
leftButton.addEventListener('click', elemInfo);

const firstLink = document.querySelector('#firstLink');






