import React, { Component } from "react";
import "./regionaltext.css";

class RegisterText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dataForFooter } = this.props;
        console.log(dataForFooter);
        return (
            <div>
                <div> Your local {dataForFooter[0]} elections are important! Get involved: </div>
                <div className="textbox">
                    <div className="footer-address">
                        <div>{dataForFooter[2].line1}</div>
                        <div>{dataForFooter[2].city + " "}{dataForFooter[2].state + " "}{dataForFooter[2].zip}</div>
                    </div>
                    <div>Website: {dataForFooter[1]}</div>
                    <div>Email: {dataForFooter[3].emailAddress}</div>
                    <div>Phone Number: {dataForFooter[3].officePhoneNumber}</div>
                </div>
            </div>
        );
    }
}

export default RegisterText;
