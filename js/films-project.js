'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
      personalMovieDB.count = +prompt('How many films have you already watched?', '');
      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many films have you already watched?', '');
      }
    },
    rememberMyFilms: function() {
      for (let i = 0; i < 2; i++) {
        const aq = prompt('One of the last movies you watched?', '').trim(),
              bq = prompt('How much would you rate it?', '');
    
        if (aq != null && bq != null && aq != '' && bq != '' && aq.length < 50) {
            personalMovieDB.movies[aq] = bq;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
      }
    },
    detectPersonalLevel: function() {
      if (personalMovieDB.count < 10) {
        console.log("Watched quite a few films");
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("You are a classic spectator");
      } else if (personalMovieDB.count >= 30) {
        console.log("Are you a cinephile");
      } else {
        console.log("An error has occurred");
      }
    },
    showMyDB: function(hidden) {
      if (!hidden) {
        console.log(personalMovieDB);
      }
    },
    toggleVisibleMyDB: function() {
      if (personalMovieDB.privat) {
          personalMovieDB.privat = false;
      } else {
          personalMovieDB.privat = true;
      }
  },
  writeYourGenres: function() {
    for (let j = 1; j <= 3; j++) {
        let genre = prompt(`Your favorite genre numbered ${j}`);
        if (genre === '' || genre == null) {
          console.log('You entered incorrect data or did not enter it at all');
          j--;
        } else {
          personalMovieDB.genres[j - 1] = genre;
        }        
    // Alternative option
        // let genres = prompt(`Enter your favorite genres separated by commas`).toLowerCase();
        // if (genres === '' || genres == null) {
        //     console.log('You entered incorrect data or did not enter it at all');
        //     i--;
        // } else {
        //     personalMovieDB.genres = genres.split(', ');
        //     personalMovieDB.genres.sort();
        // } 
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Favorite Genre ${i + 1} - is ${item}`);
    });
  }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
// personalMovieDB.showMyDB();





