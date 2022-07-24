'use strict';
  const btns = document.querySelectorAll('button');
console.log(btns[0].classList.length); // => 2
console.log(btns[0].classList.item(0)); // show us class № 0: blue
console.log(btns[1].classList.remove('superfluous')); // removes an unnecessary class
console.log(btns[1].classList.add('red')); // change class
console.log(btns[7].classList.toggle('superfluous')); // if the class exists, it takes it; and vice versa

btns[3].addEventListener('click', () => {
  if (!btns[3].classList.contains('red')) {
    btns[3].classList.add('red');
  } else {
    btns[3].classList.remove('red');
  }
}
)
btns[4].addEventListener('click', () => {
  btns[4].classList.toggle('red');
}
)

// delegation of events
const btnBlock = document.querySelector('.btn-block');
btnBlock.addEventListener('click', (event) => {
  if (event.target && event.target.tagName == 'BUTTON') {
    console.log('I am button.', event.target);
  }
});
const newBtn = document.createElement('button');
newBtn.classList.add('blue');
btnBlock.append(newBtn);
console.log('***********************************************')

// live animation
const animeConsole = document.querySelector('#animeConsole');
const animeBlock = document.querySelector('#animeBlock');
let timerConsole;
animeConsole.addEventListener('click', () => {
  timerConsole = setTimeout(function() {
    console.log('Hello. Let\'s go learn animation!')
  }, 1000);
})
clearInterval(timerConsole);

// practice the old method of moving blocks
function blockAnimation() {
  const block = document.querySelector('.box-anime');
  let position = 0;
  const id = setInterval(frame, 20);
  function frame() {
    if (position == 150) {
      clearInterval(id);
    } else {
      position++;
      block.style.top = position + 'px';
      block.style.left = position + 'px';
    }
  }
}
animeBlock.addEventListener('click', blockAnimation);

// practice with Dates
const begining= new Date(0);
const someDay = new Date('2021-08-01');
const nowTime = new Date();
console.log(begining); // => Thu Jan 01 1970 03:00:00 GMT+0300 (Восточная Европа, стандартное время)
console.log(someDay); // => Sun Aug 01 2021 03:00:00 GMT+0300 (Восточная Европа, летнее время)
  console.log(someDay.getFullYear()); // => 2021
  console.log(someDay.getMonth()); // => 7
  console.log(someDay.getDate()); // => 1
  console.log(someDay.getDay()); // => 0
console.log(nowTime); // => Sun Jul 24 2022 13:10:52 GMT+0300 (Восточная Европа, летнее время)
// What is the difference between my time and Greenwich Mean Time in minutes?
console.log(nowTime.getTimezoneOffset()); // => -180
// What is the number of milliseconds that have passed since the start of the countdown?
console.log(nowTime.getTime()); // => 1658657646667
// Calculation of the time difference between two dates.
let startDate = new Date();
  for (let k = 0; k < 10000; k++) {
    let some = k ** 2;
    if (some % 100000 == 0) {
      console.log(some);
    }
  }
let endDate = new Date();
console.log(`The cycle worked: ${endDate - startDate} milliseconds.`) // => 10

// MutationObserver
const mutationBox = document.querySelector('.mutation-box');
let observer = new MutationObserver(mutationRecord => {
  console.log(mutationRecord);
});
observer.observe(mutationBox, {
  childList: true
})




