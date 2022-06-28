'use strict'
console.log('JS-FrontEnd-Udemy-PI');

const myYear = 1981;
let myAge = 41;
console.log(`from ${myYear} is ${myAge}`);


let myName = 'Serhii';
const SuperSvin = true;
const LazySvin = false;
console.log(myName, typeof(myName), SuperSvin, typeof(SuperSvin));
// Serhii string true boolean

let something;
console.log(something);
// undefined

let Zhabka = {
    name: 'Tanusha',
    age: 38,
    isPupsik: true
};
console.log(Zhabka.name, Zhabka.age, Zhabka.isPupsik);
console.log(Zhabka['name'], Zhabka['age'], Zhabka['isPupsik']);
// Tanusha 38 true

const svinFamily = ['Tatko', 'Matushia', 'SynSvin'];
let svinAges = [41, 38, 18];
console.log(svinFamily[2], svinAges[2]);
// SynSvin 18
console.log(svinFamily);
// Array(3) ['Tatko', 'Matushia', 'SynSvin']

Zhabka.height = 175;
Zhabka['from'] = 'Pryluki';
console.log(Zhabka);
// Object {name: 'Tanusha', age: 38, isPupsik: true, height: 175, from: 'Pryluki'}

let SvinFather = {
    name: 'Serhii',
    age: 41,
    isPupsik: false,
    frontEnd: {
        html: true,
        css: true,
        js: true
    },
};
console.log(SvinFather);

/*
alert('this is a command for outputting messages');
const requesto = confirm('here you can ask a question to the user?');
  console.log(requesto, typeof(requesto)); // true/false 'boolean'
const answert = prompt('What is your favorite animal?', '');
  console.log(answert, typeof(answert)); // capibara string or null object 

  const ageQuest = +prompt('How old are you?', '');
  console.log(ageQuest, typeof(ageQuest)); // 41 'number'
*/
const toyCategory = 'bears';
// interpolation
console.log(`https://someurl.com/${toyCategory}/7`);

let incro = 10, decro = 10;
console.log(incro, incro++, incro); // 10 10 11
console.log(decro, decro--, decro); // 10 10 9

let incra = 10, decra = 10;
console.log(incra, ++incra, incra); // 10 11 11
console.log(decra, --decra, decra); // 10 9 9

console.log(8%3); // 2

