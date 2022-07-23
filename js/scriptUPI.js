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






