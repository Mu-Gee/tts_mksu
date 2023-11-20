import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Carousel, Box, Image } from 'grommet';
import './StudentSchedule.css';
import LTimetable from './LTimetable'; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link to="/clubs" onClick={toggleSidebar} className="sidebar-link">
          Clubs
        </Link>
        <Link to="/sports" onClick={toggleSidebar} className="sidebar-link">
          Sports
        </Link>
        <Link to="/events" onClick={toggleSidebar} className="sidebar-link">
          Events
        </Link>
        <Link to="/notifications" onClick={toggleSidebar} className="sidebar-link">
          Notifications
        </Link>
        <div className="sidebar-bottom">
          <Link to="/logout" onClick={toggleSidebar} className="sidebar-link">
            Log out
          </Link>
        </div>
      </div>
    );
  };

  const ClubCarousel = ({ title, images, text }) => {
    return (
      <Box height="medium" width="large" overflow="hidden">
        <Carousel>
          {images.map((image, index) => (
            <Image key={index} fit="cover" src={`${process.env.PUBLIC_URL}/assets/images/clubs/${image}`} />
          ))}
        </Carousel>
        <p>{text}</p>
      </Box>
    );
  };
  
  const SportsCarousel = ({ title, images, text }) => {
    return (
      <Box height="medium" width="large" overflow="hidden">
        <Carousel>
          {images.map((image, index) => (
            <Image key={index} fit="cover" src={`${process.env.PUBLIC_URL}/assets/images/sports/${image}`} />
          ))}
        </Carousel>
        <p>{text}</p>
      </Box>
    );
  };
  
  
  const LecturerSchedule = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
  
        <div className="content">
          <div className="header">
            <button className="dashboard-icon" onClick={toggleSidebar}>
              ☰
            </button>
            <h1>Hi, what would you like to see?</h1>
          </div>
  
          <Routes>
            <Route
              path="images/clubs"
              element={
                <ClubCarousel
                  title="Clubs"
                  images={[
                    "youthleadership.jpg",
                    "chess.jpg",
                    "art.jpg",
                    "innovation.jpg",
                    "drama.jpg",
                    "pamksu.jpg",
                    "peace.jpg",
                    "cyber.jpg",
                    "samu.jpg",
                  ]}
                  text="MKSU boasts of various clubs. Visit 'Clubs' to join one or see your schedule."
                />
              }
            />
  
            <Route
              path="images/sports"
              element={
                <SportsCarousel
                  title="Sports"
                  images={[
                    "basket.jpg",
                    "football.jpg",
                    "netball.jpg",
                    "rugby.jpg",
                    "run.jpg",
                    "tennis.jpg",
                  ]}
                  text="MKSU holds a number of tournaments annually. Visit 'Sports' to register for a sport or see your schedule."
                />
              }
            />
  
            <Route
              path="/timetable"
              element={<LTimetable />} 
            />
          </Routes>
  
          <div className="see-schedule-button-container">
            <Link to="/timetable">
              <button className="see-schedule-btn">See My Schedule</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  export default LecturerSchedule;
  