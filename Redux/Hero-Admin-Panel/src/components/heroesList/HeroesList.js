import {useHttp} from '../../hooks/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { createSelector } from 'reselect';

import { heroesFetching, heroesFetched, heroesFetchingError, heroDeleted } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';

import './heroesList.scss';

const HeroesList = () => {
  const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.heroes.heroes,
    (filter, heroes) => {
        if (filter === 'all') {
            console.log('render all');
            return heroes;
        } else {
            // створюємо новий відфільтрований масив
            return heroes.filter(item => item.element === filter);
        }
    }
  );
  
  // хук useSelector дозволяє витягувати шматочки глобального стейту для цього компоненту
  const filteredHeroes = useSelector(filteredHeroesSelector);
  const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);

  const dispatch = useDispatch();
  // хук, що дозволяє отримти обьєкт запиту
  const {request} = useHttp();

  // використовуємо хук, щоб зробити зпит у потрібний час
  useEffect( () => {
    dispatch( heroesFetching() );
    // робимо запит героїв на фейк API
    request("http://localhost:3001/heroes")
      // обробляємо отриманий проміс
        .then( data => dispatch( heroesFetched(data) ) )
        .catch( () => dispatch( heroesFetchingError() ) )
    // eslint-disable-next-line
    }, [] );

  // функція бере id і по ньому видаляє непотрібного персонажа зі store  
  // відстежуйте ланцюжок дій actions => reducers
  const onDelete = useCallback( (id) => {
    // видалення персонажа за його id із бази даних
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
      .then( data => console.log(data, 'Deleted') )
  // ТІЛЬКИ якщо запит до сервера на видалення пройшов успішно
      .then( dispatch(heroDeleted(id)) )
      .catch( err => console.log(err) );
    // eslint-disable-next-line  
  }, [request] );

  if (heroesLoadingStatus === "loading") {
    return <Spinner />;
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Помилка завантаження</h5>
  }

  const renderHeroesList = (arr) => {
    // якщо героїв немає в базі даних
    if (arr.length === 0) {
      return (
        <CSSTransition timeout={0} classNames="hero">
          <h5 className="text-center mt-5">Героїв поки що немає</h5>
        </CSSTransition>
      )    
    }
    return arr.map( ({id, ...props}) => {
      return (
        <CSSTransition key={id} timeout={500} classNames="hero">
          <HeroesListItem {...props} onDelete={() => onDelete(id)} />
        </CSSTransition>
      )        
    })
  }
  const elements = renderHeroesList(filteredHeroes);

  return (
    <TransitionGroup component="ul">
      {elements}
    </TransitionGroup>
  )
}

export default HeroesList;
