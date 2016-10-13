import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


function catReducer(state={
  loading: false,
  data: [],
  error: null
}, action) {
  if (action.type === 'GET_CATS') {
    return Object.assign({}, state, {loading: true});
  } else if (action.type === 'RECEIVE_CATS') {
    return Object.assign({}, state, {loading: false, data: action.data});
  }
  return state;
}


const rootReducer = combineReducers({
  routing: routerReducer,
  cats: catReducer
});

export default rootReducer;
