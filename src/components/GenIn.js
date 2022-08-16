import React, { Component } from "react";

class GenIn extends Component {
    render() {
        const {name, email, phone, address} = this.props;

        return (
            <div id="gen-info">
                <h1 id="name">{name.text}</h1>
                <h1 id="other-info">{email.text + " | " + phone.text + " | " + address.text}</h1>
            </div>
        );
    }
}

export default GenIn;