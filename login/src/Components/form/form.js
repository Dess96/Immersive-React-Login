import React, { Component } from 'react';
import './form.css';
import Input from '../input/input';

class Form extends Component {
    render() {
        return (
            <form className="box">
                <h1>Login</h1>
                <Input type={'text'} placeholder={'Username'}/>
                <Input type={'password'} placeholder={'Password'}/>
            </form>
        );
    }
}

export default Form;