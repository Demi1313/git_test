"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов', ''),
          b = prompt('оцените фильм', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDb.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}
// let i = 0;
// do {
//     i++;
//     const a = prompt('один из последних просмотренных фильмов', ''),
//           b = prompt('оцените фильм', '');
          
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);


if (personalMovieDb.count < 10) {
    console.log('просмотрено мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log('вы классный зритель');
} else if (personalMovieDb.count >= 30) {
    console.log('вы киноман');
} else {
    console.log('произошла ошибка')
}
console.log(personalMovieDb);




// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('error!');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log("ok!");
// }

// (num === 50) ? console.log('ok!') : console.log('error');



// const num = 50;

// switch (num) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 50:
//         console.log('верно');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && fries && cola);

// if (hamburger === 3 && fries && cola) {
//     console.log('я сыт');
// } else {
//     console.log('я голоден');
// }


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < length - i; j++) {
//         result += ' ';
//     }
//     for (let j = 0; j < 2 * i - 1; j++) {
//         result += '*';
//     }
//     result += '\n';
// }

// console.log(result);

// first: for (let i = 1; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k===2) continue first;
//             console.log(`Thirt level: ${k}`);
//         }
//     }
    
// }
// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     console.log(i);
//     if (i===13) break;
// }

// for (let i=2; i < 11; i++ + i++) {
//     console.log(i);
// }


// let i = 2;
// do {
//     i++;
//     if (i % 2 === 0) {
//         continue
//     };
//     console.log(i);
// } while (i <= 15);


// let arrayOfNumbers = [];

// for (let i = 5; i < 11; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);
// return arrayOfNumbers;






