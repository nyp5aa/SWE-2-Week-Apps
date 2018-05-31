import React, { Component } from "react";
import "./registertext.css";

class RegisterText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dataForHeader } = this.props;
        return (
            <div className="Header">
                Are you registerd to vote in {" "}
                {dataForHeader[0]},{" "}
                {dataForHeader[1]}? If not,{" "}
                {dataForHeader[2]}
            </div >
        );
    }
}

export default RegisterText;