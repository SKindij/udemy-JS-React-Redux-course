import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import GoodsList from '../goods-list/goods-list';
import GoodsAddForm from '../goods-add-form/goods-add-form';

import './app.css';

function App() {
  const data = [
    {brand: 'Colonist', type: 'portwein', volume: 0.7, price: 510, wish: false, id: 101},
    {brand: 'Osborn', type: 'portwein', volume: 0.7, price: 300, wish: true, id: 102},
    {brand: 'Colonist', type: 'brut', volume: 0.7, price: 360, wish: false, id: 103},
    {brand: 'Martini', type:'brut', volume: 0.7, price: 245, wish: false, id: 104},
    {brand: 'Espolon', type: 'yellow tequila', volume: 0.7, price:990, wish: false, id: 105},
    {brand: 'Espolon', type: 'white tequila', volume: 0.7, price: 860, wish: false, id: 106},
    {brand: 'Botafogo', type: 'amber rum', volume: 0.7, price: 700, wish: false, id: 107},
    {brand: 'Jameson', type: 'whiskey', volume: 0.7, price: 500, wish: true, id: 108}
  ];
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <GoodsList data={data}/>
        
        <GoodsAddForm/>
    </div>
  );
}

export default App;
