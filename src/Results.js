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
        const { office, name, party, candidateUrl, email, gotFacebook, gotTwitter } = candidate;
        return (
            <div className="Footer2">
                <div className="Background2" id="border">
                    <div className="officeText">{office}</div>
                    <div className="nameText">{name}</div>
                    <div className="partyText">{party}</div>
                </div>
            </div>
        );
    }
}

export default Results;
