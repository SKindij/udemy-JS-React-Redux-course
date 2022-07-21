'use strict';
document.addEventListener('DOMContentLoaded', () => {

const movieDB = {
  movies: [
    "ВарКрафт",
    "Морбіус",
    "Трансформери",
    "Джуманджі",
    "Сьомий син",
    "Інший світ"
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    // form for adding new movies
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
      // cancel the standard behavior of the browser   
        event.preventDefault();
      // what the user entered in the form field 
      let newFilm = addInput.value;
      const favorite = checkbox.checked;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log("Додаємо улюблений фільм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);   
            createMovieList(movieDB.movies, movieList);
        }
      event.target.reset();
    });
// take away advertising blocks
    const deleteAdv = (arr) => {
      arr.forEach(item => {
        item.remove();
      });
    };
// make changes to the main poster
    const makeChanges = () => {
      genre.textContent = 'драма';
      poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => { arr.sort(); };

    function createMovieList(films, parent) {
      parent.innerHTML = "";
      sortArr(films);
    
      films.forEach((film, i) => {
        parent.innerHTML += `
          <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
          </li>
        `;
      });

        document.querySelectorAll('.delete').forEach((btn, i) => {
          btn.addEventListener('click', () => {
            btn.parentElement.remove();
        // this method cuts the specified element from the array    
            movieDB.movies.splice(i, 1);
        // use recursion to rebuild the information block    
            createMovieList(films, parent);
          });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});