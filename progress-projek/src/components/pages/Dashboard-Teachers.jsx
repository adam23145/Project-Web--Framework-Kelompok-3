import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";

class Dashboard_Teachers extends Component {
  componentDidMount() {
    SideBar();
    Searchbar();
    changeIconMenu();
  }
  render() {
    return <App />;
  }
}

function App() {
  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="teachers">
          <li id="dashboard" className="navItem">
            <Link to={"/dashboard"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("../assets/ico/DashboardIco.png")} alt="item1" id="item1" />
                </div>
                <span className="link_name">Dashboard</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li id="courses" className="navItem">
            <Link to={"/courses"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("../assets/ico/School.png")} alt="item2" id="item2" />
                </div>
                <span className="link_name">Courses</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Courses
                </a>
              </li>
            </ul>
          </li>
          <li id="schedule" className="navItem">
            <Link to={"/schedule"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("../assets/ico/Schedule.png")} alt="item3" id="item3" />
                </div>
                <span className="link_name">Schedule</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Schedule
                </a>
              </li>
            </ul>
          </li>
          <li id="teachers" className="navItem active">
            <Link to={"/teachers"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("../assets/ico/peopleW.png")} alt="item4" id="item4" />
                </div>
                <span className="link_name">All Teachers</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  All Teachers
                </a>
              </li>
            </ul>
          </li>
          <li id="quiz" className="navItem">
            <Link to={"/quiz"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("../assets/ico/Quiz.png")} alt="item5" id="item5" />
                </div>
                <span className="link_name">Quiz</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Quiz
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={require("../assets/ico/icoDashboard/Wallpaper.png")} alt="profileImg" />
              </div>
              <div className="name-job">
                <div className="profile_name">Kelompok 3</div>
                <div className="job">Student</div>
              </div>
              <i className="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
        <div className="menu">
          <i className="bx bx-menu menu-collapse"></i>
        </div>
      </div>
      <section className="home-section">
        <div className="home-navbar">
          <nav className="navbar-custom navbar-expand-lg navbar-light bg-white  shadowNavbar">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form action="https:google.com/search" method="GET" className="search-box">
                  <input type="text" name="q" className="search-txt" placeholder="Search" />
                  <button type="submit" className="search-btn border border-0">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex align-items-center">
                    <div id="clockDisplay" className="me-2"></div>
                    <span className="seperatorVertikal me-3"></span>
                  </li>
                  <li className="nav-item dropdown d-flex align-items-center" id="chat">
                    <a className="nav-link dropdown-toggle chat" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="iconChat">
                        <img src={require("../assets/ico/IconChat.png")} id="iconChat" />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                  </li>
                  <li className="nav-item dropdown d-flex align-items-center notif" id="notification">
                    <a className="nav-link dropdown-toggle notif" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="iconNotification">
                        <img src={require("../assets/ico/IconNotif.png")} id="iconNotif" />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                  </li>
                  <li className="nav-item dropdown frameProfile">
                    <a className="nav-link dropdown-toggle nav-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="account-user-avatar d-inline-block">
                        <img src={require("../assets/ico/icoDashboard/Wallpaper.png")} className="rounded-circle" />
                      </span>
                      <span>
                        <span className="account-user-name">Kelompok 3</span>
                        <span className="account-position">Student</span>
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="#">
                          <i className="bx bxs-user s-14 me-2"></i>
                          <span className="nameItem">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="#">
                          <i className="bx bxs-edit s-14 me-2"></i>
                          <span className="nameItem">Edit Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="#">
                          <i className="bx bx-log-out s-14 me-2"></i>
                          <span className="nameItem">Sign Out</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row gx-4 pt-4">
              <div className="col-lg-9">
                <div className="p-0" style={{ minHeight: "500px" }}>
                  <div class="row">
                    <div class="col-md-12 ">
                      <div>
                        <div class="card shadow border-0 color-black bodyTeachers">
                          <div class="card-header">
                            <h4 class="m-0 d-inline-block">Data Teachers</h4>
                            <Link to={"/admin"}>
                              <span className="btn add-btn">Change to Admin</span>
                            </Link>
                          </div>
                          <div class="card-body custom-bodyCard">
                            <div class="row">
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 m-0">
                <Calender />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Dashboard_Teachers;
