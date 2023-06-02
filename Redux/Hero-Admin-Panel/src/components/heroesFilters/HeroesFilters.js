import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { filtersFetching, filtersFetched, filtersFetchingError, activeFilterChanged } from '../../actions';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const {filters, filtersLoadingStatus, activeFilter} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  // запит на сервер для отримання фільтрів та послідовної зміни стану
  useEffect(() => {
    dispatch( filtersFetching() );
    request("http://localhost:3001/filters")
      .then(data => dispatch( filtersFetched(data)) )
      .catch(() => dispatch( filtersFetchingError()) )
    // eslint-disable-next-line
  }, []);

  if (filtersLoadingStatus === "loading") {
    return <Spinner />;
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Помилка завантаження</h5>
  }
  const renderFilters = (arr) => {
    if (arr.length === 0) {
        return <h5 className="text-center mt-5">Фільтрів не знайдено!</h5>
    }
    // дані в json-файлі розширено класами та текстом
    return arr.map( ({name, className, label}) => {
      // використовуємо бібліотеку classnames і формуємо класи динамічно
      const btnClass = classNames('btn', className, {
        'active': name === activeFilter
      });    
      return <button key={name} id={name} 
                className={btnClass}
                onClick={() => dispatch(activeFilterChanged(name))}
              >{label}</button>
    } )
  }

  const elements = renderFilters(filters);

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Фільтрування героїв за елементами</p>
        <div className="btn-group">
            {elements}
        </div>
      </div>
    </div>
  )
}

export default HeroesFilters;
