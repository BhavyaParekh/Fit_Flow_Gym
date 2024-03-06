import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link to="/signup" className="signup-link">Sign up</Link>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;