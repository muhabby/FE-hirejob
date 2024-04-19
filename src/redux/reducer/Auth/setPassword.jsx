const initialState = {
  data: null,
  loading: false,
  error: null
};

const setPassword = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'SET_PASSWORD_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null
      };
    case 'SET_PASSWORD_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default setPassword;
