import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import GoodsList from '../goods-list/goods-list';
import GoodsAddForm from '../goods-add-form/goods-add-form';

import './app.css';

/*
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
        
        <GoodsList 
          data={data}
          onDelete={id => console.log(id)}/>
        
        <GoodsAddForm/>
    </div>
  );
}
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {brand: 'Colonist', type: 'portwein', volume: 0.7, price: 510, wish: false, id: 101},
        {brand: 'Osborn', type: 'portwein', volume: 0.7, price: 300, wish: true, id: 102},
        {brand: 'Colonist', type: 'brut', volume: 0.7, price: 360, wish: false, id: 103},
        {brand: 'Martini', type:'brut', volume: 0.7, price: 245, wish: false, id: 104},
        {brand: 'Espolon', type: 'yellow tequila', volume: 0.7, price:990, wish: false, id: 105},
        {brand: 'Espolon', type: 'white tequila', volume: 0.7, price: 860, wish: false, id: 106},
        {brand: 'Botafogo', type: 'amber rum', volume: 0.7, price: 700, wish: false, id: 107},
        {brand: 'Jameson', type: 'whiskey', volume: 0.7, price: 500, wish: true, id: 108}
      ]
    }
      this.maxId = 109;
  }
  deleteItem = (id) => {
    this.setState( ({data}) => {
      return { data: data.filter(item => item.id !== id) }
    } )
  }
  // Так, поки що можуть додаватися порожні користувачі. Ми це ще виправимо
  addItem = (brand, type, volume, price) => {
      const newItem = {
        brand,
        type,
        volume, 
        price,
        wish: false,
        id: this.maxId++
      }
      this.setState( ({data}) => {
          const newArr = [...data, newItem];
          return { data: newArr }
      } );
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <GoodsList 
          data={this.state.data}
          onDelete={this.deleteItem}/>
        
        <GoodsAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}

export default App;
