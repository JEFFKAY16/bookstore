import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/configureStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider key={0} store={store}>
      <App key={0} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
