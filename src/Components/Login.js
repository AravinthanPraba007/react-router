import React from 'react';
import '../App.css';

function Login({history}) {

    function handleHomeClick() {
        history.push('/');
  }

  function handleForgetPasswordClick() {
    history.push('/forgetPassword');
}


  return (
    <div>
      <h1>Login Page </h1>
      <div className="button-style">
      <button onClick={handleForgetPasswordClick}>
          Forget Password
      </button>
      
      <button onClick={handleHomeClick}>
          Back to Home
      </button>
      </div>
     
    </div>
  );
}

export default Login;
