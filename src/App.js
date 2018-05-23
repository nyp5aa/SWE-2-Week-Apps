import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <Searchbar />
    );
  }
}

export default App;
