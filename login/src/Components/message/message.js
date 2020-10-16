import React, { Component } from 'react';
import './message.css';
import Logout from '../logout/logout';

class Message extends Component {
    render() {
        return (
            <div className="containerM">
                <div className="box">
                    <h1>Welcome!</h1>
                    <span>If you're seeing this, you logged in successfully</span>  
                    <div> 
                        <Logout />   
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;