import { useState} from 'react';
import {Container} from 'react-bootstrap';

const Form = () => {
  const [text, setText] = useState('');

  const validateInput = (text) => {
    if ( text.search(/\d/) >= 0 ) {
        return true
    } else {
        return false
    }
  }

  const color = validateInput(text) ? 'text-danget' : null;


  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <input value={text} type="text" className="form-control" readOnly/>
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
          <input type="email" id="exampleFormControlInput1" placeholder="name@example.com"
            value={text}
            className={`form-control ${color}`}
            onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </form>
    </Container>
  )
}

export default Form;
