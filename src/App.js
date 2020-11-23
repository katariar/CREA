import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Challenges from './Challenges.js';
import Hero from './Hero.js';
import Navbar from './components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

    </Router>
  );
}


export default App;
