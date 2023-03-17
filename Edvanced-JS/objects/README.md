# objects


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
  





