// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">Ім'я нового героя</label>
        <input required type="text" 
            name="name" className="form-control" 
            id="name" placeholder="Як мене звати?" />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">Короткий опис</label>
        <textarea  required
            name="text" className="form-control" 
            id="text" placeholder="Що я вмію?"
            style={{"height": '130px'}} />
      </div>
      <div className="mb-3">
        <label htmlFor="element" className="form-label">Вибрати елемент героя</label>
        <select required
            name="element" className="form-select" 
            id="element">
            <option >Я володію елементом...</option>
            <option value="fire">Вогонь</option>
            <option value="water">Вода</option>
            <option value="wind">Вітер</option>
            <option value="earth">Земля</option>
        </select>
      </div>
        <button type="submit" className="btn btn-primary">Створити</button>
    </form>
  )
}

export default HeroesAddForm;
