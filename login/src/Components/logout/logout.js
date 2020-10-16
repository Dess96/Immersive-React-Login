import './logout.css';
import Cookies from 'js-cookie';
import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

class Logout extends Component {
    constructor(props) {
        super(props);
        this.cleanData = this.cleanData.bind(this);
    }

    cleanData() {
        Cookies.remove('token');
    }

    render() {
         return (
            <button onClick={this.cleanData}><Link to="/" style={{textDecoration: 'none', color: '#ffffff'}}>Logout</Link></button>
        );
    }
}

export default Logout;