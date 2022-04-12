import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./css/LandingPage.css";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import ListMateri from "./insight/listClass";
import H1 from "./insight/h1";
import sideBar from "./js/collapseSidebar";
import renderTime from "./js/currentTime";
import searchBar from "./js/searchBar";

class Dashboard_DetailClass extends Component {
  state = {
    daftarMateri: [],
    judulMapel: [],
    detailMateri: [],
  };
  getDataApi2 = () => {
    let id = this.props.match.params.matkulId;
    fetch("http://localhost:3001/daftarMapel?id_Mapel=" + id, { method: "GET" })
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          judulMapel: jsonHasilAmbilDariAPI,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  getDataApi = () => {
    let id = this.props.match.params.matkulId;
    fetch(`http://localhost:3001/list_MateriMapel?id_materi=${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          daftarMateri: jsonHasilAmbilDariAPI,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  Materi = (data) => {
    fetch(`http://localhost:3001/list_MateriMapel?id=${data}`, { method: "GET" })
      .then((response) => response.json())
      .then((jsonHasilAmbilDariAPI) => {
        this.setState({
          detailMateri: jsonHasilAmbilDariAPI,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    // console.log(this.props.match.params.matkulId)
    this.getDataApi();
    this.getDataApi2();
    sideBar();
    renderTime();
    searchBar();
  }
  render() {
    return (
      <div className="bodyDashboard">
        <div className="sidebar">
          <div className="logo-details">
            <img src={require("./assets/ico/LogoMin.png")} alt="Logo" />
            <span className="logo_name">scholLine.id</span>
          </div>
          <ul className="nav-links">
            <li id="dashboard" className="navItem active">
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/DashboardIcoW.png")} alt="item1" id="item1" />
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
              <Link to={"/courses"}>
                <a href="#">
                  <div className="frame-ico">
                    <img src={require("./assets/ico/School.png")} alt="item2" id="item2" />
                  </div>
                  <span className="link_name">Courses</span>
                </a>
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
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/Schedule.png")} alt="item3" id="item3" />
                </div>
                <span className="link_name">Schedule</span>
              </a>
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
            <li id="quiz" className="navItem">
              <a href="#">
                <div className="frame-ico">
                  <img src={require("./assets/ico/Quiz.png")} alt="item5" id="item5" />
                </div>
                <span className="link_name">Quiz</span>
              </a>
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
        </div>
        <section className="home-section">
          <div className="home-navbar shadowNavbar">
            <div className="menu">
              <i className="bx bx-menu menu-collapse"></i>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
                    <div class="Course px-5 py-4">
                      <div class="d-flex justify-content-between ">
                        <h6 class="heading">
                          {this.state.judulMapel.map((judulMapel) => {
                            return <H1 nama={judulMapel.namaMapel} />;
                          })}
                          Kelas
                          <span>
                            {this.state.detailMateri.map((detailMateri) => {
                              return detailMateri.kelas;
                            })}
                          </span>
                        </h6>
                        <div class="chooseClass d-flex justify-content-center align-items-center">
                          <h6>Choose class :</h6>
                          <div class="ms-1">
                            <select className="borderclass">
                              <option></option>
                              <option>10</option>
                              <option>11</option>
                              <option>12</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="chooseClass d-flex m-0  align-items-center">
                        <h6>Semester :</h6>
                        <div class="borderclass"></div>
                      </div>
                      <div class="d-flex justify-content-between">
                        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady}  /> */}
                        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" width={"370px"} height={"200px"} />
                        <div class="bab ">
                          <div className="listMateri">
                            {this.state.daftarMateri.map((daftarMateri) => {
                              return <ListMateri key={daftarMateri.id_materi} id_materi={daftarMateri.id} nama={daftarMateri.judul} Materi={this.Materi} />;
                            })}
                          </div>
                        </div>
                      </div>
                      <div class="d-flex">
                        <div class="textDetail mt-4 col-lg-6 me-lg-3">
                          <h6 class="header3 fw-bold">
                            {this.state.detailMateri.map((detailMateri) => {
                              return detailMateri.judul;
                            })}
                          </h6>
                          <p>
                            {this.state.detailMateri.map((detailMateri) => {
                              return detailMateri.isi;
                            })}
                          </p>
                          {this.state.detailMateri.map((detailMateri) => {
                            return <button class="btn btnReadMore">Read more</button>;
                          })}
                        </div>
                        <div class="col-lg-4 mt-4 ms-5">
                          <div class="cardPengajar d-flex pt-2 ps-2">
                            <div class="mt-1">
                              <img src="https://img2.pngdownload.id/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="" width={"50px"} class="img-fluid" />
                            </div>
                            <div class="cardNama ms-3">
                              <h6 class="ms-3 text-white">Adam Dwi</h6>
                              <p class="ms-3 text-white">Pengajar</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 m-0">
                  <div className="bg-light shadow text-center rounded-3 p-2" style={{ minHeight: "500px" }}>
                    <main>
                      <div className="calendar">
                        <div className="month-indicator">
                          <time datetime="2019-02"> February 2019 </time>
                        </div>
                        <div className="day-of-week">
                          <div>Su</div>
                          <div>Mo</div>
                          <div>Tu</div>
                          <div>We</div>
                          <div>Th</div>
                          <div>Fr</div>
                          <div>Sa</div>
                        </div>
                        <div className="date-grid">
                          <button>
                            <time datetime="2019-02-01">1</time>
                          </button>
                          <button>
                            <time datetime="2019-02-02">2</time>
                          </button>
                          <button>
                            <time datetime="2019-02-03">3</time>
                          </button>
                          <button>
                            <time datetime="2019-02-04">4</time>
                          </button>
                          <button>
                            <time datetime="2019-02-05">5</time>
                          </button>
                          <button>
                            <time datetime="2019-02-06">6</time>
                          </button>
                          <button>
                            <time datetime="2019-02-07">7</time>
                          </button>
                          <button>
                            <time datetime="2019-02-08">8</time>
                          </button>
                          <button>
                            <time datetime="2019-02-09">9</time>
                          </button>
                          <button>
                            <time datetime="2019-02-10">10</time>
                          </button>
                          <button>
                            <time datetime="2019-02-11">11</time>
                          </button>
                          <button>
                            <time datetime="2019-02-12">12</time>
                          </button>
                          <button>
                            <time datetime="2019-02-13">13</time>
                          </button>
                          <button>
                            <time datetime="2019-02-14">14</time>
                          </button>
                          <button>
                            <time datetime="2019-02-15">15</time>
                          </button>
                          <button>
                            <time datetime="2019-02-16">16</time>
                          </button>
                          <button>
                            <time datetime="2019-02-17">17</time>
                          </button>
                          <button>
                            <time datetime="2019-02-18">18</time>
                          </button>
                          <button>
                            <time datetime="2019-02-19">19</time>
                          </button>
                          <button>
                            <time datetime="2019-02-20">20</time>
                          </button>
                          <button>
                            <time datetime="2019-02-21">21</time>
                          </button>
                          <button>
                            <time datetime="2019-02-22">22</time>
                          </button>
                          <button>
                            <time datetime="2019-02-23">23</time>
                          </button>
                          <button>
                            <time datetime="2019-02-24">24</time>
                          </button>
                          <button>
                            <time datetime="2019-02-25">25</time>
                          </button>
                          <button>
                            <time datetime="2019-02-26">26</time>
                          </button>
                          <button>
                            <time datetime="2019-02-27">27</time>
                          </button>
                          <button>
                            <time datetime="2019-02-28">28</time>
                          </button>
                        </div>
                      </div>
                    </main>
                    <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
                      <div className="d-flex justify-content-between">
                        <p className="headerActivy ps-3 pt-3">Today Mask</p>
                        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <div className="col-lg-4 align-content-between">
                          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                        </div>
                        <div className="col-lg-1 garisVertical"></div>
                        <div className="col-lg-6 bg-info rounded-3"></div>
                      </div>
                    </div>
                    <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
                      <div className="d-flex justify-content-between">
                        <p className="headerActivy ps-3 pt-3">Today Mask</p>
                        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
                      </div>
                      <div className="d-flex justify-content-between pb-3">
                        <div className="col-lg-4 align-content-between">
                          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                        </div>
                        <div className="col-lg-1 garisVertical"></div>
                        <div className="col-lg-6 bg-info rounded-3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Dashboard_DetailClass;
