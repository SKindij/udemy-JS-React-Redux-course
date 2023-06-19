# REACT [official documentation](https://uk.reactjs.org/)

&emsp;_It doesn't matter how I get to your house, what matters is which car I arrive in. It will either have an imperative manual transmission or a declarative automatic transmission. Enough metaphors? A car with an automatic transmission has a certain layer of abstraction over gear shifting._
> * Imperative: C, C++, Java.
> * Declarative: SQL, HTML.
> * Mixed (can be): JavaScript, C#, Python.

&emsp;The W3C is currently working on a new **Shadow DOM standard** (_specification that describes a method for combining multiple DOM trees into a single hierarchy, and how these trees interact with each other within a document to better compose the DOM_).

&emsp;Another option is to use the **Virtual DOM** approach (_instead of interacting with the DOM directly, we work with a lightweight copy of it. We can make changes to the copy based on our needs, and then apply the changes to the real DOM._).

&emsp;**React JS** is a JavaScript library developed by Facebook for building user interfaces that popularized the idea of using a virtual DOM. React creates a lightweight tree from JavaScript objects to mimic a DOM tree. It then creates HTML from them, which is inserted or added to the desired DOM element, which causes the browser to redraw the page.<br>
&emsp; React is a library, not a framework, so comparing it to Angular or Ember is incorrect.

