// import Message from "./Message";//after importing now we can use it
import "./App.css"
import React, { useState } from "react"; //for us to create logic for which form is going to be displayed first
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HomePage from "./components/HomePage";
import TimeTable from "./components/TimeTable";
function App() {
 
  
{return (
    <>
     {/* This is the alias of BrowserRouter i.e. Router */}
     <Router>
                <Routes>
                    {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<HomePage />}
                    />
 
                    {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
                    <Route
                        path="/LoginPage"
                        element={<LoginPage />}
                    />
 
                    {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
                    <Route
                        path="/RegisterPage"
                        element={<RegisterPage />}
                    />
                     <Route
                        path="/TimeTable"
                        element={<TimeTable/>}
                    />
                    {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                    
                </Routes>
            </Router>
      
        </>
    );
  //   <HomePage></HomePage>
  //   <TimeTable></TimeTable>
  //     <button onClick={toggleForm}>Toggle </button>
  //     <>
  //     {currentForm ? (
  //       <LoginPage  />
  //     ) : (
  //       <RegisterPage  />
  //     )}</>
      
  //   </>
  // );
  //pass function toggle form to our current form
  //we want to have our message component in the div so we need to import it
}} /* //now we can use the component message just like any other html element */
export default App; //so it can be used somewhere else

