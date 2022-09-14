import ActionCreators from './ActionCreators';

export const setLoadingData = () => ({
  type: ActionCreators.FETCH_DATA_LOADING,
});

export const setData = (data) => ({
  type: ActionCreators.FETCH_DATA,
  payload: data,
});

export const setError = (error) => ({
  type: ActionCreators.FETCH_DATA_ERROR,
  payload: error,
});
