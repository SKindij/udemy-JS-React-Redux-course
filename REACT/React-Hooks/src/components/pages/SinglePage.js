import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from "../appBanner/AppBanner";


const SinglePage = ( {Component, dataType} ) => {
  // компонент при рендерингу отримує id від useParams, що бере його з URL
    const {id} = useParams();
  // ініціалізуємо стан data, який буде зберігати отримані дані
    const [data, setData] = useState(null);
  // використовуємо useMarvelService для отримання необхідних методів та даних Marvel API
    const {loading, error, getComic, getCharacter, clearError} = useMarvelService();

   // коли id змінюється (наприклад, при переході на іншу сторінку комікса або персонажа),
     // буде виконана функція updateData
    useEffect( () => {
        updateData()
        }, [id] )


    const updateData = () => {
      // спочатку очищується помилка
        clearError();
      // потім виконується перевірка на dataType
        switch (dataType) {
          case 'comic': getComic(id).then(onDataLoaded);
          break;
          case 'character': getCharacter(id).then(onDataLoaded);
        }
    }
  // після успішного отримання даних викликається функція, яка оновлює стан data
    const onDataLoaded = (data) => {
        setData(data);
    }

  // в компоненті є умовні оператори для відображення різних елементів в залежності від стану
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
  // відображається компонент, який передається через Component пропс з отриманими даними
    const content = !(loading || error || !data) ? <Component data={data}/> : null;

    return (
      // на кожній сторінці також відображається компонент AppBanner
      <>
        <AppBanner/>
          {errorMessage}
          {spinner}
          {content}
      </>
    )
}

export default SinglePage;
/*
 компонент SinglePage відповідає за отримання даних про комікс або персонажа з використанням useMarvelService хука
 та відображення їх на сторінці за допомогою переданого компонента
*/
