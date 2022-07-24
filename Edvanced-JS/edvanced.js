'use strict';
// learn Promises (ES6)
console.log('Йде запит данних (Requesting data)...');

setTimeout(() => {
  console.log('Йде підготовка данних (Data preparation is underway)...');
  const prodactKiwi = {
    name: 'Kiwi',
    type: 'fruit',
    price: 70
  };
  setTimeout(() => {
    prodactKiwi.status = 'order';
    console.log('Дані отримано (Data received).');
    console.log(prodactKiwi);
  }, 2000);
}, 2000);

console.log('Йде запит данних (Requesting data)...');
const firstRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Йде підготовка данних (Data preparation is underway)...');
    const prodactPotato = {
      name: 'Potato',
      type: 'vegetable',
      price: 18
    };

    resolve(prodactPotato);
  }, 4000);
});

// обробляємо позитивні результати після запиту
// we process positive results after the request 
firstRequest.then((prodactPotato) => {
  setTimeout(() => {
    prodactPotato.status = 'order';
      console.log('Дані отримано (Data received).');
      console.log(prodactPotato);
  }, 5000);
}).catch(() => {
    console.error('Виникла помилка (An error occurred)');
}).finally(() => {
    console.log('Finally!!!');
});

// запускаємо однакові операції через різні проміжки часу
const test3 = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}
test3(11000).then(() => console.log('11000 ms'));
test3(12000).then(() => console.log('12000 ms'));
test3(13000).then(() => console.log('13000 ms'));

Promise.all([test3(15000), test3(16000)]).then(() => {
    console.log('All promises');
});

Promise.race([test3(17000), test3(18000)]).then(() => {
    console.log('Race promises');
});



