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
        {brand: 'Wild Turkey', type: 'bourbon', volume: '0.7L', price: 530, wish: false, star: false, id: 101},
        {brand: 'Wild Turkey', type: 'bourbon', volume: '1.0L', price: 850, wish: false, star: false, id: 102},
        {brand: 'Santiago Cuba', type: 'amber rum', volume: '0.7L', price: 750, wish: false, star: false, id: 103},
        {brand: 'Doorly\'s', type: 'amber rum', volume: '0.7L', price: 725, wish: false, star: false, id: 104},
        {brand: 'Botafogo', type: 'amber rum', volume: '0.7L', price: 700, wish: false, star: false, id: 105},
        {brand: 'Appleton', type: 'amber rum', volume: '0.7L', price: 645, wish: false, star: false, id: 106},
        {brand: 'Bacardi', type: 'amber rum', volume: '0.5L', price: 260, wish: false, star: false, id: 107},
        {brand: 'Ballantines', type: 'whiskey Lime', volume: '0.7L', price: 550, wish: false, star: false, id: 108},
        {brand: 'Jameson', type: 'whiskey', volume: '0.7L', price: 500, wish: true, star: false, id: 109},
        {brand: 'Jameson', type: 'whiskey', volume: '0.5L', price: 470, wish: false, star: false, id: 110},
        {brand: 'Ballantines', type: 'whiskey', volume: '0.7L', price: 490, wish: false, star: false, id: 111},
        {brand: 'John Walker', type: 'whiskey', volume: '0.7L', price: 430, wish: false, star: false, id: 112},
        {brand: 'John Walker', type: 'whiskey', volume: '0.5L', price: 350, wish: false, star: false, id: 113},
        {brand: 'Gordon\'s', type: 'gin', volume: '0.7L', price: 450, wish: false, star: false, id: 114},
        {brand: 'Colonist', type: 'portwein', volume: '0.7L', price: 510, wish: false, star: true, id: 115},
        {brand: 'Osborn', type: 'portwein', volume: '0.7L', price: 300, wish: true, star: false, id: 116},
        {brand: 'Colonist', type: 'champagne brut', volume: '0.7L', price: 360, wish: false, star: false, id: 117},
        {brand: 'Martini', type:'champagne brut', volume: '0.7L', price: 245, wish: false, star: false, id: 118},
        {brand: 'Espolon', type: 'yellow tequila', volume: '0.7L', price:990, wish: false, star: false, id: 119},
        {brand: 'Espolon', type: 'white tequila', volume: '0.7L', price: 860, wish: false, star: false, id: 120},
        {brand: 'Doorly\'s', type: 'white rum', volume: '0.7L', price: 645, wish: false, star: false, id: 121},
        {brand: 'Santiago Cuba', type: 'white rum', volume: '0.7L', price: 420, wish: false, star: false, id: 122},
        {brand: 'Jagermeister', type: 'tincture', volume: '0.7L', price: 460, wish: false, star: false, id: 123},
        {brand: 'Jagermeister', type: 'tincture', volume: '1.0L', price: 600, wish: false, star: false, id: 124},
        {brand: 'Becherovka', type: 'tincture', volume: '0.7L', price: 360, wish: false, star: false, id: 125},
        {brand: 'Becherovka', type: 'tincture', volume: '0.5L', price: 250, wish: false, star: false, id: 126},
        {brand: 'R.Jelinek', type: 'tincture', volume: '0.5L', price: 200, wish: false, star: false, id: 127},
        {brand: 'Absolut', type: 'horilka', volume: '0.7L', price: 320, wish: false, star: false, id: 128},
        {brand: 'Finlandia', type: 'horilka', volume: '0.7L', price: 300, wish: false, star: false, id: 129},
        {brand: 'Finlandia', type: 'horilka', volume: '0.5L', price: 290, wish: false, star: false, id: 130}
      ],
      userTerm: '',
      filter: 'all'
    }
      this.maxId = 131;
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
        star: false,
        id: this.maxId++
      }
      this.setState( ({data}) => {
          const newArr = [...data, newItem];
          return { data: newArr }
      } );
  }
/*
  onToggleWish = (id) => {
    this.setState( ({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const oldObj = data[index];
      const newObj = {...oldObj, wish: !oldObj.wish};
      const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)];
        return {
          data: newArr
        }
    } ) 
  }
*/
  onToggleProp = (id, prop) => {
    this.setState( ({data}) => ({
    // we must return new array, without mutating previous one  
      data: data.map(item => {
        if (item.id === id) { return {...item, [prop]: !item[prop]} }
        return item;
      })
    }) )
  }
  searchEmp = (items, userTerm) => {
    // when user has not entered anything in search field
    if (userTerm.length === 0) { return items; }
    return items.filter(item => {
      // select elements according to coincidence of term
        return item.type.indexOf(userTerm) > -1
    })
  }
  onUpdateSearch = (userTerm) => {
    this.setState({userTerm});
  }
  filterPost = (items, filter) => {
    switch (filter) {
        case 'stars':
            return items.filter(item => item.star);
        case 'lessThen450':
            return items.filter(item => item.price <= 450);
        case 'lessThen700':
            return items.filter(item => item.price <= 700);
        default:
            return items
    }
  }
  // method for dynamic filtering of goods
  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, userTerm, filter} = this.state;
    const goods = this.state.data.length;
    const wished = this.state.data.filter(item => item.wish).length;
    // display data (goods) after double filtering
    const visibleData = this.filterPost( this.searchEmp(data, userTerm), filter );

    return (
      <div className="app">
        <AppInfo goods={goods} wished={wished} />

        <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch} />
            <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        
        <GoodsList 
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        
        <GoodsAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
