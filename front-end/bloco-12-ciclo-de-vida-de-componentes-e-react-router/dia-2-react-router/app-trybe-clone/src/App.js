import React, { Component } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Sidebar />
          <Content />
        </div>
      </Router>
    );
  }
}

export default App;
