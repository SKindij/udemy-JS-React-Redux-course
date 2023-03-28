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
          price: ''
      }
  }
  onValueChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  render() {
      const {brand, type, volume, price} = this.state;

      return (
          <div className="app-add-form">
              <h3>Додайте нову позицію</h3>
              <form
                  className="add-form d-flex">
                  <input type="text"
                      className="form-control new-post-label"
                      placeholder="товар різновид міра"
                      name="brand"
                      value={[brand, type, volume]} 
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
