// import React from 'react';
 import { Link } from 'react-router-dom';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form>
//         <input type="text" placeholder="Username" />
//         <input type="password" placeholder="Password" />
//         <Link to="/signup" className="signup-link">Sign up</Link>
        
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
 const navigate = useNavigate();
 const [credentials, setCredentials] = useState({
    username: '',
    password: '',
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:9090/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        console.log("Login successful!");
        // Navigate to the desired page after successful login
        navigate('/form'); // Adjust the path as needed
      } else {
        console.error("Login failed.");
        // Optionally, display an error message to the user
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Optionally, display an error message to the user
    }
 };
   return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Username" value={credentials.username} onChange={handleChange} />
        <input type="password"  name='password' placeholder="Password" value={credentials.password} onChange={handleChange} />
        <Link to="/signup" className="signup-link">Sign up</Link>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

