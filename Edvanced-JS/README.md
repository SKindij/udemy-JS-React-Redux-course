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
___

``window.requestAnimationFrame()`` method tells browser that you wish to perform animation and requests that browser calls a specified function to update animation before the next repaint. Method takes a callback as an argument to be invoked before the repaint.

Animation interface of the **Web Animations API** represents a single animation player and provides playback controls and a timeline for an animation node or source.
+ Animation()
    - Animation.currentTime
    - Animation.effect
    - Animation.finished
    - Animation.id
    - Animation.pending
    - Animation.playState
    - Animation.playbackRate
    - Animation.ready
    - animation.replaceState
    - Animation.startTime
    - Animation.timeline
 + Animation.cancel()
 + animation.commitStyles()
 + Animation.finish()
 + Animation.pause()
 + animation.persist()
 + Animation.play()
 + Animation.reverse()
 + Animation.updatePlaybackRate()
 ___

When speaking of **function composition** we can think of it as a way of chaining multiple functions together to create a new function, in other terms we are solving a problem reducing it into smaller solutions that in themselves don’t accomplish much but together can solve complex tasks.
> _Let’s take a look at an example, let’s say we want to calculate a 20% discount on a price, we can create three functions like so:_
> > ```javascript
> > const multiply20 = (price) => price * 20;
> > const divide100 = (price) => price / 100;
> > const normalizePrice = (price) => price.toFixed(2);
> > // result = a(b(c(x)))
> > const discount = normalizePrice(divide100(multiply20(200)));
> > console.log(discount); // => 40.00
> > ```
> This way the result of the inner function is taken by the outer function as an argument until the end of the chain.
> We have now managed to chain our functions together, we can achieve the same result writing a compose function improving readability:
> > ```javascript
> > const compose = (a, b, c) => (x) => a(b(c(x)));
> > // so our code becomes:
> > const discount = compose(normalizePrice, divide100, multiply20);
> > console.log(discount(200)); // => 40.00
> > ```





* "Function Composition" is applying one function to the results of another.
* (g º f)(x) = g(f(x)), first apply f(), then apply g()
* We must also respect the domain of the first function
* Some functions can be de-composed into two (or more) simpler functions.
___



