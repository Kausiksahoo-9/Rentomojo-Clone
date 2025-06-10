import React, { useState, useEffect } from 'react';
import './LoginSignup.css';
import cathappy from './img/cathappy.svg'; 
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

function Signup({ onClose }) { // Receive onClose as a prop
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phnno, setPhnno] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUsername() {
      if (name.trim() !== "") {
        let res = await fetch('http://localhost:3000/users');
        let data = await res.json();
        let userExists = data.some(user => user.name === name);
        setFlag(userExists);
      }
    }
    checkUsername();
  }, [name]);

  const postData = async (event) => {
    event.preventDefault(); 
    let obj = {
      id: Math.random() + Date.now(),
      name,
      email,
      phnno,
      password
    };

    let validationErrors = {};
    let isValid = true;

    if (!name.trim()) {
      isValid = false;
      validationErrors.name = "Name is required";
    } else if (flag) {
      isValid = false;
      validationErrors.name = "Username already exists";
    }

    if (!email.trim()) {
      isValid = false;
      validationErrors.email = "Email is required";
    }

    if (!phnno.trim()) {
      isValid = false;
      validationErrors.phnno = "Phone number is required";
    } else if (phnno.length < 10) {
      isValid = false;
      validationErrors.phnno = "Phone number should be at least 10 digits";
    }

    if (!password.trim()) {
      isValid = false;
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      isValid = false;
      validationErrors.password = "Password should be at least 8 characters";
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      try {
        let res = await fetch('http://localhost:3000/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(obj)
        });
        let data = await res.json();
        alert("Registered successfully");
        if (onClose) onClose(); // Close the signup modal and open the login modal
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  };

  return (
    <div className="app">
      <div className="login-container">
        <div className="login-image">
          <img src={cathappy} alt="Signup Illustration" />
        </div>
        <div className="login-form">
          <h2>Sign up to your account!</h2>
          <form onSubmit={postData}>
            <div className="form-group">
              <input type="text" placeholder="Enter your name*" onChange={(e) => setName(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.name}</span>}
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter your email*" onChange={(e) => setEmail(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.email}</span>}
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your phone number*" onChange={(e) => setPhnno(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.phnno}</span>}
            </div>
            <div className="form-group">
              <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
              {!valid && <span className='msgspan'>{errors.password}</span>}
            </div>
            <button type='submit'>Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
