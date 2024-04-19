const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LOGIN_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
        loading: true,
        error: null
      };
    case 'POST_LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        loading: false,
        error: null
      };
    case 'POST_LOGIN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
        error: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default login;
