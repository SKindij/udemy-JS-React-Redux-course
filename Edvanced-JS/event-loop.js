'use strict'

console.log(1);

setTimeout(() => {
    console.log('time out 2 sec');
}, 2000);

setTimeout(() => {
    console.log('time out 4 sec');
}, 4000);

console.log(2);

// interview questions
setTimeout(() => {
    console.log(1);
}, 0);
console.log(2);

// interview questions
setTimeout(() => { console.log('time out') });

Promise.resolve()
  .then( () => console.log('promise') );

console.log('console');
