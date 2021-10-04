import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from 'react-redux';
import { store } from './Redux/index';


ReactDOM.render(
  
  <BrowserRouter>
  <Provider store={store}>
     <App />
  </Provider>
     
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();