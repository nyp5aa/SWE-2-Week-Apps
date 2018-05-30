import React, { Component } from 'react';
import './App.css';

class Results extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { candidate } = this.props;
        const { office, name, party, candidateUrl, email, gotFacebook, gotTwitter } = candidate;
        return (
            <div>
                <div>
                    {name}
                </div>
                <div>
                    {office}
                </div>
                <div>
                    {party}
                </div>
                <div>
                    {candidateUrl}
                </div>
                <div>
                    {email}
                </div>
                <div>
                    {gotFacebook}
                </div>
                <div>
                    {gotTwitter}
                </div>
            </div>
        );
    }
}

export default Results