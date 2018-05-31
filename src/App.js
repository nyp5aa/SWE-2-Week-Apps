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
      }
    }
    let returnThis = [
      candidates.slice(0, senateEndIndex),
      candidates.slice(senateEndIndex, candidates.length)
    ];
    return returnThis;
  }
  getProperName(congress) {
    let returnSenate = "";
    let returnHouse = "";
    for (let i = 0; i < this.state.allData.length; i++) {
      if (this.state.allData[i].office.includes("Senat")) {
        returnSenate = this.state.allData[i].office
      }
      else {
        returnHouse = this.state.allData[i].office
      }
    }
    if (congress === "senate") {
      return returnSenate;
    }
    else {
      return returnHouse;
    }
  }
  render() {
    if (this.state.dataHere) {
      const candidates = this.state.allData.map(person => {
        return <Results candidate={person} />;
      });
      let congress = this.splitSenateAndHouse(candidates);
      let properSenateName = this.getProperName("senate");
      let properHouseName = this.getProperName("house");
      return (
        <div>
          <RegisterText dataForHeader={this.state.headerData} />
          <div className="officeText">
            Senate: {properSenateName} election
          </div>
          {congress[0].length != 0 && <div className="senate">
            {congress[0]}
          </div>}
          <div className="spacer" />
          <div className="officeText">
            House of Representative: {properHouseName} election
          </div>
          {congress[1].length != 0 && <div className="house">
            {congress[1]}
          </div>
          }
          <div className="spacer" />
          <RegionalText dataForFooter={this.state.footerData} />
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
            <div className="search">{<Searchbar changeDataHere={this.changeDataHere} />}</div>
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
