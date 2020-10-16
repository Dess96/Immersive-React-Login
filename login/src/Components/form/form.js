import React, { Component } from 'react';
import './form.css';
import Cookies from 'js-cookie';
import State from '../state/state';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Form extends Component {

    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    async getData() {
        let user = document.getElementById('inp1');
        let pass = document.getElementById('inp2');
        let err = document.getElementById('error');
        let response = await fetch(`https://bootcamp-users.herokuapp.com/?email=${user.value}&password=${pass.value}`);
        let data = await response.json();
        if(data.status === 200) {
            Cookies.set('token', data.user.token);
        } else {
            err.textContent = 'Oops! Login error :(';
        }
    }

    render() {
        return (
            <div className="box">
                <h1>Login</h1>
                <div className="inputDiv">
                    Username<input id="inp1" type="text" placeholder="Username"></input>
                    Password<input id="inp2" type="text" placeholder="Password"></input>
                </div>
                <button onClick={this.getData}>
                <Link to="/home" style={{textDecoration: 'none', color: '#ffffff'}}>Login</Link>
                </button>
                <span id="error"></span>
            </div>
        );
    }
}

export default Form;