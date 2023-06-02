import {useHttp} from '../../hooks/http.hook';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { heroCreated } from '../../actions';

const HeroesAddForm = () => {
  // cтан для контролю форми
  const [heroName, setHeroName] = useState('');
  const [heroDescr, setHeroDescr] = useState('');
  const [heroElement, setHeroElement] = useState('');

  const {filters, filtersLoadingStatus} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // генерація ID через бібліотеку
    const newHero = {
      id: uuidv4(),
      name: heroName,
      description: heroDescr,
      element: heroElement
    }
    // надсилаємо дані на сервер у форматі JSON
    // ТІЛЬКИ якщо запит успішний - відправляємо персонажа в store
    request( "http://localhost:3001/heroes", "POST", JSON.stringify(newHero) )
      .then( res => console.log(res, '- відправка успішна') )
      .then( dispatch(heroCreated(newHero)) )
      .catch( err => console.log(err) );

    // очищаємо форму після відправлення
    setHeroName('');
    setHeroDescr('');
    setHeroElement('');
  }

  const renderFilters = (filters, status) => {
    if (status === "loading") {
        return <option>Завантаження элементів</option>
    } else if (status === "error") {
        return <option>Помилка завантаження</option>
    }
    // якщо фільтри є, то їх рендеруємо
    if (filters && filters.length > 0 ) {
      return filters.map( ({name, label}) => {
        // один із фільтрів нам тут не потрібен
        // eslint-disable-next-line
        if (name === 'all')  return;
        return <option key={name} value={name}>{label}</option>
      } )
    }
  }

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Ім'я нового героя</label>
        <input required type="text" 
            name="name" className="form-control" 
            id="name" placeholder="Як мене звати?"
            value={heroName}
            onChange={ (e) => setHeroName(e.target.value) } />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">Короткий опис</label>
        <textarea  required
            name="text" className="form-control" 
            id="text" placeholder="Що я вмію?"
            style={{"height": '130px'}}
            value={heroDescr}
            onChange={ (e) => setHeroDescr(e.target.value) } />
      </div>
      <div className="mb-3">
        <label htmlFor="element" className="form-label">Вибрати елемент героя</label>
        <select required
            name="element" className="form-select" 
            id="element"
            value={heroElement}
            onChange={ (e) => setHeroElement(e.target.value) }>
            <option value="">Я володію елементом...</option>
            {renderFilters( filters, filtersLoadingStatus )}
        </select>
      </div>
        <button type="submit" className="btn btn-primary">Створити</button>
    </form>
  )
}

export default HeroesAddForm;
