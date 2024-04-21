import axios from 'axios';

// const baseUrl= import.meta.env.VITE_BASE_URL;
export const putData = (dataType, id, data, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'PUT_DATA_REQUEST' });
    try {
      const bodyData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        bodyData.append(key, value);
      });

      const response = await axios.post(`/api/${dataType}/${id}`);
      dispatch({ type: 'PUT_DATA_SUCCESS', payload: { dataType, data: response.data } });
      navigate('/home');
      window.scrollTo(0, 0);
    } catch (error) {
      dispatch({ type: 'PUT_DATA_FAILURE', payload: error });
    }
  };
};
