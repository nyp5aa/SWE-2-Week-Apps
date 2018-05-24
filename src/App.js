import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="Background">
        <div>
          <div className="Header">
            <h1 id="border">Inform</h1>
          </div>

          <Searchbar />
          <Button />
          <div className="Footer" />
        </div>
      </div>
    );
  }
}

export default App;
