import React, { Component } from 'react';
import './App.css';

let list = [];

class Results extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const { candidate } = this.props;
        const { office, name, house } = candidate;
        return(
            <div>
                <div>
                    { name }
                </div>
                <div>
                    { house }
                </div>
                <div>
                    { office }
                </div>
            </div>
        );
    }
}

export default Results