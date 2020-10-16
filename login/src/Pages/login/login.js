import React, { Component } from "react";
import "./login.css";
import Form from "../../Components/form/form";
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    useHistory
  } from "react-router-dom";

function Login() {
    const history = useHistory();
    const getData = async () => {
        let user = document.getElementById('inp1');
        let pass = document.getElementById('inp2');
        let err = document.getElementById('error');
        let response = await fetch(`https://bootcamp-users.herokuapp.com/?email=${user.value}&password=${pass.value}`);
        let data = await response.json();
        if(data.status === 200) {
            Cookies.set('token', data.user.token);
            history.push('/home');
        } else {
            err.textContent = 'Oops! Login error :(';
        }
    }

  return (
    <div className="container">
      <div className="box">
                <h1>Login</h1>
                <div className="inputDiv">
                    Username<input id="inp1" type="text" placeholder="Username"></input>
                    Password<input id="inp2" type="text" placeholder="Password"></input>
                </div>
                <button onClick={getData}>
                Login
                </button>
                <span id="error"></span>
            </div>
    </div>
  );
}

export default Login;
