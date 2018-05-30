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
      allData: [],
      headerData: []
    };
  }
  changeDataHere = (dummyList, forHeader) => {
    this.setState({
      dataHere: true,
      allData: dummyList,
      headerData: forHeader
    });
  };
  render() {
    if (this.state.dataHere) {
      const candidates = this.state.allData.map(person => {
        return <Results candidate={person} />;
      });
      return (
        < div >
          {this.state.headerData[0]}
          {this.state.headerData[1]}
          {this.state.headerData[2]}
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
      </div>
    );
  }
}

export default App;
