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

// some words about recursion
function powA (x, n) {
  let result = 1; 
  for (let k = 1; k <= n; k++) {
    result *= x;
  }
  return result;
}
console.log(powA(2,1), powA(2,3), powA(2,5)); // => 2 8 32

function powB (x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * powB (x, n - 1)
  }
}
console.log(powB(2,1), powB(2,3), powB(2,5)); // => 2 8 32









