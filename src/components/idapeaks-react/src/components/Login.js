import React, { useState } from 'react';

/**
 * Login component that provides user authentication functionality.
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      sessionStorage.setItem('loggedIn', 'true');
    } else {
      alert('Invalid username or password.');
    }
  };

  return (
    <div id="login-form" className="mb-4">
      <div className="form-group">
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          id="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button id="login-button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
