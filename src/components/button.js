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
  takeInput = () => {
    let addressvalue = document.getElementById("enterAddress").value;
    let cityvalue = document.getElementById("enterCity").value;
    let statevalue = document.getElementById("enterState").value;
    let percentTwenty =
      addressvalue + " " + cityvalue + " " + statevalue + " ";
    document.getElementById("enterAddress").value = "";
    document.getElementById("enterCity").value = "";
    document.getElementById("enterState").value = "";
    let dummyList = [];
    const url = 'https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo&address=' + percentTwenty + '&electionId=2000';
    axios.get(url)
      .then(res => {
        let forHeader = [];
        forHeader.push(res.data.state[0].local_jurisdiction.name);
        forHeader.push(res.data.state[0].name);
        forHeader.push(res.data.state[0].electionAdministrationBody.electionRegistrationUrl);
        res.data.contests.map(con => {
          let tempOffice = con.office;
          if (con.candidates && con.type === "General" && con.level[0] === "country") {
            con.candidates.map(member => {
              let tempName = member.name;
              let tempParty = member.party;
              let tempCandidateUrl = member.candidateUrl;
              let tempEmail = member.email;
              let hasFacebook = false;
              let hasTwitter = false;
              if (member.channels != undefined) {
                const tempSocialMedia = member.channels.map(channel => {
                  let media = [];
                  if (channel.type === "Facebook") {
                    media.push(channel.type);
                    media.push(channel.id)
                    hasFacebook = true;
                    return media;
                  }
                  if (channel.type === "Twitter") {
                    media.push(channel.type);
                    media.push(channel.id)
                    hasTwitter = true;
                    return media;
                  }
                });
                if (tempSocialMedia.length === 2) {
                  let eachCandidate = {
                    office: tempOffice,
                    name: tempName,
                    party: tempParty,
                    candidateUrl: tempCandidateUrl,
                    email: tempEmail,
                    gotFacebook: hasFacebook,
                    facebook: tempSocialMedia[0],
                    gotTwitter: hasTwitter,
                    twitter: tempSocialMedia[1]
                  };
                  dummyList.push(eachCandidate);
                }
                else {
                  if (hasFacebook) {
                    let eachCandidate = {
                      office: tempOffice,
                      name: tempName,
                      party: tempParty,
                      candidateUrl: tempCandidateUrl,
                      email: tempEmail,
                      gotFacebook: hasFacebook,
                      facebook: tempSocialMedia[0],
                      gotTwitter: hasTwitter
                    };
                    dummyList.push(eachCandidate);
                  }
                  else {
                    let eachCandidate = {
                      office: tempOffice,
                      name: tempName,
                      party: tempParty,
                      candidateUrl: tempCandidateUrl,
                      email: tempEmail,
                      gotFacebook: hasFacebook,
                      gotTwitter: hasTwitter,
                      twitter: tempSocialMedia[0]
                    };
                    dummyList.push(eachCandidate);
                  }
                }
              }
              else {
                let eachCandidate = {
                  office: tempOffice,
                  name: tempName,
                  party: tempParty,
                  candidateUrl: tempCandidateUrl,
                  email: tempEmail,
                  gotFacebook: hasFacebook,
                  gotTwitter: hasTwitter
                };
                dummyList.push(eachCandidate);
              }
            });
          };
        });
        this.props.changeDataHere(dummyList, forHeader);
      });
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
