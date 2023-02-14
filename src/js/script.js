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



const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}
convert(500, usdCurr);

const res = convert(500, eurCurr);
promotion(res);



function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);



function sayHello(name) {
    console.log(`Привет, ${name}`);
    return (`Привет, ${name}`);
}
sayHello('Олег');


function returnNeighboringNumbers(num) {
    console.log([num - 1 , num, num + 1]);
    return ([num - 1 , num, num + 1]);
}
returnNeighboringNumbers(5);


function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }
    console.log(str);
    return str;
}
getMathResult(100, 5);

