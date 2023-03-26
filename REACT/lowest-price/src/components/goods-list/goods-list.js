import GoodsListItem from "../goods-list-item/goods-list-item";

import './goods-list.css';

const GoodsList = () => {
    return (
        <ul className="app-list list-group">
            <GoodsListItem/>
            <GoodsListItem/>
            <GoodsListItem/>
        </ul>
    )
}

export default GoodsList;
