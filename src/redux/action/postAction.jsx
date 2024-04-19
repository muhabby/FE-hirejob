import axios from 'axios';

// const baseUrl= import.meta.env.VITE_BASE_URL;
export const postData = (dataType, data) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const bodyData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        bodyData.append(key, value);
      });

      const response = await axios.post(`/api/${dataType}`);
      dispatch({ type: 'POST_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'POST_DATA_FAILURE', payload: error });
    }
  };
};
