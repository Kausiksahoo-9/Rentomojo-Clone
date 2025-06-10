import React, { useState } from 'react';
import './LoginSignup.css';
import cathappy from './img/cathappy.svg'; 
import { useNavigate } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';

function Login({ onClose }) { // Receive onClose as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const postData = async (event) => {
    event.preventDefault();
    let validationErrors = {};
    let isValid = true;

    if (!email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
    }

    if (!password.trim()) {
      isValid = false;
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      try {
        let res = await fetch('http://localhost:3000/users');
        let data = await res.json();
        let user = data.find(user => user.email === email && user.password === password);
        if (user) {
          alert("Logged in successfully");
          navigate('/'); // Redirect to homepage
          if (onClose) onClose(); // Close the modal
        } else {
          setErrors({ login: "Invalid email or password" });
          setValid(false);
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  };

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-image">
          <img src={cathappy} alt="Login Illustration" />
        </div>
        <div className="login-form">
          <h2>Login to your account!</h2>
          <form onSubmit={postData}>
            <div className="form-group">
              <input type="email" placeholder="Enter your email*" onChange={(e) => setEmail(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.email}</span>}
            </div>
            <div className="form-group">
              <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.password}</span>}
            </div>
            {errors.login && <span className='msgspan'>{errors.login}</span>}
            <button type='submit'>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
