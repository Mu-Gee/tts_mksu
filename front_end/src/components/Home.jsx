import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  

const logoStyle = {
  width: '500px',
  height: '91px',
};

const buttonContainerStyle = {
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontFamily: "'Barlow Condensed', sans-serif",
};

const linkStyle = {
  margin: '10px 0',
  fontSize: '24px',
  textDecoration: 'none !important', 

  fontFamily: "'Poppins', sans-serif",
};

const buttonStyle = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: 'darkblue',
  color: 'yellow',
  fontSize: '18px',
  textDecoration: 'none',
};

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      {
        <img
          className="logo"
          src="src/logo.png" 
          alt="Logo"
          style={{ ...logoStyle, position: 'absolute', top: '20px', left: '20px' }}
        />
      }
      
      <div style={buttonContainerStyle}>
        <h1 style={{ textAlign: 'center', color: 'black', marginBottom: '20px' , fontSize:'36px'}}>Welcome,</h1>
        <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '30px', fontSize: '36px' }}>Login to check your schedule</h2>
        <div style={linkStyle} className="center-container">
          <button style={buttonStyle}>
            <Link to="/stlogin">I am a student</Link>
          </button>
        </div>
        <div style={linkStyle} className="center-container">
          <button style={buttonStyle}>
            <Link to="/lclogin">I am a lecturer</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
