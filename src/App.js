import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
import Button from "./components/button";
import Results from "./Results";
import axios from "axios";
import logo from "./informlogo.png";
import RegisterText from "./components/registertext";
import RegionalText from "./components/regionaltext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHere: false,
      allData: [],
      headerData: [],
      footerData: []
    };
  }
  changeDataHere = (dummyList, forHeader, forFooter) => {
    this.setState({
      dataHere: true,
      allData: dummyList,
      headerData: forHeader,
      footerData: forFooter
    });
  };
  splitSenateAndHouse(candidates) {
    let senateEndIndex = 0;
    for (let i = 0; i < this.state.allData.length; i++) {
      if (this.state.allData[i].office.includes("Senat")) {
        senateEndIndex++;
        console.log(this.state.allData[i].office);
        console.log(this.state.allData[i].office.includes("Senate"));
      }
    }
    console.log(senateEndIndex);
    let returnThis = [
      candidates.slice(0, senateEndIndex),
      candidates.slice(senateEndIndex, candidates.length)
    ];
    console.log(returnThis);
    return returnThis;
  }
  render() {
    if (this.state.dataHere) {
      const candidates = this.state.allData.map(person => {
        return <Results candidate={person} />;
      });
      let congress = this.splitSenateAndHouse(candidates);
      return (
        <div>
          <RegisterText dataForHeader={this.state.headerData} />
          {congress[0].length != 0 && (
            <div className="senate">
              Senate: On the Ballot
              {congress[0]}
            </div>
          )}
          {congress[1].length != 0 && (
            <div className="house">
              <div className="officeText">
                House of Representative: On the Ballot
              </div>
              {congress[1]}
            </div>
          )}
        </div>
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
