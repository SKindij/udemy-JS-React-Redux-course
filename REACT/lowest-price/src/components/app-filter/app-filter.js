import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">Усі товари</button>
      <button type="button" className="btn btn-outline-light">Претендент в топ</button>
      <button type="button" className="btn btn-outline-light">Ціна більше 600UAH</button>
    </div>
  )
}

export default AppFilter;
