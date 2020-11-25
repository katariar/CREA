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
import Task from './pages/task';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/profile' component={Profile} />
        <Route path='/task' component={Task} />
      </Switch>
      <Navbar/>
    </Router>
  );
}


export default App;
