# [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps

+ **передбачуваний**
  * _допомагає вам писати програми, які ведуть себе узгоджено, запускаються в різних середовищах (клієнт, сервер і рідне) і їх легко тестувати_
+ **централізований**
  * _надає такі потужні можливості, як undo/redo (скасування/повторення), state persistence (збереження стану) та багато іншого_
+ **він налагоджується**
  * _DevTools дозволяє легко відстежувати, коли, де, чому та як змінився стан вашої програми_
  * _архітектура дозволяє реєструвати зміни, використовувати «налагодження подорожей у часі» і надсилати повні звіти про помилки на сервер_
+ **гнучкий**
  * _працює з будь-яким рівнем інтерфейсу користувача та має велику екосистему додатків_

<p align="center">
  <img src="https://github.com/SKindij/SKindij/blob/main/recources/reducer-scheme.png" 
    title="reducer-scheme" alt="reducer scheme" width="600" height="400"/>  
</p> 

### useSelector vs connect (react-redux) [article](https://www.samdawson.dev/article/react-redux-use-selector-vs-connect)

> _Хуки React-redux, такі як useSelector() і connect(), можуть мати однакові результати. Основна відмінність між ними полягає в їх здатності підштовхувати (керувати) тим, як ви пишете свої компоненти. Розуміння того, для чого оптимізується кожен із них, має важливе значення, щоб допомогти вам вибрати між ними._

"useSelector" та "connect" - це два основні способи отримання даних зі стану Redux у компонентах React. 

За допомогою "useSelector" можна використовувати хуки React для отримання потрібних даних зі стану Redux. Це більш сучасний та зручний спосіб, який вимагає менше коду. Завдяки "useSelector" можна просто вибрати певні частини стану та підписатись на їх зміни. Це покращує читабельність та повторне використання коду.

З іншого боку, "connect" - це метод, який використовується з React Redux для з'єднання компонентів React зі станом Redux. Він більш традиційний підхід, який базується на використанні "Higher-Order Components" (HOC). "Connect" дає більше контролю над тим, як дані передаються до компонентів та як обробляються зміни стану.

Стаття порівнює ці два підходи та рекомендує використовувати "useSelector" в нових проектах, оскільки він є більш простим та зручним. "Connect" залишається корисним для старих проектів або випадків, коли потрібний більший контроль над передачею даних.

- - -

For a basic Redux store simply add:
```javascript
const store = createStore( reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
```

- - -

### Redux Toolkit

* **configureStore():**
  - обгортає createStore, щоб забезпечити спрощені параметри конфігурації та хороші параметри за замовчуванням;
  - він може автоматично поєднувати ваші редуктори фрагментів, додавати будь-яке проміжне програмне забезпечення Redux, яке ви надаєте, включає redux-thunk за замовчуванням і дозволяє використовувати розширення Redux DevTools;
* **createReducer():**
  - що дозволяє надавати таблицю пошуку типів дій для функцій зменшення регістру, а не писати оператори switch;
  - крім того, він автоматично використовує бібліотеку immer, щоб дозволити вам писати простіші незмінні оновлення зі звичайним мутативним кодом, наприклад state.todos[3].completed = true;
* **createAction():**
  - генерує функцію створення дії для заданого рядка типу дії.;
  - функція toString() визначена так, що її можна використовувати замість константи типу;
* **createSlice():**
  - приймає об'єкт функцій редуктора, назву фрагмента та значення початкового стану та автоматично генерує редуктор фрагмента з відповідними творцями дій і типами дій;
* **createAsyncThunk:**
  - приймає рядок типу дії та функцію, яка повертає обіцянку, і генерує перехідник, який відправляє типи дій, що очікують/виконані/відхилені на основі цієї обіцянки;
* **createEntityAdapter:**
  - генерує набір багаторазових редукторів і селекторів для керування нормалізованими даними в сховищі;
* Утиліта **createSelector** з бібліотеки Reselect, повторно експортована для зручності використання.

- - -

### Create a React Redux App

The recommended way to start new apps with React and Redux is by using our official Redux+TS template for Vite, or by creating a new Next.js project using Next's with-redux template.

Both of these already have Redux Toolkit and React-Redux configured appropriately for that build tool, and come with a small example app that demonstrates how to use several of Redux Toolkit's features.

+ ``vite-template-redux``: Vite, with TypeScript
+ ``cra-template-redux-typescript``: Create-React-App, with TypeScript
+ ``cra-template-redux``: Create-React-App, with JavaScript

