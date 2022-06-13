import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { db } from "../../config/firebase-config";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc, getDocs } from "firebase/firestore";

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
    if (status === "Free Plan") {
      return <span className="badge bg-inverse-success">{status}</span>;
    } else if (status === "Personal Plan") {
      return <span className="badge bg-personalPlan">{status}</span>;
    } else if (status === "Pro Plan") {
      return <span className="badge bg-proPlan">{status}</span>;
    } else {
      return <span className="badge bg-inverse-success">Free Plan</span>;
    }
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
                <a className="link_name" href="#">
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
                <a className="link_name" href="#">
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
                <a className="link_name" href="#">
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
                <a className="link_name" href="#">
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
                <a className="link_name" href="#">
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
                  <div className="row">
                    <div className="col-md-12 ">
                      <div>
                        <div className="card shadow border-0 color-black bodyTeachers">
                          <div className="card-header">
                            <h4 className="m-0 d-inline-block">Data Teachers</h4>
                            <a href="" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>

                          <div className="card-body custom-bodyCard">
                            <div className="row">
                            {students.map((student, index) => {
                                // return <PostDataStudents gambar={"https://source.unsplash.com/random/200x200?sig=" + index} name={student.name} email={student.email} password={student.password} class={student.class} date={student.date} gender={student.gender} status={student.status} idItem={student.id} modal={"#editModal"}/>;
                                return (
                                  <div className="col-sm-4" key={student.id}>
                                    <div className="card shadow custom-radius custom-card r-12 color-black border-0 mb-4">
                                      <div className="card-body p-0">
                                        <img src={"https://source.unsplash.com/random/200x200?sig=" + index} className="bd-placeholder-img"></img>
                                        <div className="p-3">
                                          <h5 className="card-title">Profile</h5>
                                          <div className="row">
                                            <div className="col-6">Name :</div>
                                            <div className="col-6">{student.name}</div>
                                            <div className="col-6">Email :</div>
                                            <div className="col-6">{student.email}</div>
                                            <div className="col-6">Password :</div>
                                            <div className="col-6">{student.password}</div>
                                            <div className="col-6">Name :</div>
                                            <div className="col-6">{student.class}</div>
                                            <div className="col-6">Tanggal Lahir :</div>
                                            <div className="col-6">{student.date}</div>
                                            <div className="col-6">Gender :</div>
                                            <div className="col-6">{student.gender}</div>
                                            <div className="col-6">Status :</div>
                                            <div className="col-6">{kondisionalStatus(student.status)}</div>
                                          </div>
                                          <div className="col-12 text-center mt-4">
                                            <button className="btn delete-btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handlerEdit(student.id, student.email, student.name, student.class, student.date, student.gender, student.status, student.password)}>
                                              Edit
                                            </button>
                                            <button className="btn delete-btn btn-danger " onClick={() => deleteData(student.id)}>
                                              Hapus
                                            </button>
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
                    <option value="Pro Plan">Pro Plan</option>
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
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" value={name} className="form-control" id="name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="class" className="form-label">
                    class
                  </label>
                  <select value={kelas} className="form-select" id="class" onChange={(e) => setClass(e.target.value)} required>
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
                <div className="col-md-12">
                  <label htmlFor="status" className="form-label">
                    Status
                  </label>
                  <select value={status} className="form-select" id="status" onChange={(e) => setStatus(e.target.value)} required>
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
}
export default AdminTeacher;
