// імпорт необхідних модулів
import {useState, useEffect} from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {
  // оголошення стану компонента
  const [comicsList, setComicsList] = useState([]); // масив коміксів
  const [newItemLoading, setnewItemLoading] = useState(false); // флаг завантаження
  const [offset, setOffset] = useState(0); // зміщення для пагінації
  const [comicsEnded, setComicsEnded] = useState(false); // флаг  закінчення коміксів
  // для отримання необхідних функцій із кастомного хука
  const {loading, error, getAllComics} = useMarvelService();
    // викликається функція з початковим значенням offset і флагом true
    useEffect(() => {
      // виконує запит до Marvel API за коміксами при завантаженні компонента
      onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
      // встановлює значення newItemLoading в залежності від параметра initial
        initial ? setnewItemLoading(false) : setnewItemLoading(true);
      // викликає функцію з переданим значенням offset  
        getAllComics(offset)
      // оброблює отримані комікси в функції 
            .then(onComicsListLoaded)
    }
    // ця функція отримує новий список коміксів
    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
      // перевіряє, чи закінчилися комікси за критерієм довжини масиву
        if (newComicsList.length < 8) {
            ended = true;
        }
      // додає нові комікси до існуючого списку 
        setComicsList([...comicsList, ...newComicsList]);
        setnewItemLoading(false);
        setOffset(offset + 8);
        setComicsEnded(ended);
    }
   
    function renderItems (arr) {
      // функція отримує масив коміксів...
      const items = arr.map( (item, i) => {        
        return (
            <li className="comics__item" key={i}>
              <a href="#">
                <img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
                <div className="comics__item-name">{item.title}</div>
                <div className="comics__item-price">{item.price}</div>
              </a>
            </li>
        )
      } )
    // ...і повертає список коміксів, які відображаються в компоненті
      return (
        <ul className="comics__grid">
            {items}
        </ul>
      )
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

  return (
    <div className="comics__list">
        {errorMessage}
        {spinner}
        {items}
        <button 
            disabled={newItemLoading} 
            style={ {'display' : comicsEnded ? 'none' : 'block'} }
            className="button button__main button__long"
            onClick={ () => onRequest(offset) }>
            <div className="inner">load more</div>
        </button>
    </div>
  )
}

export default ComicsList;

/*
Пагінація - це метод поділу великого набору даних на окремі сторінки для полегшення навігації та покращення швидкодії веб-сторінки. 
Замість відображення всіх даних одночасно, пагінація дозволяє розділити їх на менші частини, які можна переглядати поступово.
*/
