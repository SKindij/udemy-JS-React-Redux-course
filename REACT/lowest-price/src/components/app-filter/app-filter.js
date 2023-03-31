import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'Усі товари'},
    {name: 'stars', label: 'Зірковий вибір'},
    {name: 'lessThen450', label: 'Ціна менше 450UAH'},
    {name: 'lessThen700', label: 'Ціна менше 700UAH'}
  ];
  // on basis of data array, form set of buttons
  const buttons = buttonsData.map( ({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
        <button type="button" className={`btn ${clazz}`}
                key={name}
                onClick={ () => props.onFilterSelect(name) }>
                {label}
        </button>
    )
  } )
/*
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-light">Усі товари</button>
      <button type="button" className="btn btn-outline-light">Зірковий вибір</button>
      <button type="button" className="btn btn-outline-light">Ціна більше 600UAH</button>
    </div>
  )
*/
  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;
