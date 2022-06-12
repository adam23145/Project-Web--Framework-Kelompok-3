import React, { Component, useState } from "react";
import "../css/Login.css";
import logo from "../assets/ico/icoLogin/logo.png";
import { Link } from "react-router-dom";
import $ from "jquery";

class Register extends Component {
  componentDidMount() {
    $(".show-hide").click(function () {
      $(this).toggleClass("fa-eye-slash fa-eye");
      var input = $($(".show-hide").attr("toggle"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
        $("#iconShowHide").css("color", "#5886ef");
      } else {
        input.attr("type", "password");
        $("#iconShowHide").css("color", "#d8d8d8");
      }
    });
  }
  render() {
    return <App />;
  }
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [variabel] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // call api
    await fetch(`http://localhost:3001/daftarSiswa?email=${email}&password=${password}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == variabel) {
          alert("Anda Salah Memasukkan");
        } else {
          alert("Anda Benar Memasukkan");
          window.location = "http://localhost:3000/#/dashboard";
        }
      });
  };

  return (
    <div className="bodyLogin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5 loginCard">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block Side banner">
                    <div className="text-center Title2">
                      <div className="d-block w-100">
                        <img src={require("../assets/ico/icoLogin/gambarBanner.png")} alt="" className="img-fluid" />
                        <h2 className="font1 f-24 mt-5">ScolLine.id</h2>
                        <p className="f-14">Belajar dengan nyaman dimana pun dan kapanpun</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 Side rght">
                    <div className="p-5 py-4">
                      <div className="login">
                        <div className="logo">
                          <img src={logo} alt="" className="LogoLogin" />
                        </div>

                        <form action="" id="formLogin" onSubmit={handleLogin}>
                          <h1 className="font1">Registration</h1>
                          <div>
                            <label for="" className="f-12 font2">
                              Email
                            </label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                          </div>
                          <div className="wrapper">
                            <label for="" className="f-12 font2">
                              Password
                            </label>
                            <input type="password" id="passInput" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                            <span class="eye hidden" id="spanEye">
                              <i class="fas fa-eye-slash show-hide" toggle="#passInput" id="iconShowHide"></i>
                            </span>
                          </div>
                          <div>
                            <label for="" className="f-12 font2">
                              Name
                            </label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                          </div>
                          <div>
                            <label htmlFor="class" className="f-12 font2">
                              Class
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="class" required>
                              <option value="" disabled>
                                Choose class
                              </option>
                              <option value="10">10</option>
                              <option value="11">11</option>
                              <option value="12">12</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="date" className="f-12 font2">
                              Date of Birth
                            </label>
                            <input type="date" className="form-control" id="date" required />
                          </div>
                          <div>
                            <label htmlFor="gender" className="f-12 font2">
                              Gender
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="gender" required>
                              <option value="" disabled>
                                Choose Gender
                              </option>
                              <option value="Laki-laki">Laki-laki</option>
                              <option value="Perempuan">Perempuan</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="status" className="f-12 font2">
                              Status
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="status" required>
                              <option value="" disabled>
                                Choose Plan
                              </option>
                              <option value="Free Plan">Free Plan</option>
                              <option value="Personal Plan">Personal Plan</option>
                              <option value="Pro PLan">Pro Plan</option>
                            </select>
                          </div>

                          <Link to="/register">
                            <button type="submit" className="btn btn-danger daftar1">
                              Sign Up
                            </button>
                          </Link>
                          <div className="text-center">
                            <p className="f-12">
                              Do you already have an account? <Link to="/login">Sign in now</Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
