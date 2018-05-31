import React, { Component } from "react";
import "./App.css";
import "./Results.css";

let list = [];

class Results extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { candidate } = this.props;
    const {
      office,
      name,
      party,
      candidateUrl,
      email,
      gotFacebook,
      gotTwitter
    } = candidate;

    // making political affiliation have colors
    let affiliation = "gray";
    if(party === "Democratic"){
      affiliation = "blue"
    }
    else if(party === "Republican") {
      affiliation = "red"
    }
    else if(party === "Green") {
      affiliation = "green"
    }

    return (
      <div className="spacer">
        <div className="textbox" id="border">
          <div className="officeText">{office}</div>
          <div className="nameText">{name}</div>
          <div className={affiliation}>{party}</div>
          <div className="websiteText">{candidateUrl}</div>
          <div className="emailText">{email}</div>
          <div className="facebookText">{gotFacebook}</div>
          <div className="twitterText">{gotTwitter}</div>
        </div>
      </div>
    );
  }
}

export default Results;
