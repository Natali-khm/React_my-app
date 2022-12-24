import React from "react";

const Login = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form action="#">
        <div>
          <input type="text" placeholder="Login" />
        </div>
        <div>
          <input type="text" placeholder="Password" />
        </div>
        <div>
          <input type="checkbox" /> remember me
        </div>
        <button type="submt">Login</button>
      </form>
    </div>
  );
};

export default Login;
