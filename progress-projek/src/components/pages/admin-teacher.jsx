import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import PostDataTeachers from "./insight/postTeacherAdmin";
import sideBar from "./js/collapseSidebar";
import renderTime from "./js/currentTime";
import searchBar from "./js/searchBar";
import Calender from "./insight/calenderWidget";
import { db } from "../config/firebase-config";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc, getDocs } from "firebase/firestore";

const AdminTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const [nip, setNip] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  const studentsCollectionRef = collection(db, "teachers");

  useEffect(() => {
    const unsubscribe = onSnapshot(studentsCollectionRef, (snapshot) => {
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    const show = await getDocs(studentsCollectionRef);
    console.log(show);
    setStudents(show.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  function addData(e) {
    e.preventDefault();
    addDoc(studentsCollectionRef, { email, name, class: kelas, date, gender, status, password })
      .then((res) => {
        console.log(res.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
    alert(name);
  }

  function handlerEdit(id, email, name, kelas, date, gender, status, password) {
    setId(id);
    setEmail(email);
    setName(name);
    setClass(kelas);
    setDate(date);
    setGender(gender);
    setStatus(status);
    setPassword(password);
  }

  function editData(e) {
    e.preventDefault();
    if (email === "" || id === "") {
      return;
    }
    const docRef = doc(db, "students", id);
    updateDoc(docRef, { email: email, name: name, class: kelas, date: date, gender: gender, status: status, password: password })
      .then((response) => {
        console.log("Berhasil Di Update");
      })
      .catch((error) => console.log(error.message));
    alert("Berhasil di update");
    setEmail("");
    setName("");
    setClass("");
    setDate("");
    setGender("");
    setStatus("");
    setPassword("");
  }

  function deleteData(id) {
    const docRef = doc(db, "students", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document Deleted");
      })
      .catch((error) => console.log(error.message));
  }

  const kondisionalStatus = (status) => {
    if (status === "Offline") {
      return <span class="badge bg-inverse-danger">{status}</span>;
    } else if (status === "Online") {
      return <span class="badge bg-inverse-success">{status}</span>;
    } else {
      return <span class="badge bg-inverse-danger">-</span>;
    }
  };

  return (
    <App/>
  );
};

function App(){
  return(
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("./assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links">
          <li id="dashboard" className="navItem">
            <Link to={"/dashboard"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/DashboardIco.png")} alt="item1" id="item1" />
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
          <li id="teachers" className="navItem active">
            <Link to={"/teachers"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/peopleW.png")} alt="item4" id="item4" />
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
          <li id="teachers" className="navItem">
            <Link to={"/students"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/people.png")} alt="item4" id="item4" />
                </div>
                <span className="link_name">All Students</span>
              </a>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="#">
                  All Students
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
                  <div class="row">
                    <div class="col-md-12 ">
                      <div>
                        <div class="card shadow border-0 color-black bodyTeachers">
                          <div class="card-header">
                            <h4 class="m-0 d-inline-block">Data Teachers</h4>
                            <a href="" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                              <i class="fas fa-plus"></i>
                            </a>
                          </div>

                          <div class="card-body custom-bodyCard">
                            <div className="row">
                              {students.map((student, index) => {
                                // return <PostDataStudents gambar={"https://source.unsplash.com/random/200x200?sig=" + index} name={student.name} email={student.email} password={student.password} class={student.class} date={student.date} gender={student.gender} status={student.status} idItem={student.id} modal={"#editModal"}/>;
                                return (
                                  <div className="col-sm-4">
                                    <div className="card shadow custom-radius custom-card r-12 color-black border-0 mb-4">
                                      <div className="card-body p-0">
                                        <img src={"https://source.unsplash.com/random/200x200?sig=" + index} className="bd-placeholder-img"></img>
                                        <div className="p-3">
                                          <h5 className="card-title">Profile</h5>
                                          <div className="row">
                                            <div class="col-6">NIP :</div>
                                            <div class="col-6">{student.name}</div>
                                            <div class="col-6">Name:</div>
                                            <div class="col-6">{student.email}</div>
                                            <div class="col-6">Gender:</div>
                                            <div class="col-6">{student.password}</div>
                                            <div class="col-6">Subject :</div>
                                            <div class="col-6">{student.class}</div>
                                            <div class="col-6">Status :</div>
                                            <div class="col-6">{kondisionalStatus(student.status)}</div>
                                          </div>
                                          <div className="col-12 text-center mt-4">
                                            <botton className="btn delete-btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handlerEdit(student.id, student.email, student.name, student.class, student.date, student.gender, student.status, student.password)}>
                                              Edit
                                            </botton>
                                            <botton className="btn delete-btn btn-danger " onClick={() => deleteData(student.id)}>
                                              Hapus
                                            </botton>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
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
export default AdminTeacher;
