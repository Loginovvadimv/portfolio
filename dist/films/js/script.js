/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),
      promoBg = document.querySelector('.promo__bg'),
      promoInteractiveList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');


      addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        let inputUserFilm = addInput.value;
        const clickCheckbox = checkbox.checked;
        if (inputUserFilm) {
            if (inputUserFilm.length > 21) {
              inputUserFilm = `${inputUserFilm.substring(0, 22)}...`;
            }; 
            if (clickCheckbox) {
                console.log("Добавлен любимый фильм");
            }
            movieDB.movies.push(inputUserFilm);
            sortFilms(movieDB.movies);
            createMovieList(movieDB.movies, promoInteractiveList);
        }
        event.target.reset();

      });
      


     const sortFilms = (arr) => {
        arr.sort();
     }
      
    // Удаление списка фильмов
    const removeFilmList = (element) => {
        element.innerHTML = '';
    };
    //  изменение жанра
const genre = (element, gen) => {
    element.firstElementChild.textContent = gen;
}
    // Замена фонового изображения
const replacementBg = (image) => { 
    image.style.backgroundImage = 'url("img/bg.jpg")';
}
 // Удаление рекламы
const removeAdv = (arr) => {
  arr.forEach(item => {
    item.remove();
})
};
//    Добавление фильмов из массива
  const createMovieList = (arr, element) => {
        removeFilmList(promoInteractiveList);
        sortFilms(movieDB.movies);

        arr.forEach(function(film, i) {
        element.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
      });
      
      document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
             btn.parentElement.remove();
             movieDB.movies.splice(i, 1);
             createMovieList(movieDB.movies, promoInteractiveList);

        });
      });

  }



removeAdv(promoAdv);
replacementBg(promoBg);
genre(promoBg, 'Драма');
createMovieList(movieDB.movies, promoInteractiveList);