import axios from 'axios';

const apiUrl = import.meta.env.VITE_BASE_URL;

export const fetchData = (dataType, params) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(apiUrl +`/${dataType}/detail`, {
        params: params
      });
      console.log(params)
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
export const fetchDataById = (api, dataType, id, token) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(apiUrl +`/${api}/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};

export const fetchDataByUserId = (dataType, user_id) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(apiUrl + `/${dataType}/${user_id}`);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
export const fetchDataByToken = (url, dataType, token) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
    try {
      const response = await axios.get(apiUrl + `/${url}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: { dataType, data: response.data } });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error });
    }
  };
};
