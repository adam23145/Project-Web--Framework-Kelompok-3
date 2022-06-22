import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../../config/firebase-config";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../assets/ico/LogoMin.png";
import Dashboard from "../pages/Dashboard";

import MenuItem from "./MenuItem";

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    id: "dashboard",
    to: "/",
    imgSrc: require("../assets/ico/DashboardIcoW.png"),
  },
  {
    name: "Class",
    id: "courses",
    to: `/class`,
    imgSrc: require("../assets/ico/School.png"),
  },
  { name: "Teachers", id: "teachers", to: `/teachers`, imgSrc: require("../assets/ico/people.png") },
  {
    name: "Quiz",
    id: "quiz",
    to: `/quiz`,
    imgSrc: require("../assets/ico/Quiz.png"),
  },
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    props.onCollapses(inactive);
  }, [inactive]);

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  // useEffect(() => {
  //   let menuItems = document.querySelectorAll(".menu-item");
  //   menuItems.forEach((el) => {
  //     el.addEventListener("click", (e) => {
  //       const next = el.nextElementSibling;
  //       menuItems.forEach((el) => el.classList.remove("active"));
  //       el.classList.toggle("active");
  //       console.log(next);
  //       if (next !== null) {
  //         next.classList.toggle("active");
  //       }
  //     });
  //   });
  // }, []);

  return (
    <div className={`sidebar ${inactive ? "close" : ""}`}>
      <div className="logo-details">
        <img src={logo} alt="logo" />
        <span className="logo_name">scholLine.id</span>
      </div>
      <div className="menu" onClick={() => setInactive(!inactive)}>
        <i className="bx bx-menu menu-collapse"></i>
      </div>
      <ul className="nav-links" id="main">
        {menuItems.map((menuItem, index) => (console.log(menuItem), (<MenuItem key={index} name={menuItem.name} id={menuItem.id} exact={menuItem.exact} to={menuItem.to} imgSrc={menuItem.imgSrc} />)))}
        <li>
          <div className="profile-details">
            <div className="profile-content">
              <img src={require("../assets/ico/icoDashboard/Wallpaper.png")} className="cust-avatar" />
            </div>
            <div className="name-job">
              <div className="profile_name">Kelompok 3</div>
              <div className="job">Mail@mail.com</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>

      {/* <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
          <h5>Rizwan Khan</h5>
          <p>rizwankhan@gmail.com</p>
        </div>
      </div> */}
    </div>
  );
};

export default SideMenu;
