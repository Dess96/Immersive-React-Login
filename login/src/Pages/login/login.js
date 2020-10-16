import React, { Component } from 'react';
import './login.css';
import Form from '../../Components/form/form';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
       
                <Form /> 
         
            </div>
        );
    }
}

export default Login;