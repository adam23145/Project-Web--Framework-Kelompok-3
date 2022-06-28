import React, { Component, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { db } from "../../config/firebase-config";
import { collection, addDoc, deleteDoc, doc, onSnapshot, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";

class AdminStudents extends Component {
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
  const [classes, setClass] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState([]);
  const history = useHistory();
  const { addUserStudent, updateUserStudent, deleteUserStudent, currentUser, logout } = useAuth();

  const studentsCollectionRef = collection(db, "students");

  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, "teacher", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        }
      });
    }
    const unsubscribe = onSnapshot(studentsCollectionRef, (snapshot) => {
      setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  async function addData(e) {
    e.preventDefault();
    try {
      await addUserStudent(email, password, name, classes, date, gender, status);
      alert(name);
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  function handlerEdit(id, email, name, classes, date, gender, status, password) {
    setId(id);
    setEmail(email);
    setName(name);
    setClass(classes);
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
      await updateUserStudent(id, email, password, name, classes, date, gender, status);
      alert("Berhasil di update");
      setEmail("");
      setName("");
      setClass("");
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
      await deleteUserStudent(id);
      alert("Hapus berhasil");
    } catch (error) {
      console.log(error.code);
      setError(error.code);
    }
  }

  async function handleLogout() {
    setError("");
    try {
      await logout();
      const docRef = doc(db, "teacher", currentUser.uid);
      updateDoc(docRef, { isOnline: false })
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
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

  console.log(status);

  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="adminStudent">
          <li id="dashboard" className="navItem">
            <Link to="/dashboard-teacher">
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
            <Link to={"/dashboard-teacher/class"}>
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
          <li id="teachers" className="navItem">
            <Link to={"/admin"}>
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
          <li id="students" className="navItem active">
            <Link to={"/students"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/peopleW.png")} alt="item5" id="item5" />
              </div>
              <span className="link_name">All Students</span>
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
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex align-items-center">
                    <div id="clockDisplay" className="me-2"></div>
                    <span className="seperatorVertikal me-3"></span>
                  </li>
                  <li className="nav-item dropdown frameProfile">
                    <a className="nav-link dropdown-toggle nav-user" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="account-user-avatar d-inline-block">
                        <img src={user.avatar} className="cust-avatar img-fluid rounded-circle" />
                      </span>
                      <span>
                        <span className="account-user-name">{user.name}</span>
                        <span className="account-position">Admin</span>
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
                  <div className="row">
                    <div className="col-md-12 ">
                      <div>
                        <div className="card shadow border-0 color-black bodyTeachers">
                          <div className="card-header">
                            <h4 className="m-0 d-inline-block">Data Students</h4>
                            <a href="" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#addModal">
                              <i className="fas fa-plus"></i>
                            </a>
                          </div>

                          <div className="card-body custom-bodyCard">
                            <div className="row">
                              {students.map((student, index) => {
                                // return <PostDataStudents gambar={"https://source.unsplash.com/random/200x200?sig=" + index} name={student.name} email={student.email} password={student.password} class={student.class} date={student.date} gender={student.gender} status={student.status} idItem={student.id} modal={"#editModal"}/>;
                                return (
                                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={student.id}>
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
                                                onClick={() => handlerEdit(student.id, student.email, student.name, student.class, student.date, student.gender, student.status, student.password)}
                                                href="/#"
                                              >
                                                <i className="fas fa-pen me-2 text-primary"></i>
                                                <span className="nameItem">Edit</span>
                                              </a>
                                              <a className="dropdown-item custom-item-dropdown d-flex align-items-center" onClick={() => deleteData(student.id)}>
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
                                          <h3 className="mt-4 mb-1 nameUser">{student.name}</h3>
                                          <p className="text-muted">Class {student.class}</p>
                                        </div>
                                        <div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Email :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{student.email}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Password :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{student.password}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">DateOfBirth :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{student.date}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Gender :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{student.gender}</b>
                                            </div>
                                          </div>
                                          <div className="row g-0 py-1">
                                            <div className="col-6">
                                              <span className="mb-0">Status :</span>
                                            </div>
                                            <div className="col-6" style={{ textAlign: "right" }}>
                                              <b>{kondisionalStatus(student.status)}</b>
                                            </div>
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
                  <label htmlFor="addEmail" className="form-label">
                    Email
                  </label>
                  <input type="text" className="form-control" id="addEmail" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-12">
                  <label htmlFor="addPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="addPassword" onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="addName" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="addName" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="classOption" className="form-label">
                    class
                  </label>
                  <select defaultValue="" className="form-select" id="classOption" onChange={(e) => setClass(e.target.value)} required>
                    <option value="" disabled>
                      Choose class
                    </option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="AddDate" className="form-label">
                    Date of Birth
                  </label>
                  <input type="date" className="form-control" id="AddDate" onChange={(e) => setDate(e.target.value)} required />
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
                <div className="col-md-12">
                  <label htmlFor="statusOption" className="form-label">
                    Status
                  </label>
                  <select defaultValue="" className="form-select" id="statusOption" onChange={(e) => setStatus(e.target.value)} required>
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
                  <select value={classes} className="form-select" id="class" onChange={(e) => setClass(e.target.value)} required>
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
    </div>
  );
}
export default AdminStudents;
