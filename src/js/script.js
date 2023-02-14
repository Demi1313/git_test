"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('hello world');
console.log(num);

function calc (a,b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('hello');
};
logger();

const calc = (a, b) => a + b;

// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
function calculateVolumeAndArea(length) { //
    if (typeof (length) !== 'number' || length < 0 ||!Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }
    let volume = 0;
    area = 0;
    volume = length * length * length;
    area = 6 * (length * length);
    console.log(`Объём куба: ${volume}, площадь всей поверхности: ${area}`);
    return `Объём куба: ${volume}, площадь всей поверхности: ${area}`;
}
calculateVolumeAndArea(5);

//Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
//Функция принимает только целое число от 1 до 36.Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:"Ошибка. Проверьте правильность введенного номера места" Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"
function getCoupeNumber(number) {
    if (typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (number > 36 || number < 1) {
        return 'Таких мест в вагоне не существует';
    }
    console.log(Math.ceil(number / 4));
    return Math.ceil(number / 4);
}
getCoupeNumber(5);


//Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(29);



//Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
    typeof(b) !== 'number' ||
    typeof(c) !== 'number' ||
    typeof(d) !== 'number') {
    return 0;
} else {
    console.log(Math.max(a, b ,c, d));
    return Math.max(a, b ,c, d);
}
}
findMaxNumber(1, 5, 6.6, 10.5);
