'use strict'

new RegExp('pattern', 'flags');
/patteren/f

const answ = prompt('enter your name');
const regN = /n/;
const regNI = /n/i;
const regNIG = /n/ig;
// Antonio
console.log(answ.search(regN)); // => 1
console.log(answ.search(regNI)); // => 1
console.log(answ.search(regNIG)); // => 1

console.log(answ.match(regN)); // => ['n', index: 1, input: 'Antonio', groups: undefined]
console.log(answ.match(regNI)); // => ['n', index: 1, input: 'Antonio', groups: undefined]
console.log(answ.match(regNIG)); // => ['n', 'n']


const pass = prompt('Password?');
console.log(pass.replace(/./g, '*')); // => 








