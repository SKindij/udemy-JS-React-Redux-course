
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { Transition, CSSTransition } from 'react-transition-group';
import Form from './Form';
import CustomForm from './Form-final';

import './app.scss';
import './App.css';

const ModalTransition = (props) => {
  // даний блок беремо з бібліотеки Transition
  // тривалість анімації 300мс
  const duration = 500;
  // стилі за замовчуванням для модального вікна
  const defaultStyle = {
    transition: `opacity visibility ${duration}ms ease-in-out`,
    opacity: 0,
    visibility: 'hidden'
  }
  // стилі для перехідних етапів
  const transitionStyles = {
    entering: { opacity: 1, visibility: 'visible' },
    entered:  { opacity: 1, visibility: 'visible' },
    exiting:  { opacity: 0, visibility: 'hidden' },
    exited:  { opacity: 0, visibility: 'hidden' },
  };

  return (
    <Transition 
      in={props.show} 
      timeout={duration} unmountOnExit
      // при появі модалки кнопка зникає
      onEnter={ () => props.setShowTrigger(false) }
      // при зкритті модалки кнопка повертається
      onExited={ () => props.setShowTrigger(true) }>
      {state => (
        <div className="modal mt-5 d-block" 
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Typical modal window</h5>
              <button onClick={ () => props.onClose(false) } type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal Transition content</p>
              <p>React Transition Group</p>
            </div>
            <div className="modal-footer">
              <button onClick={ () => props.onClose(false) } type="button" className="btn btn-secondary">Close</button>
              <button onClick={ () => props.onClose(false) } type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </Transition>
  )
}

const ModalCSSTransition = (props) => {
  const duration = 500;

  return (
    <CSSTransition 
      in={props.show} 
      timeout={duration} unmountOnExit
      onEnter={ () => props.setShowCSSTrigger(false) }
      onExited={ () => props.setShowCSSTrigger(true) }
      classNames='my-node'>
      {state => (
        <div className="modal mt-5 d-block">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Typical modal window</h5>
              <button onClick={ () => props.onClose(false) } type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Modal CSSTransition content</p>
              <p>React Transition Group</p>
            </div>
            <div className="modal-footer">
              <button onClick={ () => props.onClose(false) } type="button" className="btn btn-secondary">Close</button>
              <button onClick={ () => props.onClose(false) } type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      )}
    </CSSTransition>
  )
}




function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  const [showCSSModal, setShowCSSModal] = useState(false);
  const [showCSSTrigger, setShowCSSTrigger] = useState(true);

  return (
    <Container>
      
      <div>
      <ModalTransition show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger} />
        { showTrigger ? 
          <button 
          type="button" 
          className="btn btn-warning mt-5"
          onClick={() => setShowModal(true)}>Open ModalTransition</button> :
          null }
      </div>
	  
      <div>
      <ModalCSSTransition show={showCSSModal} onClose={setShowCSSModal} setShowCSSTrigger={setShowCSSTrigger} />
        { showCSSTrigger ? 
          <button 
          type="button" 
          className="btn btn-warning mt-5"
          onClick={() => setShowCSSModal(true)}>Open ModalCSSTransition</button> :
          null }
      </div>
	  
	  <div>
	    <Form />
	  </div>

    <div>
	    <CustomForm />
	  </div>
      
    </Container>
  );
}

export default App;