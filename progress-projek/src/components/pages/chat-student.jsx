import React, { Component, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import "../css/Dashboard.css";
import "../js/currentTime";
import SideBar from "../js/collapseSidebar";
import Searchbar from "../js/searchBar";
import changeIconMenu from "../js/changeIconMenu";
import Calender from "../Widget/calenderWidget";
import { db, storage } from "../../config/firebase-config";
import { addDoc, collection, doc, getDoc, onSnapshot, orderBy, query, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { useAuth } from "../../contexts/AuthContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Message from "../Widget/Message";
import MessageForm from "../Widget/MessageForm";

class ChatStudent extends Component {
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
  const { id } = useParams();
  const history = useHistory();
  const [selectedUser, setSelectedUser] = useState([]);
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [msgs, setMsgs] = useState([]);

  const user1 = currentUser.uid;
  const user2 = id;
  const idMsg = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
  const msgsRef = collection(db, "messages", idMsg, "chat");
  const q = query(msgsRef, orderBy("createdAt", "asc"));

  useEffect(() => {
    if (currentUser) {
      getDoc(doc(db, "teacher", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists) {
          setUser(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    }
    getDoc(doc(db, "students", id)).then((doc) => {
      setSelectedUser(doc.data());
    });
    onSnapshot(q, (querySnapshot) => {
      setMsgs(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user2 = id;
    const idMsg = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;

    let url;
    if (img) {
      const imgRef = ref(storage, `images/${new Date().getTime()} - ${img.name}`);
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    await addDoc(collection(db, "messages", idMsg, "chat"), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
    });

    await setDoc(doc(db, "lastMsg", idMsg), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true,
    });

    setText("");
    setImg("");
  };

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

  return (
    <div className="bodyDashboard">
      <div className="sidebar">
        <div className="logo-details">
          <img src={require("../assets/ico/LogoMin.png")} alt="Logo" />
          <span className="logo_name">scholLine.id</span>
        </div>
        <ul className="nav-links" id="teachers">
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
          <li id="teachers" className="navItem active">
            <Link to={"/dashboard-teacher/viewstudent"}>
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
                    <a className="nav-link dropdown-toggle nav-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="account-user-avatar d-inline-block">
                        <img src={user.avatar} className="cust-avatar img-fluid rounded-circle" />
                      </span>
                      <span>
                        <span className="account-user-name">{user.name}</span>
                        <span className="account-position">Teacher</span>
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
                            <h4 className="m-0 d-inline-block text-center">Chat</h4>
                          </div>
                          <div className="card-body custom-bodyCard">
                            <div className="w-100 user-chat mt-4 mt-sm-0 ms-lg-1">
                              <div className="card">
                                {selectedUser ? (
                                  <>
                                    <div className="p-3 px-lg-4 border-bottom">
                                      <div className="row">
                                        <div className="text-center">
                                          <div className="d-inline-block">
                                            <h5 className="mb-1">
                                              <Link to="/dashboard-teacher/viewstudent" className="account-user-name s-18 text-decoration-none">
                                                {selectedUser.name}
                                              </Link>
                                            </h5>
                                            <p className="text-muted mb-0 text-center">{selectedUser.tutor} Student</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="px-lg-2">
                                      <div className="chat-conversation p-3">
                                        <ul className="list-unstyled mb-0" data-simplebar="init" style={{ maxHeight: "355px" }}>
                                          <div className="simplebar-wrapper" style={{ margin: 0 }}>
                                            <div className="simplebar-height-auto-observer-wrapper">
                                              <div className="simplebar-height-auto-observer"></div>
                                            </div>
                                            <div className="simplebar-mask">
                                              <div className="simplebar-offset" style={{ right: "-17px", bottom: "0px" }}>
                                                <div className="simplebar-content-wrapper" style={{ height: "auto", overflow: "hidden scroll" }}>
                                                  <div className="simplebar-content" style={{ padding: 0 }}>
                                                    {msgs.length ? msgs.map((msg, i) => <Message key={i} msg={msg} user1={user1} />) : null}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="simplebar-placeholder" style={{ width: "auto", height: "813px" }}></div>
                                          </div>
                                          <div className="simplebar-track simplebar-horizontal" style={{ visibility: "hidden" }}>
                                            <div className="simplebar-scrollbar" style={{ transform: "translate3d(0px, 0px, 0px)", display: "none" }}></div>
                                          </div>
                                          <div className="simplebar-track simplebar-vertical" style={{ visibility: "hidden" }}>
                                            <div className="simplebar-scrollbar" style={{ height: "254px", transform: "translate3d(0, 0, 0)", display: "block" }}></div>
                                          </div>
                                        </ul>
                                      </div>
                                    </div>
                                    <MessageForm handleSubmit={handleSubmit} text={text} setText={setText} setImg={setImg} />
                                  </>
                                ) : (
                                  <h3 className="no_conv">Select a user to start conversation</h3>
                                )}
                              </div>
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
export default ChatStudent;
