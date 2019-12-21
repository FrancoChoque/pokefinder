/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as toastrReducer } from 'react-redux-toastr';
import uiReducer from './ui/reducer';

const rootReducer = combineReducers({
  uiReducer,
  toastrReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};

export default configureStore;
