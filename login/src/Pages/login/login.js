import React, { Component } from 'react';
import './login.css';
import Form from '../../Components/form/form';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
          status: null,
        };
    }

    async getData() {
        let response = await fetch('https://bootcamp-users.herokuapp.com/?email=dalfaro@gmail.com&password=qwerty');
        let data = await response.json();
        this.setState({status: data.status})
    }

    render() {
        return (
            <div className="container">
                <Form />
                <button onClick={this.getData}>
                <Link to="/home">Login</Link>
                </button>
            </div>
        );
    }
}

export default Login;