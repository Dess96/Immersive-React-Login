import React, { Component } from 'react';
import './form.css';
import Input from '../input/input';

class Form extends Component {

    constructor(props) {
        super(props);
        this.cookieSet = this.cookieSet.bind(this);
    }

    async cookieSet() {
        let user = document.getElementById('inp1');
        let pass = document.getElementById('inp2');
        
    }

    render() {
        return (
            <form className="box">
                <h1>Login</h1>
                <input id="inp1" type="text" placeholder="Username"></input>
                <input id="inp2" type="text" placeholder="Password"></input>
            </form>
        );
    }
}

export default Form;