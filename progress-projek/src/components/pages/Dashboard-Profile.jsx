import React, { Component, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

class Profile extends Component {
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
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const history = useHistory();
  console.log("Berhasil login dengan email: " + currentUser.email);
  console.log("Detail user: ");
  console.log(currentUser);

  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, "students", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        }
      });
    }
  }, []);
  console.log(user);
  console.log(user.name);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Fdatetimeailed to log out");
    }
  }
  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="main">
          <li id="dashboard" className="navItem active">
            <a href="#">
              <div className="frame-ico">
                <img src={require("../assets/ico/DashboardIcoW.png")} alt="item1" id="item1" />
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
            <Link to={"/class"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/School.png")} alt="item2" id="item2" />
              </div>
              <span className="link_name">Courses</span>
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
              <div className="frame-ico">
                <img src={require("../assets/ico/Schedule.png")} alt="item3" id="item3" />
              </div>
              <span className="link_name">Schedule</span>
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
              <div className="frame-ico">
                <img src={require("../assets/ico/people.png")} alt="item4" id="item4" />
              </div>
              <span className="link_name">All Teachers</span>
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
              <div className="frame-ico">
                <img src={require("../assets/ico/Quiz.png")} alt="item5" id="item5" />
              </div>
              <span className="link_name">Quiz</span>
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
                <div className="profile_name">{user.name}</div>
                <div className="job">{user.email}</div>
              </div>
              <i className="bx bx-log-out" onClick={handleLogout}></i>
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
                        <span className="account-user-name">{user.name}</span>
                        <span className="account-position">{user.status}</span>
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
                  <div className="Profile bg-light p-3">
                    <div className="d-flex justify-content-between px-2">
                      <h2 className="ms-1 mb-5 textProfile">My Profile</h2>
                      <div className="dropdown">
                        <button className="btn btn-link" type="button" data-bs-toggle="dropdown">
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded">
                          <div>
                            <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#">
                              <i className="fas fa-pen me-2 text-primary"></i>
                              <span className="nameItem">Edit</span>
                            </a>
                            <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#">
                              <i className="fas fa-trash me-2 text-danger"></i>
                              <span className="nameItem">Delete</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="itemCourse row pb-3"></div> */}
                    {/* <div class="profile card card-body px-3 pt-3 pb-0">

                    </div> */}
                    <div className="card card-profile">
                      <div className="card-body pt-2">
                        <div class="photo-content">
                          <div>
                            <img src={"https://source.unsplash.com/random/1920x1080?sig=2"} className="cover-photo rounded" alt="" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="profile-photo2">
                            <img src={"https://source.unsplash.com/random/200x200?sig=1"} width="160" className="img-fluid rounded-circle" alt="" />
                          </div>
                          <h3 className="mt-4 mb-1 nameUser">Tons</h3>
                          <p className="text-muted">Teacher</p>
                        </div>
                      </div>
                    </div>
                    <div className="card card-profile">
                      <div className="card-body pt-2">
                        <div>
                          <div className="row g-0 py-1">
                            <div className="col-6">
                              <span className="mb-0">Email :</span>
                            </div>
                            <div className="col-6">
                              <b>mail@mail.com</b>
                            </div>
                          </div>
                          <div className="row g-0 py-1">
                            <div className="col-6">
                              <span className="mb-0">Gender :</span>
                            </div>
                            <div className="col-6" >
                              <b>ssa</b>
                            </div>
                          </div>
                          <div className="row g-0 py-1">
                            <div className="col-6">
                              <span className="mb-0">Password :</span>
                            </div>
                            <div className="col-6">
                              <b>ss</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 m-0 col-12 d-none">
                <Calender />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Profile;
