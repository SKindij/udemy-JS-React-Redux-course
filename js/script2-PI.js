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

// navigating the DOM tree
console.log(document.documentElement);
console.log(document.body.childNodes);
console.log(document.querySelector('#current'));
console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentNode.parentNode);

// data atributes and childs
console.log(document.querySelector('[data-current="3"]').previousSibling);
console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').nextElementSibling);

console.log('*****************************************')
for (let node of document.querySelector('main').childNodes) {
  if (node.nodeName == '#text') {
    continue;
  }
  console.log(node);
}
console.log('*****************************************')

// some words about recersion







