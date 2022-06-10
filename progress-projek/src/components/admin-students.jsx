import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import PostDataStudents from "./insight/postStudents";
import sideBar from "./js/collapseSidebar";
import renderTime from "./js/currentTime";
import searchBar from "./js/searchBar";
import API from "../services/index";
import Calender from "./insight/calenderWidget";
import { db } from "../config/firebase-config";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc, getDocs } from "firebase/firestore";

const AdminStudents = () => {
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [kelas, setClass] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");

  const studentsCollectionRef = collection(db, "students");

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
    // const movieCollectionRef = collection(db, "movies");
    addDoc(studentsCollectionRef, { email, name, kelas, date, gender, status, password })
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

  function deleteData(id, name) {
    const docRef = doc(db, "students", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document Deleted");
        alert(name);
      })
      .catch((error) => console.log(error.message));
  }
  return (
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
          <li id="teachers" className="navItem">
            <Link to={"/admin"}>
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
          <li id="teachers" className="navItem active">
            <Link to={"/teachers"}>
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/peopleW.png")} alt="item4" id="item4" />
                </div>
                <span className="link_name">All Students</span>
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
                            <h4 class="m-0 d-inline-block">Data Students</h4>
                            <a href="" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                              <i class="fas fa-plus"></i>
                            </a>
                          </div>

                          <div class="card-body custom-bodyCard">
                            <div className="row">
                              {students.map((student, index) => {
                                return <PostDataStudents gambar={"https://source.unsplash.com/random/200x200?sig=" + index}  name={student.name} email={student.email} password={student.password} class={student.class} date={student.date} gender={student.gender} status={student.status}/>;
                              })}
                            </div>
                            {/* <table className="table table-bordered table-striped">
                              <thead>
                                <tr>
                                  <th>Email</th>
                                  <th>Name</th>
                                  <th>class</th>
                                  <th>Date 0f Birth</th>
                                  <th>Gender</th>
                                  <th>Status</th>
                                  <th>Password</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                {students.map((student) => {
                                  return (
                                    <tr key={student.id}>
                                      <td>{student.email}</td>
                                      <td>{student.name}</td>
                                      <td>{student.class}</td>
                                      <td>{student.date}</td>
                                      <td>{student.gender}</td>
                                      <td>{student.status}</td>
                                      <td>{student.password}</td>
                                      <td>
                                        <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handlerEdit(student.id, student.email, student.name, student.class, student.date, student.gender, student.status, student.password)}>
                                          Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleteData(student.id, student.name)}>
                                          Hapus
                                        </button>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table> */}
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

      <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Tambah Data
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={addData}>
              <div className="modal-body row g-3">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="class" className="form-label">
                    class
                  </label>
                  <select defaultValue="" className="form-select" id="class" onChange={(e) => setClass(e.target.value)} required>
                    <option value="" disabled>
                      Choose class
                    </option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select defaultValue="" className="form-select" id="gender" onChange={(e) => setGender(e.target.value)} required>
                    <option value="" disabled>
                      Choose Gender
                    </option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select defaultValue="" className="form-select" id="status" onChange={(e) => setStatus(e.target.value)} required>
                    <option value="" disabled>
                      Choose Plan
                    </option>
                    <option value="Free Plan">Free Plan</option>
                    <option value="Personal Plan">Personal Plan</option>
                    <option value="Pro PLan">Pro Plan</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminStudents;
