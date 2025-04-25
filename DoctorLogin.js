import React, { useState } from 'react';
import './DoctorLogin.css';

const Button = ({ type = 'button', onClick, children, className }) => {
  return (
    <button type={type} onClick={onClick} className={`login-button ${className || ''}`}>
      {children}
    </button>
  );
};

const Input = ({ id, label, type, value, onChange, placeholder, required = false }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }

    setPasswordError(''); // Clear error if password is valid

    // Handle form submission logic
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-illustration">
          <img src="https://surl.li/fittys" alt="Illustration" />
        </div>
        <div className="login-form-container">
          <div className="login-header">
            <h1>Welcome Back to HMS Doctor Login !</h1>
            <h2>Please log in to continue</h2>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input
              id="email"
              label="Email Address"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              required
            />
            {passwordError && <div className="error-message">{passwordError}</div>}
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <a href="/ForgotPassword" className="forgot-password">Forgot Password?</a>
            </div>
            <Button type="submit" className="login-button">Login</Button>
          </form>
          <div className="signup-prompt">
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
          <div className="app-download">
            <img src="https://img.icons8.com/?size=100&id=rrHpBTMgYift&format=png&color=000000" alt="Google Play" />
            <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=1A1A1A" alt="App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
