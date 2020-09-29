import React, { Fragment } from 'react';
import './App.css';
import Map from './containers/Map';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Map />
    </Provider>
  );
};

export default App;
