const initialState = {
  isLoggedIn: false,
  data: null,
  loading: false,
  error: null
};

const inputOTP = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_INPUTOTP_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null
      };
    case 'POST_INPUTOTP_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'POST_INPUTOTP_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default inputOTP;
