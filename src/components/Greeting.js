import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetData from '../Redux/Api';

function Greeting() {
  const { messages, loading, error } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  if (loading) {
    return (
      <p>Please wait...</p>
    );
  }

  if (error) {
    return <p>Please refresh the page</p>;
  }

  return (
    <div>
      {messages.greetings}
      <button type="button" onClick={() => dispatch(GetData())}>Get Greeting</button>
    </div>
  );
}

export default Greeting;
