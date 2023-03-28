import GoodsListItem from "../goods-list-item/goods-list-item";

import './goods-list.css';

const GoodsList = ({data}) => {
  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return ( 
      <GoodsListItem key={id} {...itemProps}/> 
    )
  });
  console.log(elements);
  return (
    <ul className="app-list list-group">{elements}</ul>
    )
};

export default GoodsList;
