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
    const { office, name, party, candidateUrl, email } = candidate;

    let affiliation_color = this.colorizing_parties(party);

    return (
      <div className="textbox" id="border">
        <div className="officeText">{office}</div>

        {candidate.facebook && (
          <a href={candidate.facebook} target="_blank">
            <img
              src={facebooklogo}
              className="facebook-logo"
              alt="facebook profile"
            />{" "}
          </a>
        )}
        {candidate.twitter && (
          <a href={candidate.twitter} target="_blank">
            <img
              src={twitterlogo}
              className="twitter-logo"
              alt="twitter profile"
            />{" "}
          </a>
        )}

        <div className="nameText">{name}</div>

        <div className={affiliation_color}>{party}</div>
        <div className="emailText">{email}</div>
        <a href={candidateUrl} target="_blank">
          <div className="websiteText" href={candidateUrl} target="_blank">
            {candidateUrl}
          </div>
        </a>
      </div>
    );
  }
}

export default Results;
