import { Component } from 'react';
import './goods-list-item.css';

class GoodsListItem extends Component{
  constructor(props) {
      super(props);
      this.state = {
          wish: false,
          star: false
      }
  }
  onWish = () => {
    // in callback, we have to rely on previous state of element
      this.setState( ({wish}) => ({
          wish: !wish
      }) )
  }
  onStar = () => {
    // in callback, we have to rely on previous state of element   
      this.setState( ({star}) => ({
          star: !star
      }) )
  }

  render() {
    const {brand, type, volume, price, onDelete} = this.props;
    const {wish, star} = this.state;

    let classNames = "list-group-item d-flex justify-content-between";
      if (wish) { classNames += ' wish'; };
      if (star) { classNames += ' like'; };
  
    return (
      <li className={classNames}>
        <span className="list-group-item-label" onClick={this.onStar}>{brand} {type} {volume}L</span>
        <input type="text" className="list-group-item-input" defaultValue={price + ' ₴'}/>
        <div className='d-flex justify-content-center align-items-center'>
          <button type="button" className="btn-cookie btn-sm" 
            onClick={this.onWish}><i className="fas fa-cookie"></i></button>
          <button type="button" className="btn-trash btn-sm"
            onClick={onDelete}><i className="fas fa-trash"></i></button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    )
  }
}

export default GoodsListItem;
