import { setLoadingData, setData, setError } from './Actions';

const GetData = () => (dispatch) => {
  dispatch(setLoadingData());
  fetch('http://localhost:3001/messages')
    .then((res) => res.json())
    .then((data) => {
      dispatch(setData(data));
    })
    .catch((error) => {
      dispatch(setError(error.message));
    });
};
export default GetData;
