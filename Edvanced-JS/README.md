The **function*** declaration defines a **generator** function, which returns a **Generator object**.
> ```javascript
> function* generator(ind) {
>   yield ind;
>   yield ind + 10;
> }
> const gen = generator(5);
> 
> console.log(gen.next().value); // => 5
> console.log(gen.next().value); // => 15
> ```

> ```javascript
> function* generateScript() {
>   yield 'S';
>   yield 'c';
>   yield 'r';
>   yield 'i';
>   yield 'p';
>   yield 't';
> };
> const scriptStr = generateScript();
>
> console.log(scriptStr.next()); // => {value: 'S', done: false}
> console.log(scriptStr.next().value); // => 'c'
> console.log(scriptStr.next().value); // => 'r'
> ```





