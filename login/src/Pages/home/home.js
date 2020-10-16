import React, { Component } from "react";
import "./home.css";
import Cookies from 'js-cookie';
import Logout from '../../Components/logout/logout';

import {
  BrowserRouter as Router,
  Link,
  useHistory
} from "react-router-dom";


function Home() {
    const history = useHistory();
    const cook = Cookies.get('token');
    if(!cook) {
      history.push("/");
    }
    console.log(cook); 
    
    return (
        <div>
          <Logout />
        </div>
    );
}

export default Home;
