import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/setup'; // Votre fichier de configuration Redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>
);

reportWebVitals();
