'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Ліга Справедливості",
        "Ла-ла ленд",
        "Одержимість",
        "Скотт Пілігрим проти..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');
// Remove all ad units from the page (right side of the site)
adv.forEach(item => {
    item.remove();
});
// Change movie genre => "comedy" to "drama"
genre.textContent = 'драма';
// Change movie poster background to image
poster.style.backgroundImage = 'url("img/bg.jpg")';
// Create a list of movies on the page based on the data from this JS file.
movieList.innerHTML = "";
movieDB.movies.sort();
// Add numbering of output films
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});






