import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/Dashboard.css";
import PostDataStudents from "./insight/postStudents";
import sideBar from "./js/collapseSidebar";
import renderTime from "./js/currentTime";
import searchBar from "./js/searchBar";
import API from "../services/index";
import Calender from "./insight/calenderWidget";

class AdminStudents extends Component {
  handleReset = () => {
    Array.from(document.querySelectorAll("input, textarea, select")).forEach((input) => (input.value = ""));
    this.setState({
      insertData: {
        id: 1, nama: "", email: "", password: "", kelas: "", tgllahir: "", jeniskelamin: "", status: "",
      },
    });
  };
  state = {
    daftarSiswa: [],
    insertData: {
      id: 1,
      nama: "",
      email: "",
      password: "",
      kelas: "",
      tgllahir: "",
      jeniskelamin: "",
      status: "",
    },
  };
  getDataApi = () => {
    API.getListStudents().then((result) => {
      this.setState({
        daftarSiswa: result,
      });
    });
  };
  componentDidMount() {
    this.getDataApi();
    sideBar();
    renderTime();
    searchBar();
  }
  handleTambahData = (event) => {
    let formInsertData = { ...this.state.insertData };
    let timestamp = new Date().getTime();
    formInsertData["id"] = timestamp;
    formInsertData[event.target.name] = event.target.value;
    this.setState({
      insertData: formInsertData,
    });
  };
  handleTombolSimpan = () => {
    // fungsi untuk meng-handle tombol simpan
    API.postListStudents(this.state.insertData).then((response) => {
      this.getDataApi();
    });
    this.handleReset(); // reset input setelah tombol simpan di klik
  };
  handleHapusData = (data) => {
    // fungsi yang meng-handle button action hapus data
    API.deleteListStudents(data).then((response) => {
      this.getDataApi();
    });
  };
  render() {
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
                              <a href="" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_Students">
                                <i class="fas fa-plus"></i>
                              </a>
                            </div>

                            <div class="card-body custom-bodyCard">
                              <div class="row">
                                {this.state.daftarSiswa.map((dataStudents) => {
                                  // looping dan masukkan untuk setiap data yang ada di listartikel ke variabel artikel
                                  return <PostDataStudents
                                  gambar={"https://source.unsplash.com/random/200x200?sig=" + dataStudents.id} 
                                  name={dataStudents.nama} 
                                  email={dataStudents.email} 
                                  password={dataStudents.password}
                                  class={dataStudents.kelas}
                                  dateOfBirth={dataStudents.tgllahir} 
                                  gender={dataStudents.jeniskelamin} 
                                  status={dataStudents.status} 
                                  idData={dataStudents.id} 
                                  hapusData={this.handleHapusData} />; // mappingkan data json dari API sesuai dengan kategorinya
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
                  <Calender/>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Modal  */}
        <div className="modal fade custom-modal" id="add_Students" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Add Students</h5>
                <button type="button" className="close btn-danger" data-bs-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Name</label>
                      <input class="form-control" type="text" id="nama" name="nama" onChange={this.handleTambahData} />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Email</label>
                      <input class="form-control" type="email" id="email" name="email" onChange={this.handleTambahData} />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Password</label>
                      <input class="form-control" type="password" id="password" name="password" onChange={this.handleTambahData} />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Class</label>
                      <select class="form-select" aria-label="Select class" id="kelas" name="kelas" onChange={this.handleTambahData}>
                        <option selected>Choose class</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Date of Birth</label>
                      <input class="form-control" type="text" id="tgllahir" name="tgllahir" onChange={this.handleTambahData} />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Gender</label>
                      <select class="form-select" aria-label="Select gender" id="jeniskelamin" name="jeniskelamin" onChange={this.handleTambahData}>
                        <option selected>Choose gender</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="col-form-label">Status</label>
                      <select class="form-select" aria-label="Default select example" id="status" name="status" onChange={this.handleTambahData}>
                        <option selected>Choose Plan</option>
                        <option value="Free Plan">Free Plan</option>
                        <option value="Personal Plan">Personal Plan</option>
                        <option value="Pro Plan">Pro Plan</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Keluar
                </button>
                <button type="button" className="btn btn-primary" onClick={this.handleTombolSimpan}>
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AdminStudents;
