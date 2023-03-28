import './goods-add-form.css';

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

export default GoodsAddForm;
