'use strict'
console.log('JS-FrontEnd-Udemy-PI');

const leftButton = document.querySelector('#leftButton');
const allButtons = document.querySelectorAll('button');

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
firstLink.addEventListener('click', function(event) {
  event.preventDefault(); // override default browser behavior
  console.log(event.target);
});

const showInfo = (event) => {
  console.log('you ' + event.type + ' on ' + event.target);

};

allButtons.forEach(btn => {
  btn.addEventListener('click', showInfo, {once: true});
});