## The library for web and native user interfaces
[Create React App](https://github.com/facebook/create-react-app)

&emsp;React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.

&emsp;You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.<br>
* it uses an XML-like syntax called JSX;
* component can store internal state data;
___

&emsp; [@babel/plugin-transform-react-jsx](https://babeljs.io/docs/babel-plugin-transform-react-jsx)
> NOTE: This plugin is included in ``@babel/preset-react``
* React Automatic Runtime
    - _with this runtime enabled, the functions that JSX compiles to will be imported automatically_
* React Classic Runtime
    - _if you do not want (or cannot use) auto importing, which is the default behavior for v7 and prior_
___

> ```
> npx create-react-app my-app
> cd my-app
> npm start
> ```
> 
> > _You don’t need to install or configure tools like webpack or Babel._
> > _They are preconfigured and hidden so that you can focus on the code._

Create a project, and you’re good to go.<br>
Then open http://localhost:3000/ to see your app.<br>
When you’re ready to deploy to production, create a minified bundle with ``npm run build``.

- - -

### JSX is a syntax extension for JavaScript.

&emsp; JSX creates “React elements”.<br>
   + you can put any valid JavaScript expression inside {curly braces} in JSX;
   + once compiled, JSX expressions become regular JavaScript function calls that return JavaScript objects;
   + you can use JSX inside ``if`` statements and ``for`` loops;
   + JSX tags can have child elements;
   + JSX prevents the injection of malicious code

> _You have 3 ways of adding comments in a React component:_
> ```javascript
>  function MyComponent() {
>    return (
>      // Comment around JSX
>      <div>
>        {/* Comment inside JSX */}
>        <Hello // comment inside JSX tag
>          message="Hello, World!" // comment inside JSX tag
>        /> 
>      </div>
>    )
>  }
> ```

- - -

&emsp; In practice, most React applications call ``ReactDOM.render()`` only once.
_React DOM compares an element and its child elements with previous ones and makes only the necessary changes to the DOM to bring the DOM to the desired state._

Components allow you to divide the user interface into independent, reusable parts and treat them as functioning independently of each other.
> React.Component [API](https://uk.reactjs.org/docs/react-component.html) <br>
> Always start component names with a capital letter.

- - -

[Classnames](https://www.npmjs.com/package/classnames) - simple JavaScript utility for conditionally joining classNames together.\
``npm install classnames``
> ``var classNames = require('classnames');``\
> ``classNames('foo', 'bar'); // => 'foo bar'``\
___

**React Fiber Architecture**
   - [RU article](https://habr.com/ru/post/444276/)
   - [EN article](https://github.com/acdlite/react-fiber-architecture)

- - -

&emsp; React provides a declarative API so that you don’t have to worry about exactly what changes on every update. This makes writing applications a lot easier, but it might not be obvious how this is implemented within React. When you use React, at a single point in time you can think of the ``render()`` function as creating a tree of React elements. On the next state or props update, that ``render()`` function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

&emsp; [Controlled and uncontrolled form inputs](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/) in React don't have to be complicated.

|                 feature                 | uncontrolled | controlled |
|-----------------------------------------|--------------|------------|
|one-time value retrieval (e.g. on submit)|     ✅      |     ✅     |
|   validating on submit                  |     ✅      |     ✅     |
|  instant field validation               |     ❌      |     ✅     |
|conditionally disabling submit button    |     ❌      |     ✅     |
|   enforcing input format                |     ❌      |     ✅     |
|several inputs for one piece of data     |     ❌      |     ✅     |
|    dynamic inputs                       |     ❌      |     ✅     |

Evaluate your specific situation and pick the approach — what works for you is good enough.

- - -

&emsp; Generate unique id's in React components (e.g. for accessibility) - [react-id-generator](https://www.npmjs.com/package/react-id-generator) 
``import nextId from "react-id-generator";``<br>
Each instance of RadioButton will have unique htmlId like: id-1, id-2, id-3, id-4 and so on.
  + nextId
  + useId
  + resetId
  + setPrefix

&emsp; For the creation of RFC4122 UUIDs — [uuid](https://www.npmjs.com/package/uuid): ``npm install uuid``<br>
  + ``import { v4 as uuidv4 } from 'uuid';``
  + ``uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'``
___

&emsp; [Updating an object](https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react/43639228#43639228) with setState in React
  + updating nested state object
  + updating array of objects
  + using hooks in Functional Component
  + spread operator: ...ES6

- - -

### React, Webpack and CSS Modules [Practical Guide](https://www.triplet.fi/blog/practical-guide-to-react-and-css-modules/)
> A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.
> > ```css
> >   /* select.css */
> >     .select {}
> >     .loading {}
> >     .item {}
> >     .icon {}
> > ```
> > ```javascript
> >   /* select.js */
> >     import styles from "./select.css";
> >     console.log(styles.select, styles.loading);
> > ```

#### Configure the Create React App to support CSS Modules
> ``npm run eject  `` \
> Note: there is no going back after you do this.
> > **webpack.config.dev.js** is the correct configuration file to modify.

- - -

#### Public class fields
&emsp; Both **static** and **instance public fields** are writable, enumerable, and configurable properties. As such, unlike their **private** counterparts, they participate in prototype inheritance.

> [Static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
---

Runtime type checking for React props and similar objects.\
[prop-types](https://www.npmjs.com/package/prop-types)\
`npm install --save prop-types`\
PropTypes was originally exposed as part of the React core module, and is commonly used with React components.

- - -		
	
<p align="center">
  <img src="https://github.com/SKindij/SKindij/blob/main/recources/when-use-react-memo.jpg" 
    title="when-use-react-memo" alt="when-use-react-memo" width="640" height="840"/>  
</p> 	
	
## Оптимізація продуктивності 	
https://uk.legacy.reactjs.org/docs/optimizing-performance.html	

> _Якщо ви використали Create React App для створення проекту, запустіть:_\
> ``npm run build``\
> _Ця команда створить продакшн-збірку у папці build/ вашого додатку._

&emsp; react-dom 16.5+ та react-native 0.57+ надають додаткові можливості профілювання в режимі розробки з використанням профайлера React DevTools.	
	
- - -
	
## Допоміжні інструменти

### [TOP 10 REACT HOOK LIBRARIES](https://www.bornfight.com/blog/top-10-react-hook-libraries/)
+ **use-http** https://github.com/ava/use-http
  - використовується як заміна Fetch API;
  - використовує TypeScript і підтримує SSR і GraphQL;
  - повертає response, loading, error data та методи запиту (Get, Post, Put, Patch, Delete);
+ **useMedia** https://github.com/streamich/use-media
  - забезпечує спрощений підхід до відстеження медіа-запиту CSS;
  - це дійсно важливо для швидкої реакції будь-якої програми чи веб-сайту;	
+ **Constate** https://github.com/diegohaz/constate	
  - забезпечує підняття	local state до React Context;
  - це корисно у випадках, коли ви хочете надати той самий state кільком компонентам;
+ **Redux hooks** https://react-redux.js.org/api/hooks	
  - він використовується як глобальний менеджер стану у всій програмі;
  - він пропонує альтернативу шаблону HOC з існуючим методом connect();
  - найбільш відомі: useSelector, useDispatch, useStore;
+ **React hook form** 🌟
  - web: https://react-hook-form.com/	
  - ефективні, гнучкі та розширювані форми з простою перевіркою;
  - це бібліотека, схожа на форми Formik та Redux, але краща;
      * ``npm install react-hook-form``
  - він навіть пропонує свій конструктор форм, що чудово;
+ **Yup**
  - GitHub: https://github.com/jquense/yup
  - конструктор схем для аналізу та перевірки значення під час виконання;
      * define a schema, 
      * transform a value to match, 
      * assert shape of existing value, or both;
  - Yup схеми надзвичайно виразні та дозволяють моделювати складні, взаємозалежні перевірки або трансформацію цінностей;		
+ **Formik**
  - web: https://formik.org/docs/overview
      * ``npm install formik --save``
  - невелика бібліотека, яка допоможе вам із 3 найбільш неприємними частинами:
      * Getting values in and out of form state
      * Validation and error messages
      * Handling form submission
+ **Final Form**
  - web: https://final-form.org/react/
      * ``npm install --save final-form react-final-form``
  - Modular
  - Zero Dependencies
  - High Performance
  - Hooks Compatible
+ **useDebounce** https://github.com/xnimorz/use-debounce	
  - використовується для відкладення виконання функції на більш пізній час;
  - часто використовується в inputs і forms, які отримують дані;	
+ **useLocalStorage** https://github.com/rehooks/local-storage	
  - це дійсно корисно для вилучення та встановлення даних у локальному сховищі;
  - пропонує автоматичну JSON-серіалізацію та синхронізацію на кількох вкладках;
  - він написаний на TypeScript, тому пропонує типи;	
+ **usePortal** https://github.com/alex-cory/react-useportal
  - робить створення випадаючих списків, модальних та спливаючих вікон, підказок… надзвичайно простим!
  - він також дозволяє створювати елементи поза ієрархією DOM програми;
  - працює з SSR як ізоморфний;	
+ **useHover**	https://github.com/andrewbranch/react-use-hover
  - визначає, чи наведено курсор на елемент React;
  - пропонує затримку ефекту наведення та підтримує TypeScript;	
+ **React router hooks** 🌟
  - web: https://reactrouter.com/en/6.11.2	
  - useHistory
  - useLocation
  - useParams
  - useRouteMatch	
	
### [List of the Best React Component Libraries](https://technostacks.com/blog/react-component-libraries/)
+ **Material UI** 🌟
  - використовується в Material Design від Google;
      * GitHub: https://github.com/mui/material-ui
      * web: https://mui.com/core/
  - він добре відомий своєю швидшою та простішою веб-розробкою;
  - ви можете швидко створити свою систему дизайну або почати з матеріального дизайну;
      *	``npm install @mui/material @emotion/react @emotion/styled``
  - містить набір цікавих, готових до використання компонентів, які можна підключити до будь-якої програми;
  - він також пропонує ряд інструментів і API для вдосконалення створення додатків;	
+ **Ant Design** https://ant.design/
  - базується на дизайні Ant Design від Alibaba з китайським корінням;
  - це система проектування продуктів на рівні підприємства;
  - забезпечує повний і гнучкий дизайн і має 50-компонентну бібліотеку;
  - ви можете розглянути дизайн і розробку повнорозмірної програми;
  - найбільш використовувані компоненти: вибір дати, випадаюче меню, значок, кнопка;
  - Ant Design Pro поставляється з шаблонами, компонентами та набором для проектування.
+ **React-Bootstrap** 🌟
  - web: https://react-bootstrap.github.io/
  - містить елементи створення інтерфейсу користувача для веб- і мобільних додатків;
  - це повне оновлення для React взагалі;
      * ``npm install react-bootstrap bootstrap``
      * ``npm install sass``
  - зі своїми компонентами він працює без залежностей bootstrap.js або jQuery;
  - він має довгий список компонентів, що мають повну владу над кожним із них;
  - замість цілої бібліотеки ви можете просто імпортувати окремі компоненти, такі як React-Bootstrap/button;
      * > ```javascript
        >    import { Button } from 'react-bootstrap';
        > ```
      * > > ```javascript
        > >  {/* The following line can be included in your src/index.js or App.js file */}
        > >    import 'bootstrap/dist/css/bootstrap.min.css';
        > > ```
+ [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
  - it is React component library for Bootstrap;
  - ``npm install reactstrap react react-dom``
  - ``npm install --save bootstrap``
      * ``import 'bootstrap/dist/css/bootstrap.min.css';``
+ **Blueprint UI** https://blueprintjs.com/
  - спеціалізується на побудові інструментів для внутрішнього використання;
  - він «розроблений для створення складних інтерфейсів з великою кількістю даних для настільних програм;
  - він розділяє бібліотеки компонентів на основі варіантів використання та істотних залежностей на додаток до основного пакету компонентів;
  - він поставляється зі світлими та темними темами режиму та регульованими елементами дизайну, такими як класи, колірні схеми та типографіка;
+ **Fluent UI** https://fluent2.microsoft.design/
  - раніше він був відомий як Fabric React;
  - це одна із захоплюючих бібліотек інтерфейсу користувача від Microsoft;
  - компоненти з поведінкою та графікою схожі на Office;
  - забезпечує сумісність із desktop, пристроями iOS та Android;
  - це одна з найкращих бібліотек React для веб-розробки;
+ **Grommet**
  - GitHub: https://github.com/grommet/grommet
  - web: https://v2.grommet.io/
      * ``npm install grommet styled-components --save``	
  - має підтримку респонсивного дизайну, що спрощує адаптацію до різних пристроїв;
  - він забезпечує більш яскравий вигляд і відчуття, ніж інші альтернативи, такі як material UI або Ant;
  - він має можливість забезпечувати доступність, оперативність, модульність і тематизацію всього;
  - більш сміливий дизайн компонентів виділяє їх;
+ **Chakra UI** https://chakra-ui.com/	
  - він спрямований на те, щоб витрачати менше часу на написання коду та більше часу на створення фантастичного досвіду користувача;
  - компоненти також доступні та відповідають стандартам WAI-ARIA;
  - у вас буде як світлий, так і темний користувальницький інтерфейс, теми та 49 компонентів, включаючи введення, гармошки, іконки та підказки;
+ Evergreen
  - GitHub: https://github.com/segmentio/evergreen
  - web: https://evergreen.segment.com/
      * ``npm install --save evergreen-ui``
  - надає базові компоненти, які можна налаштовувати за допомогою CSS;
  - базується на системі проектування Segment;
  - він має 30+ компонентів, побудованих на основі примітиву React UI;
  - він також поставляється із загальноприйнятими шаблонами;
  - Бібліотека Evergreen Figma, доступна в спільноті Figma, робить її ще кращою;
+ VisX https://airbnb.io/visx/
  - надає потужні інструменти для створення графіків, діаграм та інших візуальних елементів;
  - вона, розроблена Airbnb, не схожа на інші бібліотеки компонентів у цьому списку;
  - замість компонентів високого рівня він надає набір примітивів візуалізації низького рівня та компонентів для React, які покладаються на d3 для обчислень і математики;
  - вирішує проблему копіювання та вставлення різних хуків React шляхом абстрагування деталей d3 і надання компонентів і утиліт у стандартних API React і шаблонах;
  - опис, інструкції зі встановлення та інтеграції, список API включені для кожного компонента;
  - усі приклади містять URL-адреси CodeSandbox;
+ Rebass 
  - GitHub: https://github.com/rebassjs/rebass
  - web: https://rebassjs.org/
      * ``npm i rebass``
  - він поставляється з базовою колекцією примітивних компонентів, які можна «розробити» для створення найкращої бібліотеки компонентів React UI зі стандартним API і темами дизайну;	
  - примітиви для структури додатка (адаптивні вікна та макети flexbox), текст (заголовок, текст, посилання, кнопка), фотографії, картки та форми – все це включено до основи;
  - він також пропонує найкращу документацію про рецепти для типових випадків використання, таких як сітки, панель навігації та картки зображень;
  — Компонент ThemeProvider використовується для застосування тем у Rebass.	 
+ Baseweb 
  - GitHub: https://github.com/uber/baseweb
  - web: https://baseweb.design/ <br>
      * ``npm install baseui styletron-react styletron-engine-monolithic``
	
- - -

## Deployment
`npm run build` creates a build directory with a production build of your app. 

Delete the ESLint cache to ensure that any cached configurations are cleared.\
You can do this by running the following command in your project's root directory:\
``rm -rf node_modules/.cache/eslint-loader``


If you’re using **Apache HTTP Server**, you need to create a .htaccess file in the public folder that looks like this:
```  
    Options -MultiViews
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.html [QSA,L]
```
> It will get copied to the **build** folder when you run `npm run build`.

#### GitHub Pages ✨


#### Heroku ✨
After a long, useful run, this buildpack is now at its end of life 🌅

Please look into using [Next.js](https://nextjs.org/) or Remix to develop React apps which are deployable using the [Node.js buildpack](https://github.com/heroku/heroku-buildpack-nodejs).

This buildpack deploys a React UI as a static web site. 
[Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack/tree/v9.0.1)


#### Netlify ✨


https://create-react-app.dev/docs/deployment/

- - -

## SEO-оптимізація сайту на React	
	
&emsp;_Як зробити так, щоб про ваш ресурс дізнався весь світ, не вкладаючи в це величезної кількості грошей за платні рекламні компанії або сил у великомасштабну додаткову розробку? Як змусити контент вашого Single Page Application працювати на вас у пошукових видачах та приносити клієнтів?_
+ Пошуковий робот має бачити всі посилання на сторінки сайту;
+ Контент кожної зі сторінок повинен бути доступний для індексування пошуковим роботом, щоб потрапити в результаті у видачі результатів пошуку;
+ Кожна зі сторінок ресурсу повинна в блоці <head> включати:
  * Meta-тег ``title`` (заголовок сторінки)
  * Meta-тег ``description`` (опис сторінки)
  * Meta-тег ``keywords`` (перелік ключових фраз)
+ В блоці ``<body>`` основний заголовок ``<h1>`` розташований якомога вище перед початком текстового контенту.
+ Кожне зображення ``<img>`` повинно мати атрибут ``alt``, який описує вміст зображення.
+ Не повинно бути "битих" посилань, що віддають код помилки 404 або будь-який порожній контент замість очікуваного.	

> **Пререндеринг** - це процес виконання js-коду після його основного складання і збереження html-копій відмальованих сторінок, які згодом і будуть віддаватися з web-сервера при відповідних запитах.

[react-snap](https://github.com/stereobooster/react-snap) Pre-renders a web app into static HTML.

_Якщо в двох словах, то даний інструмент дозволяє після складання здійснити запуск Chromium-а і передати йому додаток, що вийшов. Потім пройти всіма сторінками, використовуючи пул знайдених посилань так, як зробив би це пошуковий робот. При цьому html-копії відмальованих засобами js сторінок будуть збережені у вибраний каталог із збереженням ієрархії шляхів, з яких вони були отримані щодо кореня проекту._

> _meta-теги title, description та keywords повинні бути унікальними для кожної сторінки_

[React Helmet](https://github.com/nfl/react-helmet) This reusable React component will manage all of your changes to the document head.

- - -

### state machine
&emsp;Машина станів – це математична модель обчислень. Це абстрактна концепція, відповідно до якої машина може мати різні стани, але, в якийсь момент часу, перебувати лише в одному з них.
	
<p align="center">
  <img src="https://github.com/SKindij/SKindij/blob/main/recources/state-locked.png" 
    title="state-machine" alt="state machine" width="500" height="210"/>  
</p> 	
	
&emsp;Це схоже на широко відомі функції-редьюсери, де ми отримуємо поточний стан, і, ґрунтуючись на корисному навантаженні дії, вирішуємо, яким буде такий стан. Редьюсер – це перехід у контексті машини станів. Насправді, будь-яка програма, яка має стан, який ми можемо якось змінювати, може називатися машиною станів.	
	
<p align="center">
  <img src="https://github.com/SKindij/SKindij/blob/main/recources/think-in-transitions.png" 
    title="think-in-transitions" alt="think in transitions" width="500" height="240"/>  
</p> 
	
&emsp;Насправді, виписати всі можливі стани легше, ніж виписати всі можливі переходи, оскільки нам відомо, які стани нам потрібні, або які у нас є. Між іншим, у більшості випадків стани описували б логіку функціонування нашої програми. А от якщо говорити про переходи, їхній сенс дуже часто на початку роботи невідомий.\
&emsp;Помилки в програмах є результатами того, що дії виконані тоді, коли програма знаходиться в стані, не розрахованому на ці дії. Крім того, навіть якщо програма знаходиться у відповідному стані, дія може бути виконана в невідповідний час. Подібні дії приводять наш додаток у стан, про який ми не знаємо, і це виводить програму з ладу або призводить до того, що вона веде себе неправильно.		
	
<p align="center">
  <img src="https://github.com/SKindij/SKindij/blob/main/recources/focus-on-states.png" 
    title="focus-on-states" alt="focus on states" width="500" height="210"/>  
</p> 	
		
&emsp;**Машини станів** – це добрі засоби захисту від подібних проблем. Вони захищають нас від досягнення невідомих станів, оскільки ми встановлюємо межі для того, що і коли може статися, не вказуючи явно як це може статися. Концепція машини станів добре поєднується з односпрямованим потоком даних. Разом вони зменшують складність коду та дають чіткі відповіді на питання про те, як система потрапила в той чи інший стан.	

> _Використання React спільно з кінцевими автоматами - чудовий спосіб для підвищення вашої продуктивності як розробника, який також покращує хиткі взаємини розробників/дизайнерів._	
	
```javascript
import React, {Component, PropTypes} from 'react';
export default class InputStateMachine extends Component {
   constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.goToState = this.goToState.bind(this);
     this.save = this.save.bind(this);
     this.state = {
       name: 'display',
       machine: this.generateState('display', props.initialValue),
     };
   }
  generateState(stateName, stateParam) {
    const previousState = this.state ? {...this.state.machine} : {};
    switch (stateName) {
      case 'display':
        return {
          processing: false,
          error: null,
          value: stateParam || previousState.value,
          editing: false,
          editValue: null,
        };
      case 'saving':
        return {
          processing: true,
          error: null, // скидання попередньої помилки збереження
          value: previousState.value,
          editing: true, // відображення вікна редагування в процесі збереження
          editValue: previousState.editValue,
        };
      case 'edit':
        return {
          processing: false,
          error: null,
          value: previousState.value,
          editing: true,
          editValue: stateParam,
        };
      case 'save_error':
        return {
          processing: false,
          error: stateParam,
          value: previousState.value,
          editing: true, // залишаємо вікно редагування відкритим
          editValue: previousState.editValue,
        };
      case 'loading': // ідентично стану за умовчанням
      default:
        return {
          processing: true,
          error: null,
          value: null,
          editing: false,
          editValue: null,
        };
    }
  }
  goToState(stateName, stateParam) {
    this.setState({
      name: stateName,
      machine: this.generateState(stateName, stateParam),
    });
  }
  handleSubmit(e) {
    this.goToState('edit', e.target.value);
  }
  save(valueToSave) {
    this.goToState('saving');
    // імітуємо збереження даних...
    setTimeout(() => this.goToState('display', valueToSave), 2000);
  }
  render() {
    const {processing, error, value, editing, editValue} = this.state.machine;
    if (processing) {
      return <p>Processing ...</p>;
    } else if (editing) {
      return (
        <div>
          <input
            type="text"
            onChange={this.handleSubmit}
            value={editValue || value}
          />
          {error && <p>Error: {error}</p>}
          <button onClick={() => this.save(editValue)}>Save</button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{value}</p>
          <button onClick={() => this.goToState('edit', value)}>Edit</button>
        </div>
      );
    }
  }
}
```	

> _Використання такого компонента:_
```javascript	
<InputStateMachine initialValue="state machine" />	
```	

### Final State Machine	
	
Описується модель "кінцевого автомата станів" за допомогою п'яти параметрів:	
* всі стани, в яких може перебувати автомат;
* набір всіх вхідних даних, що приймаються автоматом;
* функція переходів - приймає попередній стан та набір вхідних даних, і повертає новий стан;
* початковий стан;
* кінцевий стан;	
	
_У кожний момент часу активним може бути лише один стан._
	
	
[XState](https://xstate.js.org/docs/recipes/react.html) can be used with React to:
- Coordinate local state
- Manage global state performantly
- Consume data from other hooks	
	
With [Robot](https://thisrobot.life/) you can build finite state machines in a simple and flexible way.	
	
[Machina.js](http://machina-js.org/) is a JavaScript framework for highly customizable finite state machines (FSMs). Many of the ideas for machina have been loosely inspired by the Erlang/OTP FSM behaviors.	
	
	
	
