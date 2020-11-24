import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Challenges from './Challenges.js';
import Hero from './Hero.js';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Add from './pages/add.js';
import Profile from './pages/profile.js';

function App() {
  return (
    <Router>
       <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' component={Add} />
        <Route path='/' component={Profile} />
      </Switch>
     
    </Router>
  );
}


export default App;
