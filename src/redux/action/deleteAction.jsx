import axios from 'axios';

// const baseUrl = import.meta.env.VITE_BASE_URL;
const apiUrl = import.meta.env.VITE_BASE_URL;

export const deleteData = (dataType, id) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_DATA_REQUEST' });
    try {
      const response = await axios.delete(`/api/${dataType}/${id}`);
      dispatch({ type: 'DELETE_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'DELETE_DATA_FAILURE', payload: error });
    }
  };
};

export const deleteWorkExperience = (id, tokenUser, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_DATA_REQUEST' });

    try {
      const response = await axios({
        method: 'delete',
        url: `${apiUrl}/workExperience/${id}`,
        headers: {
          Authorization: `Bearer ${tokenUser}`
        },
      });
      dispatch({ type: 'DELETE_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: 'DELETE_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'delete Error'
      });
    }
  };
};

export const deletePortofolio = (id, tokenUser, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'DELETE_DATA_REQUEST' });

    try {
      const response = await axios({
        method: 'delete',
        url: `${apiUrl}/portofolio/${id}`,
        headers: {
          Authorization: `Bearer ${tokenUser}`
        },
      });
      dispatch({ type: 'DELETE_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: 'DELETE_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'delete Error'
      });
    }
  };
};
