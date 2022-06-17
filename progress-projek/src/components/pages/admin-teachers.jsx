import React, { Component, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { auth, db } from "../../config/firebase-config";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc, getDocs, setDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../contexts/AuthContext";

class AdminTeacher extends Component {
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
  const [teacher, setTeacher] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nip, setNIP] = useState("");
  const [name, setName] = useState("");
  const [tutor, setTutor] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const {addUserTeacher, updateUserTeacher, deleteUserTeacher} = useAuth();

  const teacherCollectionRef = collection(db, "teacher");

  useEffect(() => {
    const unsubscribe = onSnapshot(teacherCollectionRef, (snapshot) => {
      setTeacher(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);
  console.log(teacher);
  console.log(date);

  async function addData(e) {
    e.preventDefault();
    try {
      await addUserTeacher(email, password, nip, name, tutor, date, gender, status);
      alert(name);
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  function handlerEdit(id, email, password, nip, name, tutor, gender, date, status) {
    setId(id);
    setEmail(email);
    setName(name);
    setNIP(nip);
    setTutor(tutor);
    setDate(date);
    setGender(gender);
    setStatus(status);
    setPassword(password);
  }

  async function editData(e) {
    e.preventDefault();
    if (email === "" || id === "") {
      return;
    }
    try {
      await updateUserTeacher(id, email, password, nip, name, tutor, date, gender, status);
      alert("Berhasil di update");
      setEmail("");
      setName("");
      setNIP("");
      setDate("");
      setGender("");
      setStatus("");
      setPassword("");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  async function deleteData(id) {
    try {
      await deleteUserTeacher(id);
      alert("Hapus berhasil");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  const kondisionalStatus = (status) => {
    return status === "true" ? <span className="badge bg-inverse-success">Online</span> : <span className="badge bg-inverse-danger">Offline</span>;
  };

  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="adminTeachers">
          <li id="dashboard" className="navItem">
            <Link to={"/admin-dashboard"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/DashboardIco.png")} alt="item1" id="item1" />
              </div>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/#">
                  Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li id="courses" className="navItem">
            <Link to={"/404"}>
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
          <li id="schedule" className="navItem">
            <Link to={"/404"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/Schedule.png")} alt="item3" id="item3" />
              </div>
              <span className="link_name">Schedule</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/#">
                  Schedule
                </a>
              </li>
            </ul>
          </li>
          <li id="teachers" className="navItem active">
            <Link to={"/admin"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/peopleW.png")} alt="item4" id="item4" />
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
          <li id="quiz" className="navItem">
            <Link to={"/quiz"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/Quiz.png")} alt="item6" id="item6" />
              </div>
              <span className="link_name">Quiz</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <a className="link_name" href="/#">
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
                    <a className="nav-link dropdown-toggle chat" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="iconChat">
                        <img src={require("../assets/ico/IconChat.png")} id="iconChat" alt="" />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                  </li>
                  <li className="nav-item dropdown d-flex align-items-center notif" id="notification">
                    <a className="nav-link dropdown-toggle notif" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="iconNotification">
                        <img src={require("../assets/ico/IconNotif.png")} id="iconNotif" alt="" />
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown"></ul>
                  </li>
                  <li className="nav-item dropdown frameProfile">
                    <a className="nav-link dropdown-toggle nav-user" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="account-user-avatar d-inline-block">
                        <img src={require("../assets/ico/icoDashboard/Wallpaper.png")} className="rounded-circle" alt="" />
                      </span>
                      <span>
                        <span className="account-user-name">Kelompok 3</span>
                        <span className="account-position">Student</span>
                      </span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#">
                          <i className="bx bxs-user s-14 me-2"></i>
                          <span className="nameItem">My Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#">
                          <i className="bx bxs-edit s-14 me-2"></i>
                          <span className="nameItem">Edit Profile</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="/#">
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
                  <div className="row">
                    <div className="col-md-12 ">
                      <div>
                        <div className="card shadow border-0 color-black bodyTeachers">
                          <div className="card-header">
                            <h4 className="m-0 d-inline-block">Data Teachers</h4>
                            <a href="/#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>

                          <div className="card-body custom-bodyCard">
                            <div className="row">
                              {teacher.map((teacher, index) => {
                                // return <PostDataStudents gambar={"https://source.unsplash.com/random/200x200?sig=" + index} name={student.name} email={student.email} password={student.password} class={student.class} date={student.date} gender={student.gender} status={student.status} idItem={student.id} modal={"#editModal"}/>;
                                return (
                                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={teacher.id}>
                                    <div className="card card-profile">
                                      <div className="card-header justify-content-end pb-0">
                                        <div className="dropdown">
                                          <button className="btn btn-link" type="button" data-bs-toggle="dropdown">
                                            <i className="fas fa-ellipsis-v"></i>
                                          </button>
                                          <div className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded">
                                            <div>
                                              <a
                                                className="dropdown-item custom-item-dropdown d-flex align-items-center"
                                                data-bs-toggle="modal"
                                                data-bs-target="#editModal"
                                                href="/#"
                                                onClick={() => handlerEdit(teacher.id, teacher.email, teacher.password, teacher.nip, teacher.name, teacher.tutor, teacher.gender, teacher.date, teacher.status)}
                                              >
                                                <i className="fas fa-pen me-2 text-primary"></i>
                                                <span className="nameItem">Edit</span>
                                              </a>
                                              <a className="dropdown-item custom-item-dropdown d-flex align-items-center" href="#" onClick={() => deleteData(teacher.id)}>
                                                <i className="fas fa-trash me-2 text-danger"></i>
                                                <span className="nameItem">Delete</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-body pt-2">
                                        <div className="text-center">
                                          <div className="profile-photo">
                                            <img src={"https://source.unsplash.com/random/200x200?sig=" + index} width="100" className="img-fluid rounded-circle" alt="" />
                                          </div>
                                          <h3 className="mt-4 mb-1 nameUser">{teacher.name}</h3>
                                          <p className="text-muted">{teacher.tutor} Teacher</p>
                                        </div>
                                        <div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">NIP :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{teacher.nip}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Email :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{teacher.email}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Gender :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{teacher.gender}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Date :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{teacher.date}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Status :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{kondisionalStatus(teacher.status)}</b>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="card-footer">
                                        <div className="text-center">
                                          <a className="btn btn-outline-primary btn-rounded px-4" href="/#">
                                            Chat
                                          </a>
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
                  <label htmlFor="emailInputAdmin" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="emailInputAdmin" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="passwordInput" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="passwordInput" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nipInput" className="form-label">
                    NIP
                  </label>
                  <input type="text" className="form-control" id="nipInput" onChange={(e) => setNIP(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nameInput" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="nameInput" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="classOption" className="form-label">
                    Subject
                  </label>
                  <select defaultValue="" className="form-select" id="classOption" onChange={(e) => setTutor(e.target.value)} required>
                    <option value="" disabled>
                      Choose Subject
                    </option>
                    <option value="Kimia">Kimia</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Biologi">Biologi</option>
                    <option value="Sejarah">Sejarah</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                    <option value="Bahasa Inggris">Bahasa Inggris</option>
                    <option value="Seni Budaya">Seni Budaya</option>
                    <option value="PPKN">PPKN</option>
                    <option value="PKWU">PKWU</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="dateOption" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" id="dateOption" onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="genderOption" className="form-label">
                    Gender
                  </label>
                  <select defaultValue="" className="form-select" id="genderOption" onChange={(e) => setGender(e.target.value)} required>
                    <option value="" disabled>
                      Choose Gender
                    </option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="statusOption" className="form-label">
                    Status
                  </label>
                  <select defaultValue="" className="form-select" id="statusOption" onChange={(e) => setStatus(e.target.value)} required>
                    <option value="" disabled>
                      Choose Status
                    </option>
                    <option value="true">Online</option>
                    <option value="false">Offline</option>
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

      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Data
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={editData}>
              <div className="modal-body row g-3">
                <div className="col-md-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="text" value={email} className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" value={password} className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="nip" className="form-label">
                    NIP
                  </label>
                  <input type="text" value={nip} className="form-control" id="nip" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" value={name} className="form-control" id="name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="class" className="form-label">
                    Subject
                  </label>
                  <select value={tutor} className="form-select" id="class" onChange={(e) => ""} required>
                    <option value="" disabled>
                      Choose Subject
                    </option>
                    <option value="Kimia">Kimia</option>
                    <option value="Fisika">Fisika</option>
                    <option value="Biologi">Biologi</option>
                    <option value="Sejarah">Sejarah</option>
                    <option value="Matematika">Matematika</option>
                    <option value="Bahasa Indonesia">Bahasa Indonesia</option>
                    <option value="Bahasa Inggris">Bahasa Inggris</option>
                    <option value="Seni Budaya">Seni Budaya</option>
                    <option value="PPKN">PPKN</option>
                    <option value="PKWU">PKWU</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" value={date} className="form-control" id="date" onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <select value={gender} className="form-select" id="gender" onChange={(e) => setGender(e.target.value)} required>
                    <option value="" disabled>
                      Choose Gender
                    </option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select value={status} className="form-select" id="status" onChange={(e) => setStatus(e.target.value)} required>
                    <option value="" disabled>
                      Choose Plan
                    </option>
                    <option value="true">Online</option>
                    <option value="false">Offline</option>
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
}
export default AdminTeacher;
