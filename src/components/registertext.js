import React, { Component } from "react";
import "./registertext.css";
import { ButtonToolbar, Button } from "react-bootstrap";

class RegisterText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { dataForHeader } = this.props;
        return (
            <div className="headerForResults">
                Are you registerd to vote in {" "}
                {dataForHeader[0]},{" "}
                {dataForHeader[1]}? If not,{" "}
                <ButtonToolbar>
                    <Button
                        id="registerHereAddress"
                        bsStyle="success"
                        bsSize="large"
                        href={dataForHeader[2]}
                    >
                        REGISTER HERE
                    </Button>
                </ButtonToolbar>
            </div >
        );
    }
}

export default RegisterText;