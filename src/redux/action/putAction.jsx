import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
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

export const UpdateWorker = (data, token) => {
  return async (dispatch) => {
    dispatch({ type: 'PUT_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'put',
        url: `${baseUrl}/worker`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
        data: data
      });
      dispatch({ type: 'PUT_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'PUT_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};

export const UpdateCompany = (data, token, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'PUT_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'put',
        url: `${baseUrl}/recruiter`,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        },
        data: data
      });
      dispatch({ type: 'PUT_DATA_SUCCESS', payload: response.data });
      navigate('/home');
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'PUT_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};

export const UpdateSkill = (data, token, skillId) => {
  return async (dispatch) => {
    dispatch({ type: 'PUT_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'put',
        url: `${baseUrl}/skills/${skillId}`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        },
        data: data
      });
      dispatch({ type: 'PUT_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'PUT_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};
