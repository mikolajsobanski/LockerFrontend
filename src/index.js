import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import './css/subheader.css';
import './css/upfooter.css';
import './bootstrap.min.css';
import './css/socialPanel.css'
import './css/videoSection.css'
import './css/homeScreen.css'
import './css/footballScreen.css'
import './css/productCard.css'
import './css/profileScreen.css'
import './css/navbar.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
