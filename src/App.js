import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import Results from "./Results";
import axios from "axios";
import logo from "./informlogo.png";
import RegisterText from "./components/registertext";

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
  splitSenateAndHouse(candidates) {
    let senateEndIndex = 0;
    for (let i = 0; i < this.state.allData.length; i++) {
      if (this.state.allData[i].office.includes("Senate")) {
        senateEndIndex++;
      }
    }
    let returnThis = [candidates.slice(0, senateEndIndex), candidates.slice(senateEndIndex, candidates.length)];
    return returnThis;
  }
  render() {
    if (this.state.dataHere) {
      const candidates = this.state.allData.map(person => {
        return <Results candidate={person} />;
      });
      let congress = this.splitSenateAndHouse(candidates);
      return (
        < div >
          <RegisterText dataForHeader={this.state.headerData} />
          {congress[0].length != 0 && <div className="senate">
            SENATE
            {congress[0]}
          </div>}
          {congress[1].length != 0 && <div className="house">
            HOUSE
            {congress[1]}
          </div>}
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
