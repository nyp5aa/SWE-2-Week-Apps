import React, { Component } from 'react';
import axios from 'axios';

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            persons: [],
            address: ""
        };
    }
    takeInput=()=>{
        this.setState({
            address: document.getElementById("searchb").value
        });
        document.getElementById("searchb").value="";
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const x = res.data;
          this.setState({persons: x });
        })
        document.getElementById("searchb").value="";
        console.log(this.state.address);
    }
    render(){
        return (
            <div>
                <div>
                    <input id="searchb" type="text" placeholder="Enter City" size="75"/>
                    <button onClick={this.takeInput}> GO! </button>
                </div>
                <div>
                    <ul>
                        { this.state.persons.map(person => <li>{person.name}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Searchbar