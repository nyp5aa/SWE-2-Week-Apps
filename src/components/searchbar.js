import React, { Component } from "react";
import axios from "axios";

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
            size="30"
          />
        </div>
        <input
          id="enterCity"
          type="text"
          placeholder="Enter City"
          size="30"
        />
        <div />
        <div>
          <input
            id="enterState"
            type="text"
            placeholder="Enter State"
            size="30"
          />
        </div>
      </div>
    );
  }
}

export default Searchbar;
