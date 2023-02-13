const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из последних просмотренных фильмов', ''),
      b = prompt('оцените фильм', ''),
      c = prompt('один из последних просмотренных фильмов', ''),
      d = prompt('оцените фильм', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);