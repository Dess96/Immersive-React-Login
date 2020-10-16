import React, { Component } from 'react';
import './input.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {type} = this.props;
        let {placeholder} = this.props;
         return (
            <input type={type} placeholder={placeholder}></input>
        );
    }
}

export default Input;