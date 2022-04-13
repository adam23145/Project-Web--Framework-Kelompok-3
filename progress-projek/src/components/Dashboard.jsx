import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import sideBar from "./js/collapseSidebar";
import renderTime from "./js/currentTime";
import searchBar from "./js/searchBar";

class Dashboard extends Component {
  componentDidMount() {
    sideBar();
    renderTime();
    searchBar();
  }
  render() {
    return (
      <div className="bodyDashboard">
        <div className="sidebar">
          <div className="logo-details">
            <img src={require("./assets/ico/LogoMin.png")} alt="Logo" />
            <span className="logo_name">scholLine.id</span>
          </div>
          <ul className="nav-links">
            <li id="dashboard" className="navItem active">
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/DashboardIcoW.png")} alt="item1" id="item1" />
                </div>
                <span className="link_name">Dashboard</span>
              </a>
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
                    <img src={require("./assets/ico/School.png")} alt="item2" id="item2" />
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
                  <img src={require("./assets/ico/Schedule.png")} alt="item3" id="item3" />
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
            <li id="teachers" className="navItem">
              <Link to={"/teachers"}>
                <a href="#">
                  <div className="frame-ico">
                    <img src={require("./assets/ico/people.png")} alt="item4" id="item4" />
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
                  <img src={require("./assets/ico/Quiz.png")} alt="item5" id="item5" />
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
                  <img src={require("./assets/img/Wallpaper.png")} alt="profileImg" />
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
                          <img src={require("./assets/ico/IconChat.png")} id="iconChat" />
                        </span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                    </li>
                    <li className="nav-item dropdown d-flex align-items-center notif" id="notification">
                      <a className="nav-link dropdown-toggle notif" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="iconNotification">
                          <img src={require("./assets/ico/IconNotif.png")} id="iconNotif" />
                        </span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                    </li>
                    <li className="nav-item dropdown frameProfile">
                      <a className="nav-link dropdown-toggle nav-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span className="account-user-avatar d-inline-block">
                          <img src={require("./assets/img/Wallpaper.png")} className="rounded-circle" />
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
                    <div className="row g-2 mb-2">
                      <div className="col-lg-8 m-0">
                        <div className="custCard">
                          <div className="px-2 py-0">
                            <div className="row no-gutters">
                              <div className="col-lg ps-4 pe-0">
                                <div className="text-card1 mb-lg-3 mt-lg-3">Welcome Back, Kelompok 3</div>
                                <div className="text2-card1 text-white">Your learning progress this week is up 90% from last week, what a great achievement! don't forget to rest</div>
                              </div>
                              <div className="col-lg-auto p-0 ms-3">
                                <img src={require("./assets/img/1.png")} className="img-fluid" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 m-0">
                        <div className="custCard card2">
                          <div className="card-body">
                            <div className="row no-gutters">
                              <div className="col-lg">
                                <div className="text-card2 mb-lg-1">
                                  Upgrade your <br />
                                  Account
                                </div>
                                <div className="text2-card2">
                                  <p>
                                    Upgrade to get more access, <br />
                                    and explore all features.
                                  </p>
                                </div>
                                <button className="btn btn-card2 d-flex align-items-center justify-content-center shadow">Upgrade</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card3 class shadow py-1">
                          <div className="py-2 ps-lg-2">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-card3 text-white mt-2">Class Courses</div>
                                <div className="text2-card3 text-white mt-2">
                                  0 <span>/ class</span>
                                </div>
                              </div>
                              <div className="col-lg-6 mt-2">
                                <img src={require("./assets/img/4.png")} className="mt-0" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card3 progres shadow py-1">
                          <div className="py-2 ps-lg-2">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-card3 text-white mt-2">Progress Learning</div>
                                <div className="text2-card3 text-white mt-2">
                                  0 <span>/ Material</span>
                                </div>
                              </div>
                              <div className="col-lg-6 mt-2">
                                <img src={require("./assets/img/6.png")} className="mt-0" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="card3 book shadow py-1">
                          <div className="py-2 ps-lg-2">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="text-card3 text-white mt-2">Book</div>
                                <div className="text2-card3 text-white mt-2">
                                  0 <span>/ book</span>
                                </div>
                              </div>
                              <div className="col-lg-6 mt-1">
                                <img src={require("./assets/img/7.png")} className="m-0" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 row">
                      <div className="border2">
                        <div className="mt-4 mb-3 d-flex justify-content-between align-items-center">
                          <h6>Continue Learning</h6>
                          <span className="txt1">See All</span>
                        </div>
                        <div className="progresss d-flex mb-3 p-2 py-3">
                          <div className="col-lg-2">
                            <div className="box"></div>
                          </div>
                          <div className="col-lg-6">
                            <h6 className="title">Kimia</h6>
                            <h6 className="text">#1 Teori Atom</h6>
                            <h6 className="status">2/15 Lessons</h6>
                            <div className="progress bar">
                              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "15%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <button className="btn btn-resume">Resume</button>
                          </div>
                        </div>
                        <div className="progresss d-flex mb-3 p-2 py-3">
                          <div className="col-lg-2">
                            <div className="box"></div>
                          </div>
                          <div className="col-lg-6">
                            <h6 className="title">Fisika</h6>
                            <div className="info">
                              <h6 className="text">#1 Hukum Newton</h6>
                              <h6 className="status">14/15 Lessons</h6>
                            </div>
                            <div className="progress bar">
                              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                          <div className="col-lg-3 d-flex justify-content-center align-items-center">
                            <button className="btn btn-resume">Resume</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 m-0">
                  <div className="bg-light shadow text-center rounded-3 p-2" style={{ minHeight: "500px" }}>
                    <main>
                      <div className="calendar">
                        <div className="month-indicator">
                          <time datetime="2019-02"> February 2019 </time>
                        </div>
                        <div className="day-of-week">
                          <div>Su</div>
                          <div>Mo</div>
                          <div>Tu</div>
                          <div>We</div>
                          <div>Th</div>
                          <div>Fr</div>
                          <div>Sa</div>
                        </div>
                        <div className="date-grid">
                          <button>
                            <time datetime="2019-02-01">1</time>
                          </button>
                          <button>
                            <time datetime="2019-02-02">2</time>
                          </button>
                          <button>
                            <time datetime="2019-02-03">3</time>
                          </button>
                          <button>
                            <time datetime="2019-02-04">4</time>
                          </button>
                          <button>
                            <time datetime="2019-02-05">5</time>
                          </button>
                          <button>
                            <time datetime="2019-02-06">6</time>
                          </button>
                          <button>
                            <time datetime="2019-02-07">7</time>
                          </button>
                          <button>
                            <time datetime="2019-02-08">8</time>
                          </button>
                          <button>
                            <time datetime="2019-02-09">9</time>
                          </button>
                          <button>
                            <time datetime="2019-02-10">10</time>
                          </button>
                          <button>
                            <time datetime="2019-02-11">11</time>
                          </button>
                          <button>
                            <time datetime="2019-02-12">12</time>
                          </button>
                          <button>
                            <time datetime="2019-02-13">13</time>
                          </button>
                          <button>
                            <time datetime="2019-02-14">14</time>
                          </button>
                          <button>
                            <time datetime="2019-02-15">15</time>
                          </button>
                          <button>
                            <time datetime="2019-02-16">16</time>
                          </button>
                          <button>
                            <time datetime="2019-02-17">17</time>
                          </button>
                          <button>
                            <time datetime="2019-02-18">18</time>
                          </button>
                          <button>
                            <time datetime="2019-02-19">19</time>
                          </button>
                          <button>
                            <time datetime="2019-02-20">20</time>
                          </button>
                          <button>
                            <time datetime="2019-02-21">21</time>
                          </button>
                          <button>
                            <time datetime="2019-02-22">22</time>
                          </button>
                          <button>
                            <time datetime="2019-02-23">23</time>
                          </button>
                          <button>
                            <time datetime="2019-02-24">24</time>
                          </button>
                          <button>
                            <time datetime="2019-02-25">25</time>
                          </button>
                          <button>
                            <time datetime="2019-02-26">26</time>
                          </button>
                          <button>
                            <time datetime="2019-02-27">27</time>
                          </button>
                          <button>
                            <time datetime="2019-02-28">28</time>
                          </button>
                        </div>
                      </div>
                    </main>
                    <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
                      <div className="d-flex justify-content-between">
                        <p className="headerActivy ps-3 pt-3">Today Mask</p>
                        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <div className="col-lg-4 align-content-between">
                          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                        </div>
                        <div className="col-lg-1 garisVertical"></div>
                        <div className="col-lg-6 bg-info rounded-3"></div>
                      </div>
                    </div>
                    <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
                      <div className="d-flex justify-content-between">
                        <p className="headerActivy ps-3 pt-3">Today Mask</p>
                        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <div className="col-lg-4 align-content-between">
                          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                        </div>
                        <div className="col-lg-1 garisVertical"></div>
                        <div className="col-lg-6 bg-info rounded-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard;
