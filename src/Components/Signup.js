import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

// import axios from "axios";

function Signup() {
  // user details given for sign up
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:9090/api/users/signup",
        {
          method : 'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify(formData)
        }
       
        
      );
     
      if (response.ok) {
        // Handle successful signup
        console.log("User signed up successfully!");
        navigate('/Login');
       } else {
        // Handle signup error
        console.error("Signup failed.");
       }
       
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
