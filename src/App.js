import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Add from './pages/add.js';
import Profile from './pages/profile.js';
import Task from './pages/task';
import Feed from './pages/feed';
import Work from './pages/work';
import Participant from './pages/participant';
import Header from './components/Header/Header';
import Upload from './pages/upload';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';
import Project from './pages/projects';


function App() {
 
  
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' component={Add} />
        <Route path='/profile' component={Profile} />
        <Route path='/task' component={Task} />
        <Route path='/upload' component={Upload} />
        <Route path='/feed' component={Feed} />
        <Route path='/work' component={Work} />
        <Route path='/participant' component={Participant} />
        <Route path='/projects' component={Project} />
      </Switch>
      </AnimatePresence>
      <Navbar/>
      
    </Router>
  );
}


export default App;
