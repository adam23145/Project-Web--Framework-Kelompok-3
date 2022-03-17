import React from "react";
import logo from '../images/2.png';
import adam from '../images/people.png';
import Banner from "./Banner";
import './Login.css';
import LoginRight from "./loginRight";


const Body = (props) =>{
    return(
        <div class="container">
        <div class="right">
            <Banner/>
          </div>
          <LoginRight/>
        </div>
    );
};

export default Body;