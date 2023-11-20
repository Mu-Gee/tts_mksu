import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faIdCard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../index.css"; 
function LecturerSignUp() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault(); 

   
    if (name.trim() !== '' && id.trim() !== '' && email.trim() !== '') {
      
      navigate('/student-schedule');
    } else {
      
      alert('Please fill in all fields to sign up.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', backgroundColor: '#f4f4f4', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Lecturer Signup</h1>
      <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <label htmlFor="name" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
            <FontAwesomeIcon icon={faUser} /> Your Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder= "Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="id" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
            <FontAwesomeIcon icon={faIdCard} /> Your ID:
          </label>
          <input
            type="text"
            id="id"
            placeholder="Lecturer ID..."
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ marginBottom: '8px', fontWeight: 'bold', color: '#333' }}>
            <FontAwesomeIcon icon={faEnvelope} /> Issued Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="School email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '10px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#3498db', color: 'white', padding: '10px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account? <Link to="/lclogin" style={{ color: '#3498db' }}>Log in</Link>
      </p>
    </div>
  );
}

export default LecturerSignUp;

