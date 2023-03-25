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




