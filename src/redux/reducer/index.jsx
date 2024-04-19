import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import postReducer from './postReducer';
import putReducer from './putAction';
import deleteReducer from './deleteReducer';
import login from './Auth/loginReducer';
import register from './Auth/registerReducer';
import requestOTP from './Auth/requestotpReducer';
import inputOTP from './Auth/inputotpReducer';
import setPassword from './Auth/setPasswordReducer';

const rootReducers = combineReducers({
  login,
  register,
  requestOTP,
  inputOTP,
  setPassword,
  fetchReducer,
  postReducer,
  putReducer,
  deleteReducer
});

export default rootReducers;
