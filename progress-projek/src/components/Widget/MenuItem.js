import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import changeIconMenu from "../js/changeIconMenu";

const MenuItem = (props) => {
  const { name, id, imgSrc, to, exact } = props;
  const [expand, setExpand] = useState(false);

  // useEffect(() => {
  //   changeIconMenu()
  // }, []);
  return (
    <>
      {/* <li id="dashboard" className="navItem">
        <a href="/#">
          <div className="frame-ico">
            <img src={require("../assets/ico/DashboardIcoW.png")} alt="item1" id="item1" />
          </div>
          <span className="link_name">Dashboard</span>
        </a>
        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="/#">
              Dashboard
            </a>
          </li>
        </ul>
      </li> */}
      <li id={id} className="navItem">
        <a>
          <div className="frame-ico">
            <img src={imgSrc} alt="item" id={id} />
          </div>
        </a>
        <span className="link_name">Dashboard</span>

        <ul className="sub-menu blank">
          <li>
            <a className="link_name" href="/#">
              {name}
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default MenuItem;
