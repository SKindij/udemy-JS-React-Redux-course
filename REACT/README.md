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
___

### JSX is a syntax extension for JavaScript.

&emsp; JSX creates “React elements”.<br>
   + you can put any valid JavaScript expression inside {curly braces} in JSX;
   + once compiled, JSX expressions become regular JavaScript function calls that return JavaScript objects;
   + you can use JSX inside ``if`` statements and ``for`` loops;
   + JSX tags can have child elements;
   + JSX prevents the injection of malicious code
___

&emsp; In practice, most React applications call ``ReactDOM.render()`` only once.
_React DOM compares an element and its child elements with previous ones and makes only the necessary changes to the DOM to bring the DOM to the desired state._

Components allow you to divide the user interface into independent, reusable parts and treat them as functioning independently of each other.
> React.Component [API](https://uk.reactjs.org/docs/react-component.html) <br>
> Always start component names with a capital letter.
___

[Classnames](https://www.npmjs.com/package/classnames) - simple JavaScript utility for conditionally joining classNames together.\
``npm install classnames``
> ``var classNames = require('classnames');``\
> ``classNames('foo', 'bar'); // => 'foo bar'``\
___

**React Fiber Architecture**
   - [RU article](https://habr.com/ru/post/444276/)
   - [EN article](https://github.com/acdlite/react-fiber-architecture)
___

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
___

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
___

### front-end framework for react

[React-Bootstrap](https://react-bootstrap.github.io/) replaces the Bootstrap JavaScript.\
* ``npm install react-bootstrap bootstrap``
* ``npm install sass``
> ```javascript
>    import { Button } from 'react-bootstrap';
> ```

[Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page) is a React component library for Bootstrap.\
* ``npm install reactstrap react react-dom``
* ``npm install --save bootstrap``
  + ``import 'bootstrap/dist/css/bootstrap.min.css';``

* Baseweb 
	- GitHub: https://github.com/uber/baseweb
	- web: https://baseweb.design/ <br>
		``npm install baseui styletron-react styletron-engine-monolithic``
* Material UI
	- GitHub: https://github.com/mui/material-ui
	- web: https://mui.com/core/ <br>
		``npm install @mui/material @emotion/react @emotion/styled``
* Evergreen
	- GitHub: https://github.com/segmentio/evergreen
	- web: https://evergreen.segment.com/ <br>
		``npm install --save evergreen-ui``
* Rebass
	- GitHub: https://github.com/rebassjs/rebass
	- web: https://rebassjs.org/ <br>
		``npm i rebass``
* Grommet
	- GitHub: https://github.com/grommet/grommet
	- web: https://v2.grommet.io/ <br>
		``npm install grommet styled-components --save``
___

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






