import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./searchbar";
import { ButtonToolbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

class butt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
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
        console.log(dummyList);
        console.log(this.state.listOfOfficeNameHouse);
    })
    this.setState({
        listOfOfficeNameHouse: dummyList
    });
    console.log(this.state.listOfOfficeNameHouse);
}
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
        {console.log(this.state.listOfOfficeNameHouse)}
        {/*<ButtonToolbar>
          <Link to='/People'>*/}
            <Button
              id="but"
              bsStyle="success"
              bsSize="large"
              onClick={this.takeInput}
            >
              GO
            </Button>
           {/*</Link>
        </ButtonToolbar>*/}
      </div>
    );
  }
}

export default butt;
