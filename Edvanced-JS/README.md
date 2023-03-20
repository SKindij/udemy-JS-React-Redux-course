The **function*** declaration defines a **generator** function, which returns a **Generator object**.
```javascript
function* generator(ind) {
  yield ind;
  yield ind + 10;
}
const gen = generator(5);

console.log(gen.next().value); // => 5
console.log(gen.next().value); // => 15
```



