// значення для початкового стану
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    filteredHeroes: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
        return {
          // розгортаємо попередній стейт
          ...state,
          heroesLoadingStatus: 'loading'
        }
    case 'HEROES_FETCHED':
        return {
          ...state,
          // записуємо дані, отримані від серверу
          heroes: action.payload,
          filteredHeroes: state.activeFilter === 'all' ? 
              action.payload : 
              action.payload.filter(item => item.element === state.activeFilter),
          // ставимо у стан спокою
          heroesLoadingStatus: 'idle'
        }
    case 'HEROES_FETCHING_ERROR':
        return {
          ...state,
          heroesLoadingStatus: 'error'
        }
    case 'FILTERS_FETCHING':
        return {
              ...state,
              filtersLoadingStatus: 'loading'
        }
    case 'FILTERS_FETCHED':
        return {
          ...state,
          filters: action.payload,
          filtersLoadingStatus: 'idle'
        }
    case 'FILTERS_FETCHING_ERROR':
        return {
          ...state,
          filtersLoadingStatus: 'error'
        }
    case 'ACTIVE_FILTER_CHANGED':
        return {
          ...state,
          activeFilter: action.payload,
          filteredHeroes: action.payload === 'all' ? 
              state.heroes :
              state.heroes.filter(item => item.element === action.payload)
        } 
    // найскладніша частина – це показувати нові елементи за фільтрами
      // при їх створенні чи видаленні  
    case 'HERO_CREATED':
      // формуємо новий масивв    
      let newCreatedHeroList = [...state.heroes, action.payload];
      return {
        ...state,
        heroes: newCreatedHeroList,
        // фільтруємо нові дані щодо фільтру, який зараз застосовується
        filteredHeroes: state.activeFilter === 'all' ? 
              newCreatedHeroList : 
              newCreatedHeroList.filter(item => item.element === state.activeFilter)
        }
    case 'HERO_DELETED': 
      // формуємо новий масив
      const newHeroList = state.heroes.filter(item => item.id !== action.payload);
      return {
        ...state,
        heroes: newHeroList,
        // фільтруємо нові дані щодо фільтру, який зараз застосовується
        filteredHeroes: state.activeFilter === 'all' ? 
              newHeroList : 
              newHeroList.filter(item => item.element === state.activeFilter)
      } 
    default: return state
  }
}

export default reducer;
