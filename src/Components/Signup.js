import React from 'react';
import '../App.css';

function Signup({history}) {

    function handleClick() {
        history.push('/');
  }
  return (
    <div>
      <h1>Signup Page </h1>
      <div className="button-style">
      <button onClick={handleClick}>
          Back to Home
      </button>
      </div>
    </div>
  );
}

export default Signup;
