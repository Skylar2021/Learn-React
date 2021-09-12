import React, { useState } from 'react';
// import ReactDOM from 'react-dom';


export default function TestStatus({ handleChange }) {
  let [status, setStatus] = useState('On')
  return (
    <>
      <button onClick={() => setStatus(prevStatus => (prevStatus === 'On' ? 'Off' : 'On'))}>Switch</button>
      <p>{status}</p>
    </>
  )
}
