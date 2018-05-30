import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";

//Civic API key = AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo

class butt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfOfficeNameHouse: null
    };
  }
  takeInput=()=>{
    let addressvalue = document.getElementById("enterAddress").value;
    let cityvalue = document.getElementById("enterCity").value;
    let statevalue = document.getElementById("enterState").value;
    let percentTwenty = addressvalue + "%20" + cityvalue + "%20" + statevalue + "%20";
    document.getElementById("enterAddress").value="";
    document.getElementById("enterCity").value="";
    document.getElementById("enterState").value="";
    let dummyList = [];
    this.props.changeDataHere();
    axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo&address=' + percentTwenty + '&electionId=2000')
    .then(res => {
        res.data.contests.map(con =>{
            let off = con.office;
            if(con.candidates){
                con.candidates.map(member =>{
                    let nam = member.name;
                    let part = member.party;
                    let trips = {
                        office: off,
                        name: nam,
                        house: part
                    };
                    dummyList.push(trips);
                });
            };
        });
    }).then(
      this.props.changeDataHere(dummyList)
    );
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
