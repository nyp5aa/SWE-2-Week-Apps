import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;
