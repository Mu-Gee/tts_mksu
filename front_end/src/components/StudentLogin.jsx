import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../index.css";

function StudentLogin() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() !== '' && id.trim() !== '') {
      navigate('/student-schedule');
    } else {
      alert('Please enter both your name and ID to log in.');
    }
  };

  return (
    <div className="StudentLogin-container">
      <h1 className="StudentLogin-header">Student Login</h1>
      <div>
        <label htmlFor="name">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-person"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path
              fillRule="evenodd"
              d="M8 0a5 5 0 0 0-5 5c0 1.1.45 2.1 1.18 2.82C2.24 8.95 0 11.59 0 14v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.41-2.24-5.05-3.18-6.18C12.55 7.1 13 6.1 13 5a5 5 0 0 0-5-5zM1 15v-1a13.14 13.14 0 0 1 5-2c.708 0 1.383.057 2 .16.617-.1 1.292-.16 2-.16.708 0 1.383.057 2 .16.617-.1 1.292-.16 2-.16.708 0 1.383.057 2 .16.617-.1 1.292-.16 2-.16a13.14 13.14 0 0 1 5 2v1H1z"
            />
          </svg>
          Your Name:
        </label>
        <input
          type="text"
          placeholder="Enter your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="StudentLogin-input"
        />
      </div>
      <div>
        <label htmlFor="id">
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-card-text"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V14a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 14V1.5A1.5 1.5 0 0 0 14.5 0h-13zM14 1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            <path d="M3 6h10v1H3V6zm0 3h10v1H3V9zm7-4H3V2h7v3zM2 14a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1H2v-1z" />
          </svg>
          Your ID:
        </label>
        <input
          type="text"
          placeholder="Your registration number..."
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="StudentLogin-input"
        />
      </div>
      <div>
        <button onClick={handleLogin} className="StudentLogin-button">
          Log In
        </button>
      </div>
      <div>
        <Link to="/stsignup" className="StudentLogin-link">
          Don't have an account? Sign up now
        </Link>
      </div>
    </div>
  );
}

export default StudentLogin;
