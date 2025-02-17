import React, { useState } from 'react';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!email.includes('@')) {
      setEmailError('Email is not appropriate.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (password.length < 6) {
      setPasswordError('Password must be over than 6 letters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      console.log("Form submitted successfully!", { email, password });
      setSuccessMessage('Registered successfully!');
      setEmail('');
      setPassword('');
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label><br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RegisterForm;
