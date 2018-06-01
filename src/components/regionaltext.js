import React, { Component } from "react";
import "./regionaltext.css";
import email from "./email.png";
import phone from "./phone.png";
import location from "./location.png";

class RegisterText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { dataForFooter } = this.props;
    return (
      <div>
        <div className="get_involved_text">
          {" "}
          {dataForFooter[0]} local elections are just as important! Get
          involved:{" "}
        </div>

        <div className="textbox">
          <a href={dataForFooter[1]} target="_blank">
            <div className="Website"> {dataForFooter[1]}</div>
          </a>
          <div className="footer-address">
            <img src={location} className="Location" alt="location" />
            <div> {dataForFooter[2].line1}</div>
            <div>
              {dataForFooter[2].city + " "}
              {dataForFooter[2].state + " "}
              {dataForFooter[2].zip}
            </div>
          </div>

          <div>
            <img src={email} className="Email" alt="email" />{" "}
            {dataForFooter[3].emailAddress}
          </div>
          <div>
            <img src={phone} className="Phone" alt="phone" />{" "}
            {dataForFooter[3].officePhoneNumber}
          </div>
        </div>
      </div >
    );
  }
}

export default RegisterText;
