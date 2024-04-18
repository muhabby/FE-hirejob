const initialState = {
  isLoggedIn: false,
  data: null,
  loading: false,
  error: null,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_REGISTER_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null
      };
    case 'POST_REGISTER_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'POST_LOGIN_FAILURE':
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

export default register;