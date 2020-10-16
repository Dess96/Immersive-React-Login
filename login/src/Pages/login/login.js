import React, { Component } from 'react';
import './login.css';
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    async getData() {
        let user = document.getElementById('inp1');
        let pass = document.getElementById('inp2');
        let response = await fetch(`https://bootcamp-users.herokuapp.com/?email=${user.value}&password=${pass.value}`);
        let data = await response.json();
        if(data.status == 200) {
            Cookies.set('token', data.user.token);
        }
    }

    render() {
        return (
            <div className="container">
                <input id="inp1" type="text" placeholder="Username"></input>
                <input id="inp2" type="text" placeholder="Password"></input>
                <button onClick={this.getData}>
                <Link to="/home">Login</Link>
                </button>
            </div>
        );
    }
}

export default Login;