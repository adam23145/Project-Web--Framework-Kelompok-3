import React, { Component, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";

class Dashboard extends Component {
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
  const [classes, setClass] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const history = useHistory();

  const classRef = collection(db, "class");
  const teachersRef = collection(db, "teacher");
  const studentsRef = collection(db, "students");
  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, "students", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        }
      });
    }
    const dataClass = onSnapshot(classRef, (snapshot) => {
      setClass(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    const dataTeachers = onSnapshot(teachersRef, (snapshot) => {
      setTeachers(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    const dataStudents = onSnapshot(studentsRef, (snapshot) => {
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      dataClass();
      dataTeachers();
      dataStudents();
    };
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      const docRef = doc(db, "students", currentUser.uid);
      updateDoc(docRef, { isOnline: false });
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  console.log(user);
  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="main">
          <li id="dashboard" className="navItem active">
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
                <a className="link_name" href="/#">
                  Courses
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
                <a className="link_name" href="/#">
                  All Teachers
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={user.avatar || "https://firebasestorage.googleapis.com/v0/b/schoolineid-434e8.appspot.com/o/avatar%2FLogoDummy.png?alt=media&token=c94ce4f0-2da8-4ca2-9215-a2a8e7e631e9"} className="cust-avatar" />
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
                {/* <form action="https:google.com/search" method="GET" className="search-box">
                  <input type="text" name="q" className="search-txt" placeholder="Search" />
                  <button type="submit" className="search-btn border border-0">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form> */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex align-items-center">
                    <div id="clockDisplay" className="me-2"></div>
                    <span className="seperatorVertikal me-3"></span>
                  </li>
                  <li className="nav-item dropdown frameProfile">
                    <a className="nav-link dropdown-toggle nav-user" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="account-user-avatar d-inline-block">
                        <img src={user.avatar || "https://firebasestorage.googleapis.com/v0/b/schoolineid-434e8.appspot.com/o/avatar%2FLogoDummy.png?alt=media&token=c94ce4f0-2da8-4ca2-9215-a2a8e7e631e9"} className="cust-avatar img-fluid rounded-circle" />
                      </span>
                      <span>
                        <span className="account-user-name">{user.name}</span>
                        <span className="account-position">Student</span>
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded" aria-labelledby="navbarDropdown">
                      <li>
                        <Link to={"/profile"} className="text-decoration-none">
                          <div className="dropdown-item custom-item-dropdown d-flex align-items-center">
                            <i className="bx bxs-user s-14 me-2"></i>
                            <span className="nameItem">My Profile</span>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#" onClick={handleLogout}>
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
                    <div className="col-lg-12 m-0">
                      <div className="custCard">
                        <div className="px-2 py-0">
                          <div className="row no-gutters">
                            <div className="col-lg ps-4 pe-0">
                              <div className="text-card1 mb-lg-3 mt-lg-3 s-26">Welcome Back, {user.name}</div>
                              <div className="text2-card1 text-white s-16">Your learning progress this week is up 90% from last week, what a great achievement! don't forget to rest</div>
                            </div>
                            <div className="col-lg-auto p-0 ms-3">
                              <img src={require("../assets/ico/icoDashboard/1.png")} className="img-fluid" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-4 m-0">
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
                    </div> */}
                  </div>
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="card3 class shadow py-1">
                        <div className="py-2 ps-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="text-card3 text-white mt-2 s-24">Class Courses</div>
                              <div className="text2-card3 text-white mt-4">
                                {classes.length} <span>/ class</span>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-2 d-flex justify-content-end">
                              <img src={require("../assets/ico/icoDashboard/4.png")} className="mt-0" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-4">
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
                              <img src={require("../assets/ico/icoDashboard/6.png")} className="mt-0" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="col-lg-6 mb-3">
                      <div className="card3 shadow py-1">
                        <div className="py-2 ps-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="text-card3 text-white mt-2 s-24">User</div>
                              <div className="text2-card3 text-white mt-4">
                                {students.length} <span>/ student</span>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-2 d-flex justify-content-end">
                              <img src={require("../assets/ico/icoDashboard/4.png")} className="mt-0" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card3 book shadow py-1">
                        <div className="py-2 ps-4">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="text-card3 text-white mt-2 s-24">Teachers</div>
                              <div className="text2-card3 text-white mt-4">
                                {teachers.length} <span>/ teacher</span>
                              </div>
                            </div>
                            <div className="col-lg-6 mt-1 d-flex justify-content-end">
                              <img src={require("../assets/ico/icoDashboard/7.png")} className="m-0" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="mt-3 row">
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
                  </div> */}
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
export default Dashboard;
