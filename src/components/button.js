import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

class butt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  takeInput = () => {
    let addressvalue = document.getElementById("enterAddress").value;
    let cityvalue = document.getElementById("enterCity").value;
    let statevalue = document.getElementById("enterState").value;
    let percentTwenty =
      addressvalue + "%20" + cityvalue + "%20" + statevalue + "%20";
    document.getElementById("enterAddress").value = "";
    document.getElementById("enterCity").value = "";
    document.getElementById("enterState").value = "";
    axios
      .get(
        "https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo&address=" +
          percentTwenty +
          "&electionId=2000"
      )
      .then(res => {
        console.log(res.data.contests);
        this.setState({
          data: res.data.contests
        });
      });
  };
  postCandidates() {
    if (this.state.data) {
      let i = 0;
      for (i = 0; i < this.state.data.length; i++) {
        this.state.data[i].type;
      }
    }
  }
  render() {
    return (
      <div className="buttonDiv">
        <ButtonToolbar>
          <Button
            id="but"
            bsStyle="success"
            bsSize="large"
            onClick={this.takeInput}
          >
            GO
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default butt;
