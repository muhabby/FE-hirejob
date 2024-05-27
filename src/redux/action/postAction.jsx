import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const postData = (dataType, data, token) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const response = await axios.post(`${apiUrl}/${dataType}`, data,{
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
      dispatch({ type: 'POST_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'POST_DATA_FAILURE', payload: error });
    }
  };
};
