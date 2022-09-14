import ActionCreators from './ActionCreators';

const initialState = {
  messages: [],
  loading: true,
  error: false,
};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionCreators.FETCH_DATA_LOADING:
      return {
        ...state, loading: true,
      };
    case ActionCreators.FETCH_DATA:
      return {
        ...state, messages: payload, loading: false,
      };
    case ActionCreators.FETCH_DATA_ERROR:
      return {
        ...state, error: true,
      };
    default:
      return state;
  }
};
export default DataReducer;
