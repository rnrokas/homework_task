import mapReducer from './store/mapReducer';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = createStore(
  mapReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
