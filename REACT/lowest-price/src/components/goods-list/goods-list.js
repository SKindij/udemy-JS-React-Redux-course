import GoodsListItem from "../goods-list-item/goods-list-item";

import './goods-list.css';

const GoodsList = ({data, onDelete}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;    
    return ( 
      <GoodsListItem 
        key={id}
        {...itemProps}
        onDelete={ () => onDelete(id) } /> 
    )
  });
  console.log(elements);

  return (
    <ul className="app-list list-group">{elements}</ul>
    )
};

export default GoodsList;
