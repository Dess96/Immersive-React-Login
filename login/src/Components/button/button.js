import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {title} = this.props;
         return (
            <button>{title}</button>
        );
    }
}

export default Button;