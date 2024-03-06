import React , {useState} from 'react';
import axios from 'axios';

function Signup() {
// user details given for sign up
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:9090/signup', formData);
      
      if (response.status === 200) {
        // Handle successful signup
        console.log('User signed up successfully!');
      } else {
        // Handle signup error
        console.error('Signup failed.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };




  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username"  onChange={handleChange} />
        <input type="email" placeholder="Email"  onChange={handleChange} />
        <input type="password" placeholder="Password"  onChange={handleChange}/>
        <input type="password" placeholder="Confirm Password" onChange={handleChange}/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;