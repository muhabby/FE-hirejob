import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import postReducer from './postReducer';
import putReducer from './putAction';
import deleteReducer from './deleteReducer';

const rootReducers = combineReducers({
  fetchReducer,
  postReducer,
  putReducer,
  deleteReducer
});

export default rootReducers;
