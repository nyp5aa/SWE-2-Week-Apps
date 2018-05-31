import React, { Component } from "react";
import "./App.css";
import "./Results.css";
import facebooklogo from "./facebooklogo.png";
import twitterlogo from "./twitterlogo.png";

let list = [];

class Results extends Component {
  constructor(props) {
    super(props);
  }

  // making political affiliation have colors
  colorizing_parties(party) {
    let affiliation = "gray";
    if (party.includes("Democratic")) {
      affiliation = "blue";
    } else if (party.includes("Republican")) {
      affiliation = "red";
    } else if (party.includes("Green")) {
      affiliation = "green";
    } else if (party.includes("Libertarian")) {
      affiliation = "yellow";
    }
    return affiliation;
  }

  render() {
    const { candidate } = this.props;
    const {
      office,
      name,
      party,
      candidateUrl,
      email
    } = candidate;

    let affiliation_color = this.colorizing_parties(party);

    return (
      <div className="spacer">
        <div className="textbox" id="border">
          <div className="officeText">{office}</div>
          <div className="nameText">{name}</div>
          <div className={affiliation_color}>{party}</div>
          <div className="websiteText">{candidateUrl}</div>
          <div className="emailText">{email}</div>
          {candidate.facebook && <a href={candidate.facebook} target="_blank"><img src={facebooklogo} className="social-media-logo" alt="facebook profile" /> </a>}
          {candidate.twitter && <a href={candidate.twitter} target="_blank"><img src={twitterlogo} className="social-media-logo" alt="twitter profile" /> </a>}
        </div>
      </div>
    );
  }
}

export default Results;
