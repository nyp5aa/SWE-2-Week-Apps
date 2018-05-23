import React, { Component } from 'react';
import axios from 'axios';

//Civic API key = AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    takeInput=()=>{
        let s = document.getElementById("searchb").value;
        s = s.replace(/\s+/g, '%20').toLowerCase();
        document.getElementById("searchb").value="";
        axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo&address=' + s + '&electionId=2000')
        .then(res => {
          this.setState({
              data: res.data.contests
            });
        })
    }
    render(){
        return (
            <div>
                <input id="searchb" type="text" placeholder="Enter City" size="75"/>
                <button onClick={this.takeInput}> GO! </button>
                {console.log(this.state.data)}
            </div>
        );
    }
}

export default Searchbar