'use strict';
// some older ways
const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons); // => HTMLCollection(5) [button, ...]
console.log(buttons[0]); // => selected the first button

const circles = document.getElementsByClassName('circle');
console.log(circles); // => HTMLCollection(3) [div.circle, ...]

// more modern way
const hearts = document.querySelectorAll('.heart');
console.log(hearts); // => NodeList(3) [div.heart, ...]
for (let i = 0; i < hearts.length; i++) {
    console.log(hearts[i]);
}; // we get each element from the pseudoarray
  
const wrapper = document.querySelector('.wrapper');
const firstHeart = document.querySelector('.heart');
console.log(firstHeart); // => <div class="heart">...</div>

// managing changes to page element styles
box.style.backgroundColor = '#daa520';
box.style.width = '500px'; // is added as a priority inline style

buttons[2].style.borderRadius = '100%';
circles[1].style.backgroundColor = '#0bf9ea';

hearts.forEach(item => {
    item.style.backgroundColor = '#1b1b1b';
});  

// we create new page elements
const divo = document.createElement('div');
  const text = document.createTextNode('it is rarely used');
  divo.classList.add('black');
// box.before(divo);
// wrapper.prepend(divo);
wrapper.append(divo);
box.textContent = 'here is our box';
divo.innerHTML = '<h2>here new text</h2>';





