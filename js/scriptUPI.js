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

console.log('***********************************************')
// function constructors ES5
function UserAp(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}
const userApData = [];
// we create new objects based on our function
const drue = new UserAp('Drue', 11); // UserAp {name: 'Drue', id: 11, human: true}
const hloe = new UserAp('Hloe', 12); // UserAp {name: 'Hloe', id: 12, human: true}
userApData.push(drue, hloe);
console.log(userApData); // => (2) [UserAp, UserAp]

// the context of the calling of this
function showThis1() {
  console.log(this);
}
showThis1(); // => Window or undefined (if 'use strict')

function showThis2(a, b) {
  console.log(this); // => undefined
  function sum() {
    console.log(this); // => undefined
    return a + b;
  }
  console.log(sum()); // => undefined
}
showThis2(5, 8); // => 13

const funObject = {
  a: 20,
  b: 15,
  showThis: function() {
    console.log(this); // context here will be the object itself
  }
}
funObject.showThis(); // => {a: 20, b: 15, sum: ƒ}

// this в конструкторах і класах - це новий ексземпляр об'єкту
// this in constructors and classes is a new object instance

// you can tell the function which context to use
function sayName(surname) {
  console.log(this); // => {name: 'Braien'}
  console.log(this.name + surname); // => BraienWarnhold
}
const funUser = {
  name: 'Braien'
};
sayName.call(funUser, 'Warnhold');
sayName.apply(funUser, ['Warnhold']);

function multiplicateThis(num) {
  return this * num;
}
const multiplic = multiplicateThis.bind(5);
console.log(multiplic(3)); // => 15
console.log('***********************************************')

// this in the DOM
const thisBtn = document.querySelector('#thisBtn');
thisBtn.addEventListener('click', function() {
  console.log(this); // => element HTML
}); // dont use => function with 'this'

// features of arrow functions
const double = d => d * 2;
const multi = (x, y) => x * y;
console.log(double(7)); // => 14
console.log(multi(4, 8)); // => 32
console.log('***********************************************')

// classes ES6
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  calcArea() {
    return this.height * this.width;
  }
}

const square16 = new Rectangle(4, 4);
console.log(square16.calcArea()); // => 16

class ColoredRectangle extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // borrows properties from the parent class
    this.text = text;
    this.bgColor = bgColor;
  }
  showMyProps() {
    console.log(`Text: ${this.text}, Color: ${this.bgColor}`);
  }
}

const divColoredRectangle = new ColoredRectangle(120, 70, 'block article', 'yellow');
console.log(divColoredRectangle);
console.log(divColoredRectangle.showMyProps()); // => Text: block article, Color: yellow
console.log(divColoredRectangle.calcArea()); // => 8400
console.log('***********************************************')

// rest parameters








