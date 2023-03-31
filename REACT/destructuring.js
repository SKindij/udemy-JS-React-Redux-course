// In React app development, destructuring can be used, for example, to simplify access to state and props of component.
class MyComponent extends React.Component {
  state = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  };

  render() {
    const { firstName, lastName } = this.state;

    return (
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>
    );
  }
}
// In this example, we used destructuring to access firstName and lastName properties from component's state.

// Here's example of using destructuring with props in React component:
function MyComponent(props) {
  const { firstName, lastName, age } = props;

  return (
    <div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage:
<MyComponent firstName="John" lastName="Doe" age={30} />

// and also
class MyComponent extends React.Component {
  render() {
    const { firstName, lastName, age } = this.props;

    return (
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

// Usage:
<MyComponent firstName="John" lastName="Doe" age={30} />
