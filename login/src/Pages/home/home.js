import React, { Component } from "react";
import "./home.css";
import Cookies from 'js-cookie';
import Messsage from '../../Components/message/message';

import {
  BrowserRouter as Router,
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
          <Messsage />
          
        </div>
    );
}

export default Home;
