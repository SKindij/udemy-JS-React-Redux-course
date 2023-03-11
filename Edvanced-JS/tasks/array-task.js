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








