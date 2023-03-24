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

> * **"Function Composition"** is applying one function to the results of another.
> * (g º f)(x) = g(f(x)), first apply f(), then apply g()
> * We must also respect the domain of the first function
> * Some functions can be de-composed into two (or more) simpler functions.
___



