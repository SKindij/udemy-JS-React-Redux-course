# React Transition Group

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







