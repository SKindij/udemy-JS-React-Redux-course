# objects

### get / set
> ```javascript
> 'use strict'
>  const factoryWorker = {
>    position: "head of production",
>    age: 40,
>      get workerAge() { return this.age; },
>      set workerAge(num) { this.age = num; }
>  };
>  console.log(factoryWorker.workerAge); // => 40
>  factoryWorker.workerAge = 42;
>  console.log(factoryWorker.workerAge); // => 42
> ```  
___  
## encapsulation

> ```javascript
> 'use strict'
>   function OfficeWorker(position, age) {
>     this.position = position;
>     this.age = age;  
>     this.say = function() {
>       console.log(`my position: ${this.position}, & age: ${this.age}` );
>     };
>   };
>   const Serhii = new  OfficeWorker('head of sales', 42);
>   console.log(Serhii.position, Serhii.age); // => head of sales 42
> ```

Encapsulation it is a mechanism that integrates data and the code that manipulates that data, and protects both from outside interference or misuse.
> ```javascript
> 'use strict'
>   function OfficeWorker(position, age) {
>     this.position = position;
>     let workerAge = age;  
>     this.say = function() {
>       console.log(`my position: ${this.position}, & age: ${workerAge}` );
>     };
>     this.getAge = function() {
>       return workerAge;
>     };
>     this.setAge = function(age) {
>       if(typeof(age) === 'number' && age > 18 && age < 90) {
>         workerAge = age;
>       } else { console.log("No, it doesn't suit") }
>     };
>   };
>   const Serhii = new  OfficeWorker('head of sales', 41);
>   console.log(Serhii.position, Serhii.workerAge); // => head of sales undefined
>   Serhii.say(); // => my position: head of sales, & age: 42
>    Serhii.setAge = 17;
>    Serhii.setAge = 42;
>    Serhii.getAge();
> ```
_Private codes or data are only available to other parts of this object._








