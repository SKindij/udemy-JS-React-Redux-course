import { Component } from 'react';
import './goods-add-form.css';
/*
const GoodsAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Додайте нову позицію</h3>
      <form className="add-form d-flex">
        <input type="text" className="form-control new-post-label" placeholder="товар різновид міра" />
        <input type="number" className="form-control new-post-label" placeholder="Ціна в UAH?" />
        <button type="submit" className="btn btn-outline-light">Додати</button>
      </form>
    </div>
  )
}
*/
class GoodsAddForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          brand: '',
          type: '',
          volume: '',
          price: ''
      }
  }
  onValueChange = (e) => {
      this.setState({
      // brand || type || volume
          [e.target.name] : e.target.value
      })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.brand, this.state.type, this.state.volume, this.state.price);
    this.setState({
      brand: '',
      type: '',
      volume: '',
      salary: ''
    })
  }

  render() {
    const {brand, type, volume, price} = this.state;

    return (
      <div className="app-add-form">
        <h3>Додайте нову позицію</h3>
          <form className="add-form d-flex"
            onSubmit = {this.onSubmit}>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="товар"
                  name="brand"
                  value={brand} 
                  onChange={this.onValueChange}/>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="різновид"
                  name="type"
                  value={type} 
                  onChange={this.onValueChange}/>
              <input type="text"
                  className="form-control new-post-label"
                  placeholder="міра"
                  name="volume"
                  value={volume} 
                  onChange={this.onValueChange}/>                  
              <input type="number"
                  className="form-control new-post-label"
                  placeholder="Ціна в UAH?"
                  name="price"
                  value={price} 
                  onChange={this.onValueChange}/>
  
                <button type="submit"
                    className="btn btn-outline-light">Додати</button>
          </form>
      </div>
      )
  }
}

export default GoodsAddForm;
