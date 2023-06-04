import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/App';
import store from './store';

import './styles/index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>       
      <Provider store={store}>
            <App />
      </Provider>     
    </StrictMode>
);
