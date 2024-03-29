# about React Hooks

&emsp; [Хуки: FAQ](https://uk.reactjs.org/docs/hooks-faq.html)\
Це новинка в React 16.8. Вони дозволяють вам використовувати стан та інші можливості React без написання класу.

> _станом на 16.04.2023 я використовую наступні версії npm-пакетів_
> > ```javascript
> >  "dependencies": {
> >      "@testing-library/jest-dom": "^5.16.5",
> >      "@testing-library/react": "^13.4.0",
> >      "@testing-library/user-event": "^13.5.0",
> >      "prop-types": "^15.8.1",
> >      "react": "^18.2.0",
> >      "react-dom": "^18.2.0",
> >      "react-scripts": "5.0.1",
> >      "sass": "^1.60.0",
> >      "web-vitals": "^2.1.4"
> >    },
> > ```

&emsp; **React Redux**, починаючи від версії **7.1.0**, підтримує API хуків і представляє хуки useDispatch та useSelector.

&emsp; **React Router** підтримує хуки, починаючи від версії **5.1**.

> _Загальноприйнятим вважається використання `on[Event]` імен для пропсів, що представляють події, 
> і `handle[Event]` для методів, що цю подію обробляють._

* Використовуйте хуки тільки на найвищому рівні!
  - _Не використовуйте хуки усередині циклів, умовних операторів або вкладених функцій._
* Викликайте хуки лише з React-функцій
  - _Не викликайте хуки зі звичайних JavaScript-функцій. _

Плагін для ESLint `eslint-plugin-react-hooks` примушує дотримуватися цих двох правил.
> він використовується за замовчуванням у Create React App;


&emsp;Традиційно використовувалися два підходи: [компоненти вищого порядку](https://uk.legacy.reactjs.org/docs/higher-order-components.html) та [рендер-пропси](https://uk.legacy.reactjs.org/docs/render-props.html). **Створення власних хуків** дозволяє вам винести логіку компонента у функції, придатні для повторного використання.\
&emsp;Коли ми хочемо, щоб дві функції JavaScript розділяли спільну логіку, ми виокремлюємо її в третю функцію. Компоненти та хуки є функціями, а тому це правило працює і для них!\
&emsp; **Користувацький хук** — це JavaScript-функція, ім’я якої починається з `use`, і яка може викликати інші хуки. 

#### Сервіс готових хуків https://usehooks.com/
* **useToggle**
  + він приймає параметр зі значенням `true` або `false` і змінює це значення на протилежне;
  + наприклад: показати або приховати модальний режим, показати більше/менше тексту, відкрити/закрити бічне меню;
*   **useAsync**
  + загалом рекомендовано вказувати користувачам статус будь-якого асинхронного запиту:
    - отримання даних з API та відображення індикатора завантаження перед відтворенням результатів;
    - форма, у якій потрібно тимчасово вимкнути кнопку надсилання, а потім відобразити повідомлення про успіх або помилку, коли воно завершиться;
    - хук приймає асинхронну функцію як вхідні дані та повертає value, error, і status
* **useRequireAuth**
  + спосіб переспрямування користувача, якщо він вийшов із системи та намагається переглянути сторінку, яка потребує автентифікації;
* **useEventListener**
  + варіант використання хука useAuth, який дозволяє будь-якому компоненту отримувати поточний стан авторизації та повторно відтворювати його, якщо він змінюється;
* **useWhyDidYouUpdate**
  + дозволяє легко побачити, які зміни пропів спричиняють повторнИЙ рендеринг компонента;
  + ви можете перевірити свою консоль, щоб побачити, які атрибути змінювалися між рендерами, і переглянути їх попередні/поточні значення;
* **useDarkMode** https://github.com/donavon/use-dark-mode
  + обробляє всю логіку стану, необхідну для додавання перемикача темного режиму ☾ на ваш веб-сайт;
  + використовує `localStorage`, щоб запам’ятати вибраний користувачем режим;
  + за замовчуванням встановлюється налаштування браузера або ОС за допомогою медіа-запиту `prefers-color-scheme`;
  + керує налаштуванням `.dark-mode className` у body для застосування ваших стилів;

#### TOP HOOK LIBRARIES https://www.bornfight.com/blog/top-10-react-hook-libraries/

- - -

## React Router DOM
&emsp; `npm i react-router-dom@5.3.4`\
https://reactrouter.com/en/main/start/tutorial

### [migration](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#upgrade-to-react-router-v6) to React Router v6
+ `npm i react-router-dom@6.1.0`
+ upgrade all `<Switch>` elements to `<Routes>`
+ relative Routes and Links
> ```javascript
> // This is a React Router v6 app
> import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
> 
> function App() {
>   return (
>     <BrowserRouter>
>       <Routes>
>         <Route path="/" element={<Home />} />
>         <Route path="users/*" element={<Users />} />
>       </Routes>
>     </BrowserRouter>
>   );
> }
> 
> function Users() {
>   return (
>     <div>
>       <nav>
>         <Link to="me">My Profile</Link>
>       </nav>
>       <Routes>
>         <Route path=":id" element={<UserProfile />} />
>         <Route path="me" element={<OwnUserProfile />} />
>       </Routes>
>     </div>
>   );
> }
> ```
+ note on `<Route path>` patterns
+ note on `<Link to>` values
+ use `useRoutes` instead of `react-router-config`
+ use `useNavigate` instead of `useHistory`
> [History API](https://developer.mozilla.org/ru/docs/Web/API/History_API)\
> _DOM-об'єкт Window надає доступ до історії поточної сесії браузера через history об'єкт._ 
> _Він має корисні методи та властивості, які дозволяють переходити назад і вперед з історії користувача та маніпулювати її вмістом._

- - -

**React.lazy()** дозволяє визначити компонент, який завантажується динамічно. Це допомагає зменшити розмір збирання, відкладаючи завантаження компонентів, які не використовуються під час початкового рендеру.
> ```javascript
>  const SomeComponent = React.lazy(() => import('./SomeComponent'));
> ```






