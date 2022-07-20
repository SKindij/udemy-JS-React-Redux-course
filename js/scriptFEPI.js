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
hearts.forEach(item => {
    console.log(item);
});  // => we get each element from the pseudoarray

const firstHeart = document.querySelector('.heart');
console.log(firstHeart); // => <div class="heart">...</div>









