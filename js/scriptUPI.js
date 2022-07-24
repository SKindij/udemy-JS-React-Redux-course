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
    if (position == 300) {
      clearInterval(id);
    } else {
      position++;
      block.style.top = position + 'px';
      block.style.left = position + 'px';
    }
  }
}
animeBlock.addEventListener('click', blockAnimation);









