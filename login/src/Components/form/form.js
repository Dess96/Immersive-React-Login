import React, { Component } from 'react';
import './form.css';
import Input from '../input/input';
import Button from '../button/button';

class Form extends Component {
    render() {
        return (
            <form className="box">
                <h1>Login</h1>
                <Input type={'text'} placeholder={'Username'}/>
                <Input type={'password'} placeholder={'Password'}/>
                <Button title={'Login'}/>
            </form>
        );
    }
}

export default Form;