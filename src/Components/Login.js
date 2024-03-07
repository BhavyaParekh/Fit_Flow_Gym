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
 const [formData, setCredentials] = useState({
    username: '',
    password: '',
 });

 const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...formData, [name]: value });
 };

 const handleSubmit  =async (e) => {
  e.preventDefault();
  try {
      const response = await fetch('http://localhost:9090/api/users/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
      });
      if (response.ok) {
          const userData = await response.json();
          localStorage.setItem('userID', userData.id);
          console.log(userData.id);
          navigate('/form');
      } else {
          alert('Incorrect username or password. Please try again.');
          console.error('Login Failed');
      }
  } catch (error) {
      console.error('Error during login:', error);
        }
    }
   return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Username" value={formData.username} onChange={handleChange} />
        <input type="password"  name='password' placeholder="Password" value={formData.password} onChange={handleChange} />
        <Link to="/signup" className="signup-link">Sign up</Link>
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

