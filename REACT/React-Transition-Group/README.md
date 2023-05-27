## React Transition Group

> &emsp;_Це бібліотека від React спільноти, що надає потрібні component для використання у програмі React, 
> допомагає створити анімаційний ефект під час переходу, і також допомагає вам легше працювати з CSS Transition._

* website: https://reactcommunity.org/react-transition-group/
* Installation: ``npm install react-transition-group --save``

Components:
+ Transition
  - lets you describe transition from one component state to another over time with simple declarative API;
  - used to animate the mounting and unmounting of a component, 
  - also be used to describe in-place transition states as well;
+ CSSTransition
  - inspired by the excellent ng-animate library;
  - you should use it if you're using CSS transitions or animations;
  - applies a pair of class names during the appear, enter, and exit states of the transition;
+ SwitchTransition
  - inspired by the vue transition modes;
  - use it when you want to control the render between state transitions;
  - it is based on the selected mode and the child's key which is the Transition or CSSTransition component, and makes a consistent transition between them;
+ TransitionGroup
  - manages a set of transition components (<Transition> and <CSSTransition>) in a list;
  - it is a state machine for managing the mounting and unmounting of components over time;

> &emsp;_Компонент **Transition** дозволяє описати **transition (перехід)**, щоб конвертувати даний статус інтерфейсу в новий статус інтерфейсу в певному часі._
  
- - -

## React-Motion
  
* website: https://github.com/chenglou/react-motion
* Installation: ``npm install --save react-motion``
  
- - -  
   
## starter-app

> &emsp;_Якщо проект має файл **package.json**, то запустивши:_  ``npm install`` _встановиться усе, що потрібно проекту,_\
> _у папку **node_modules**, створивши її, якщо вона ще не існує._
    
```javascript
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "bootstrap": "^5.2.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.4",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "react-transition-group": "^",
    "styled-components": "^5.3.11",
    "web-vitals": "^3.3.1"
  },
```   
  
> _Примітка. Використовуючи React Transition Group із React Router, уникайте використання компонента Switch, оскільки він виконує лише перший відповідний Route. 
>  Це зробило б неможливим вихідний перехід, оскільки вихідний маршрут більше не відповідатиме поточній URL-адресі, а дочірня функція не виконуватиметься._
  
