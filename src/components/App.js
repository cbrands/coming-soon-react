import React from 'react';
import Attribution from './Attribution';
import Social from './Social';
import EmailForm from './EmailForm';
import './App.css';
import logo from '../images/logo.svg';
import illustration from '../images/illustration-dashboard.png';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo" />
      <h1>We are launching <span className="bold">soon!</span></h1>
      <p className="text">Subscribe and get notified</p>
      <EmailForm/>
      <img className="illustration" src={illustration} alt="Illustration dashboard" />
      <Social/>
      <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
      <Attribution/>
    </div>
  );
}

export default App;
