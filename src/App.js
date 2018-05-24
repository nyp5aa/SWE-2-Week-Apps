import React, { Component } from 'react';
import './App.css';
import Searchbar from './components/searchbar';
import Button from './components/button';
import axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Button />
      </div>
    );
  }
}

export default App;
