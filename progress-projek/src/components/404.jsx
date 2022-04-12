import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import Img404 from "./assets/img/404-01.png";
import ImgCharacter from "./assets/img/monster-01.png";
import ImgEyes from "./assets/img/monster-eyes-01.png";
import ImgShadow from "./assets/img/shadows-01.png";
import ImgText from "./assets/img/text01.png";

class PageNotFound extends Component {
  render() {
    return (
      <div>
        <div id="container" class="pageNotFound">
          <ul id="scene" class="scene">
            <li class="layer" data-depth="1.00">
              <img src={Img404} alt="Img404" />
            </li>
            <li class="layer" data-depth="0.60">
            <img src={ImgShadow} alt="ImgShadow" />
            </li>
            <li class="layer" data-depth="0.20">
            <img src={ImgCharacter} alt="ImgCharacter" />
            </li>
            <li class="layer" data-depth="0.40">
            <img src={ImgText} alt="ImgText" />
            </li>
            <li class="layer" data-depth="0.10">
            <img src={ImgEyes} alt="ImgEyes" />
            </li>
          </ul>
          <h1>Our page not ready for you</h1>
          <Link to={"/dashboard"}>
          <a href="#" class="btn">
            Back to Dashboard
          </a>
          </Link>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
