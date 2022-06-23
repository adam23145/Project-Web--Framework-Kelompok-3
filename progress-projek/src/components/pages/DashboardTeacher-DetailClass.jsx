import React, { Component, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import ReactPlayer from "react-player";
import "../css/Dashboard.css";
import "../js/currentTime";

import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { collection, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import ListLesson from "../Widget/listLesson";

class DashboardTeacher_DetailClass extends Component {
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
  const [currentClass, setCurrentClass] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState("");
  const [lessons, setLessons] = useState([]);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nip, setNIP] = useState("");
  const [name, setName] = useState("");
  const [tutor, setTutor] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  async function addData(e) {
    e.preventDefault();
    try {
      // await addUserTeacher(email, password, nip, name, tutor, date, gender, status);
      alert(name);
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  const ref1 = collection(db, "class", id, "lessons");

  const history = useHistory();
  console.log("Berhasil login dengan email: " + currentUser.email);
  console.log("Detail user: ");
  console.log(currentUser);
  console.log("Detail class :", currentClass);

  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, "teacher", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        }
      });
    }
    if (id) {
      getDoc(doc(db, "class", id)).then((docSnap) => {
        if (docSnap.exists) {
          setCurrentClass(docSnap.data());
        }
      });
    }
    const unsubscribe = onSnapshot(ref1, (snapshot) => {
      setLessons(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function handleLogout() {
    setError("");
    try {
      await updateDoc(doc(db, "teacher", currentUser.uid), {
        isOnline: false,
      });
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const selectList = async (list) => {
    console.log("State user: ", list);
    setSelectedLesson(list);

    const idList = list.id;
    console.log("State id: ", idList);

    const ref = collection(db, "class", idList, "lessons");
    onSnapshot(ref, (snapshot) => {
      setDetail(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  };
  console.log("State class:", lessons);
  console.log("State detail:", detail);

  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="courses">
          <li id="dashboard" className="navItem">
            <Link to={"/dashboard-teacher"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/DashboardIco.png")} alt="item1" id="item1" />
              </div>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li id="courses" className="navItem active">
            <Link to={"/dashboard-teacher/class"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/SchoolW.png")} alt="item2" id="item2" />
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
          {user.role == "admin" ? (
            <>
              <li id="teachers" className="navItem">
                <Link to={"/admin"}>
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
              <li id="students" className="navItem">
                <Link to={"/students"}>
                  <div className="frame-ico">
                    <img src={require("../assets/ico/people.png")} alt="item5" id="item5" />
                  </div>
                  <span className="link_name">All Students</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <a className="link_name" href="/#">
                      All Teachers
                    </a>
                  </li>
                </ul>
              </li>
            </>
          ) : (
            <>
              <li id="teachers" className="navItem">
                <Link to={"/dashboard-teacher/viewstudent"}>
                  <div className="frame-ico">
                    <img src={require("../assets/ico/people.png")} alt="item4" id="item4" />
                  </div>
                  <span className="link_name">All Students</span>
                </Link>
                <ul className="sub-menu blank">
                  <li>
                    <a className="link_name" href="/#">
                      All Students
                    </a>
                  </li>
                </ul>
              </li>
            </>
          )}
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img src={user.avatar} className="cust-avatar" />
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
                        <img src={user.avatar} className="cust-avatar img-fluid rounded-circle" />
                      </span>
                      <span>
                        <span className="account-user-name">{user.name}</span>
                        <span className="account-position">
                          <span className="account-position">{user.role == "admin" ? "Admin" : "Teacher"}</span>
                        </span>
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
                  <div className="Course p-3">
                    <div className="card-header mb-5">
                      <h2 className="ms-1 cardTitle">Class : {currentClass.name_class} </h2>
                      <a href="/#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                        <i className="fas fa-plus"></i>
                      </a>
                    </div>
                    <div className="itemCourse row pb-3">
                      <p>Lessons: </p>
                      <div className="row">
                        <div className="col-4">
                          {lessons.map((lessons) => {
                            return <ListLesson key={lessons.id} list={lessons} selectList={selectList} lessons={selectedLesson} />;
                          })}
                        </div>
                        <div className="col-8">
                          {selectedLesson ? (
                            <>
                              <div className="text-center">
                                <h3 className="custTitleLesson">{selectedLesson.title}</h3>
                              </div>
                              <div className="row mb-3">
                                <div className="col-6"><b>Class:</b> {selectedLesson.class}</div>
                                <div className="col-6 d-flex justify-content-end"><b>Semester:</b>  {selectedLesson.semester}</div>
                              </div>
                              <div className="video-player mb-3">
                                <ReactPlayer url={selectedLesson.urlVideo} controls={true} width="100%" height="280px" />
                              </div>
                              <p className="textOverview s-16">Overview</p>
                              <p>{selectedLesson.body}</p>
                              <p className="textOverview s-16">Author</p>
                              <p>{selectedLesson.author}</p>
                            </>
                          ) : (
                            <div className="text-center">
                              {" "}
                              <h3 className="no_conv">Take Your Lessons</h3>
                            </div>
                          )}
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
export default DashboardTeacher_DetailClass;
