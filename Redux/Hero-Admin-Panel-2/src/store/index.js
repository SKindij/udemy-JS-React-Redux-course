// old import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux';
// old готовий Middleware, що дозволяє в якості дій відправляти функції
// old import ReduxThunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

// це функціонал по зміні роботи dispatch
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

/* old
const store = createStore( 
    combineReducers( {heroes, filters} ),
    compose(  // стане в нагоді для асинхронних операцій
        applyMiddleware( ReduxThunk, stringMiddleware ),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ) 
);
*/

const store = configureStore({
    reducer: {heroes, filters},
    // тут уже за замовчуванням маємо певні базові Middleware
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    // вмикаємо лише в режимі розробки ПЗ
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
