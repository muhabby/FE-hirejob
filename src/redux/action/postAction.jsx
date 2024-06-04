import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const postData = (dataType, data, token) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const response = await axios.post(`${apiUrl}/${dataType}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      dispatch({ type: 'POST_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'POST_DATA_FAILURE', payload: error });
    }
  };
};

export const CreateSkills = (data, tokenUser) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'post',
        url: `${apiUrl}/skills`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${tokenUser}`
        },
        data: data
      });
      dispatch({ type: 'POST_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({
        type: 'POST_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};

export const CreateWorkExperience = (data, tokenUser, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'post',
        url: `${apiUrl}/workExperience`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${tokenUser}`
        },
        data: data
      });
      dispatch({ type: 'POST_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: 'POST_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};

export const CreatePortofolio = (data, token, navigate) => {
  return async (dispatch) => {
    dispatch({ type: 'POST_DATA_REQUEST' });
    try {
      const response = await axios({
        method: 'post',
        url: `${apiUrl}/portofolio`,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token}`
        },
        data: data
      });
      dispatch({ type: 'POST_DATA_SUCCESS', payload: response.data });
      window.location.reload();
    } catch (error) {
      dispatch({
        type: 'POST_DATA_FAILURE',
        payload: error?.response?.data?.messages ?? 'create Error'
      });
    }
  };
};
