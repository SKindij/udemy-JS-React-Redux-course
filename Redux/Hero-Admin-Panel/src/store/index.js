import { legacy_createStore as createStore, combineReducers, compose } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const enhancer = (createStore) => (...args) => {
    const store = createStore(...args);
    // зберігаємо наш оригінальний dispatch, що міг приймати лише обьєкти
    const oldDispatch = store.dispatch;
    // перезаписуємо його із функцією прийому строки
    store.dispatch = (action) => {
        if (typeof action === 'string') {
            return oldDispatch({type: action})
        }
        return oldDispatch(action);
    }
    return store;
}

const store = createStore( 
    combineReducers({heroes, filters}),
    compose(
      enhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    ) );

export default store;
