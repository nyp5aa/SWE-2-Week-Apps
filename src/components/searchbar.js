import React, { Component } from "react";
import axios from "axios";

//Civic API key = AIzaSyBcEH-TahbG4-yX_A-BjZ7lp_8XZdvbxGo

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  render() {
    return (
      <div>
        <div>
          <input
            id="enterAddress"
            type="text"
            placeholder="Enter Address"
            size="60"
          />
        </div>
        <input id="enterCity" type="text" placeholder="Enter City" size="60" />
        <div />
        <div>
          <input
            id="enterState"
            type="text"
            placeholder="Enter State"
            size="60"
          />
        </div>
      </div>
    );
  }

}

export default Searchbar;
