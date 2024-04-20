import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const authLogin = (credentials) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_LOGIN_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth', credentials, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      dispatch({ type: 'POST_LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ 
        type: 'POST_LOGIN_FAILURE', 
        payload: error?.response?.data?.messages ?? "Login Error"
      });
    }
  };
};

export const authRegister = (userData) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_REGISTER_REQUEST' });
    try {

      const response = await axios.post(apiUrl + '/auth/create', userData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      dispatch({ type: 'POST_REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ 
        type: 'POST_REGISTER_FAILURE', 
        payload: error?.response?.data?.messages ?? "Register Error"
      });
    }
  };
};

export const requestOTP = (email) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_OTP_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/otp', email, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      dispatch({ type: 'POST_OTP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ 
        type: 'POST_OTP_FAILURE', 
        payload: error?.response?.data?.messages ?? "Request OTP Error"
      });
    }
  };
};

export const inputOTP = (otp) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_INPUTOTP_REQUEST' });
    try {
      const response = await axios.post(apiUrl + '/auth/inputotp', otp, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        }
      });
      dispatch({ type: 'POST_INPUTOTP_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ 
        type: 'POST_INPUTOTP_FAILURE', 
        payload: error?.response?.data?.messages ?? "Input OTP Error"
      });
    }
  };
};

export const setPassword = (password, token) => {
  return async (dispatch) => {
    dispatch({ type: 'SET_PASSWORD_REQUEST' });
    try {
      // const formDataEncoded = querystring.stringify(password);
      console.log(password)
      const response = await axios.post(apiUrl + '/auth/passwordreset', password, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": `Bearer ${token}`,
        }
      });
      dispatch({ type: 'SET_PASSWORD_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ 
        type: 'SET_PASSWORD_FAILURE', 
        payload: error?.response?.data?.messages ?? "Set Password Error"
      });
    }
  };
};

export const authLogout = () => {
  localStorage.clear();
  return { type: 'LOGOUT' };
};
