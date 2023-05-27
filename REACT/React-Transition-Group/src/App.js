
import {useState} from 'react';
import {Container} from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import './App.css';

const Modal = (props) => {
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
              <p>Modal body content</p>
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

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  return (
    <Container>
        <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger} />
        { showTrigger ? 
          <button 
          type="button" 
          className="btn btn-warning mt-5"
          onClick={() => setShowModal(true)}>Open Modal</button> :
          null }
    </Container>
  );
}

export default App;
