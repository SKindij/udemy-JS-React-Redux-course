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