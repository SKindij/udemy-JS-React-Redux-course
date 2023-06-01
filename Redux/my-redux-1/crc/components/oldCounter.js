// import { Component } from "react";

// метод для з'єднання компонентів React зі станом Redux
import { connect } from "react-redux";
import * as actions from '../actions';

/* приклад із класовим компонентом
class Counter extends Component {
    render() {
        const {counter, inc, dec, rnd} = this.props;
        return (
            <div className="jumbotron">
                <h1>{counter}</h1>
                <button onClick={dec} className="btn btn-primary">DEC</button>
                <button onClick={inc} className="btn btn-primary">INC</button>
                <button onClick={rnd} className="btn btn-primary">RND</button>
            </div>
        )
    }
}
*/

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    )
}



// дана функція буде отримувати глобальний стейт
// повертає обьєкт із потрібними нам властивостями зі стейту
const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}


export default connect( mapStateToProps, actions )(Counter);