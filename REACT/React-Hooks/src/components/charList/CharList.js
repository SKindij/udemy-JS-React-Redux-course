import {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';
import './charList.scss';

const CharList = (props) => {

  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [charEnded, setCharEnded] = useState(false);

  const marvelService = new MarvelService();

  // hook замість componentDidMount()
  useEffect(() => {
    onRequest();
  }, [])


  const onRequest = (offset) => {
    onCharListLoading();
    marvelService.getAllCharacters(offset)
        .then(onCharListLoaded)
        .catch(onError)
  }

  const onCharListLoading = () => {
    setNewItemLoading(true);
    }
  
  // we get newCharList from .then(onCharListLoaded)
  const onCharListLoaded = (newCharList) => {
    let ended = false;
      // we determine if the characters are finished
      if (newCharList.length < 9) {
        ended = true;
      }
    // відштовхуємося всюди від попереднього стану
      setCharList(charList => [...charList, ...newCharList]);
      setLoading(loading => false);
      setNewItemLoading(newItemLoading => false);
      setOffset(offset => offset + 9);
      setCharEnded(charEnded => ended);
  }

  const onError = () => {
    setError(true);
    setLoading(loading => false);
  }

  // використовуємо посилання на елементи
  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
      // по можливості не зловживайте рефами
      itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
      itemRefs.current[id].classList.add('char__item_selected');
      itemRefs.current[id].focus();
  }

  // this method was created to optimize render
  function renderItems(arr) {
    const items =  arr.map( (item, i) => {
        let imgStyle = {'objectFit' : 'cover'};
        if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = {'objectFit' : 'unset'};
        } 

      return (
        <li className="char__item" tabIndex={0} key={item.id}
          ref={el => itemRefs.current[i] = el}
          onClick={() => {
            props.onCharSelected(item.id);
            focusOnItem(i);
        }}>
            <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
            <div className="char__name">{item.name}</div>
        </li>
      )
    } );
    // this design is made to center spinner / error
    return (
        <ul className="char__grid">
            {items}
        </ul>
    )
  }

  const items = renderItems(charList);

  const errorMessage = error ? <ErrorMessage/> : null;
  const spinner = loading ? <Spinner/> : null;
  const content = !(loading || error) ? items : null;

  return (
      <div className="char__list">
        {errorMessage}
        {spinner}
        {content}       
        <button className="button button__main button__long"
            disabled={newItemLoading}
            style={{'display': charEnded ? 'none' : 'block'}}
            onClick={() => onRequest(offset)}>
            <div className="inner">load more</div>
        </button>
      </div>
    )
}

CharList.propTypes = {
  onCharSelected: PropTypes.func.isRequired
}

export default CharList;
