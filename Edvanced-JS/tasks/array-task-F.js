'use strict'

// You have a list of rated movies as an array of objects.
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

/* Write function that will take this array and return an array of objects 
with only those movies that have a rating greater than or equal to 8. */
function showGoodFilms(arr) {
    return arr.filter( film => film.rating >= 8 );
};
showGoodFilms(films); // => [ {"name":"Titanic", "rating":9}, {"name": "Matrix","rating": 8} ]

// Write function that will take same array and return a string that contains names of movies separated by commas
/*
function showListOfFilms(arr) {
    return arr.reduce( (acc, curr) => `${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}` );
}
*/
function showListOfFilms(movies) {
    const names = movies.reduce( (accumulator, currentValue) => {
        return accumulator + (accumulator.length > 0 ? ', ' : '') + currentValue.name;
      }, '');
    return names;
}
showListOfFilms(films); // => 'Titanic, Die hard 5, Matrix, Some bad film'

/* Write a function that will take the same array and return the same array of movies, but each movie will have a new id field. 
Set the value of this field according to the numbering of the movie. */
function setFilmsIds(movies) {
    return movies.map((film, index) => {
        film.id = index;
        return film;
    });
}
const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);

// Write a function that will check that each movie has an id field. If so, the function returns true.
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)   
}

checkFilms(tranformedArray); // => 
