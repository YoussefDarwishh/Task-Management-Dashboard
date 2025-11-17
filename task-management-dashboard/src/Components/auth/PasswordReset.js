import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const emailRef = useRef(null); 
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }
    setMessage(`If an account exists for ${email}, a reset link was sent.`);
  };

  return (
    <div className="card" style={{ maxWidth: '420px', margin: '3rem auto' }}>
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input ref={emailRef} id="email" type="email" className="input" />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: '1rem', width: '100%' }}
        >
          Send reset link
        </button>
        {message && (
          <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            {message}
          </div>
        )}
      </form>
      <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
        <Link to="/login">Back to login</Link>
      </div>
    </div>
  );
};

export default PasswordReset;
