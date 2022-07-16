'use strict';
const numberOfFilms = +prompt('How many films have you already watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const aq = prompt('One of the last movies you watched?', ''),
      bq = prompt('How much would you rate it?', ''),
      cq = prompt('One of the last movies you watched?', ''),
      dq = prompt('How much would you rate it?', '');




