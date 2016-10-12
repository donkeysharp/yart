import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


export function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
