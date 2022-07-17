'use strict';
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many films have you already watched?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you already watched?', '');
  }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const aq = prompt('One of the last movies you watched?', ''),
          bq = prompt('How much would you rate it?', '');

    if (aq != null && bq != null && aq != '' && bq != '' && aq.length < 50) {
        personalMovieDB.movies[aq] = bq;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Watched quite a few films");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("You are a classic spectator");
  } else if (personalMovieDB.count >= 30) {
    console.log("Are you a cinephile");
  } else {
    console.log("An error has occurred");
  }
}

detectPersonalLevel();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let j = 1; j <= 3; j++) {
    personalMovieDB.genres[j - 1] = prompt(`Your favorite genre numbered ${j}`);
  }
}

writeYourGenres();








