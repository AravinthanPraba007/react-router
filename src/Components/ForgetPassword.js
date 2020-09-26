import React from 'react';
import '../App.css';

function ForgetPassword({history}) {
    
    function handleLoginClick() {
        history.push('/login');
  }

  return (
    <div>
      <h1>ForgetPassword Page </h1>
      <div className="button-style">
      <button onClick={handleLoginClick}>
          Back to Login
      </button>
      </div>
    </div>
  );
}

export default ForgetPassword;
