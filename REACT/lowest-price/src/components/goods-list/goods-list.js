import GoodsListItem from "../goods-list-item/goods-list-item";

import './goods-list.css';

const GoodsList = ({data, onDelete, onToggleProp}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;    
    return ( 
      <GoodsListItem 
        key={id}
        {...itemProps}
        onDelete={ () => onDelete(id) }
        onToggleProp={ (e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle')) } /> 
    )
  });
  console.log(elements);

  return (
    <ul className="app-list list-group">{elements}</ul>
    )
};

export default GoodsList;
