"use strict";

const str = 'teSt';
const arr = [1, 2, 3]
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = 'Some fruit'; //получаем количество символов 
console.log(fruit.indexOf('fruit'));

const logg = 'Hello world'; //Методы вырезаний в строках
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));


const test = '12.2px'; //строку переводим в число
console.log(parseInt(test)); //округляем
console.log(parseFloat(test));//не округляем

