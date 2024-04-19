const initialState = {
  data: null,
  loading: false,
  error: null
};

const requestOTP = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_OTP_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'POST_OTP_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'POST_OTP_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default requestOTP;
