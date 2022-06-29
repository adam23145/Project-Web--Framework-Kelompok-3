import React, { Component, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "../css/Dashboard.css";
import "../js/currentTime";
import Camera from "../assets/svg/Camera";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import { db, storage } from "../../config/firebase-config";
import Delete from "../assets/svg/Delete";

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
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [kelas, setClass] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [img, setImg] = useState("");
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

    if (img) {
      const uploadImg = async () => {
        const imgRef = ref(storage, `avatar/${new Date().getTime()} - ${img.name}`);
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath));
          }
          const snap = await uploadBytes(imgRef, img);
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));

          await updateDoc(doc(db, "students", currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });

          setImg("");
        } catch (err) {
          console.log(err.message);
        }
      };
      uploadImg();
    }
  }, [img]);
  console.log(user);
  console.log(user.name);

  async function handleLogout() {
    setError("");
    try {
      await logout();
      const docRef = doc(db, "students", currentUser.uid);
      updateDoc(docRef, { isOnline: false })
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
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
    const docRef = doc(db, "students", currentUser.uid);
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
  const kondisionalStatus = (status) => {
    if (status === "Free Plan") {
      return <span className="badge bg-inverse-success s-14">{status}</span>;
    } else if (status === "Personal Plan") {
      return <span className="badge bg-personalPlan">{status}</span>;
    } else if (status === "Pro Plan") {
      return <span className="badge bg-proPlan">{status}</span>;
    } else {
      return <span className="badge bg-inverse-success">Free Plan</span>;
    }
  };

  const deleteImage = async () => {
    try {
      const confirm = window.confirm("Delete avatar?");
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath));

        await updateDoc(doc(db, "users", currentUser.uid), {
          avatar: "",
          avatarPath: "",
        });
        history.replace("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="main">
          <li id="dashboard" className="navItem active">
            <Link to={"/dashboard"}>
              <div className="frame-ico">
                <img src={require("../assets/ico/DashboardIcoW.png")} alt="item1" id="item1" />
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
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item d-flex align-items-center">
                    <div id="clockDisplay" className="me-2"></div>
                    <span className="seperatorVertikal me-3"></span>
                  </li>
                  <li className="nav-item dropdown frameProfile">
                    <a className="nav-link dropdown-toggle nav-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <div className="Profile bg-light p-3">
                    <div className="d-flex justify-content-between px-2">
                      <h2 className="ms-1 mb-5 textProfile">My Profile</h2>
                      <div className="dropdown">
                        <button className="btn btn-link" type="button" data-bs-toggle="dropdown">
                          <i className="fas fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end me-1 border border-0 custom-rounded">
                          <div>
                            <a className="dropdown-item custom-item-dropdown d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => handlerEdit(user.name, user.email, user.name, user.class, user.date, user.gender, user.status, user.password)} href="/#">
                              <i className="fas fa-pen me-2 text-primary"></i>
                              <span className="nameItem">Edit</span>
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
                        <div className="photo-content">
                          <div>
                            <img src={"https://source.unsplash.com/random/1920x1080?sig=2"} className="cover-photo rounded" alt="" />
                          </div>
                        </div>
                        <div className="profile_container profile-photo2">
                          <div className="img_container">
                            <img src={user.avatar || "https://firebasestorage.googleapis.com/v0/b/schoolineid-434e8.appspot.com/o/avatar%2FLogoDummy.png?alt=media&token=c94ce4f0-2da8-4ca2-9215-a2a8e7e631e9"} alt="avatar" className="img-fluid rounded-circle" />
                            <div className="overlay">
                              <div>
                                <label htmlFor="photo">
                                  <Camera />
                                </label>
                                {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
                                <input type="file" accept="image/*" style={{ display: "none" }} id="photo" onChange={(e) => setImg(e.target.files[0])} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center">
                          <h3 className="mt-4 mb-1 nameUser">{user.name}</h3>
                          <p className="text-muted s-16">{kondisionalStatus(user.status)}</p>
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
                              <b>{user.email}</b>
                            </div>
                          </div>
                          <div className="row g-0 py-1">
                            <div className="col-6">
                              <span className="mb-0">Gender :</span>
                            </div>
                            <div className="col-6">
                              <b>{user.gender}</b>
                            </div>
                          </div>
                          <div className="row g-0 py-1">
                            <div className="col-6">
                              <span className="mb-0">Password :</span>
                            </div>
                            <div className="col-6">
                              <b>****</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 ">
                <Calender />
              </div>
            </div>
          </div>
        </div>
      </section>

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
export default Profile;
