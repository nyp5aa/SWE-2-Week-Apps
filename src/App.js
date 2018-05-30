import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import Results from "./Results";
import axios from "axios";
import logo from "./informlogo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHere: false,
      allData: []
    };
  }
  changeDataHere = (dummyList) => {
    this.setState({
      dataHere: true,
      allData: dummyList
    });
  };
  render() {
    const candidates = this.state.allData.map(person => {
      return person;
    });
    if (this.state.dataHere) {
      const candidates = this.state.allData.map(person => {
        return <Results candidate={person} />;
      });
      return (
        < div >
          {candidates}
        </div >
      );
    }
    return (
      <div>
        <div className="Footer" />
        <div className="Background" id="border">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <h1 id="bborder">Enter in your address to find local elections</h1>
          <div className="bigdiv">
            <div className="search">{<Searchbar />}</div>
            <div className="poorlynamedvariable">
              <Button changeDataHere={this.changeDataHere} />
            </div>
          </div>
        </div>
        <div className="Footer" />
      </div>
    );
  }
}

export default App;
