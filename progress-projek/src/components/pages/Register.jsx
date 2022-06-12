import React, { Component, useState } from "react";
import "../css/Login.css";
import logo from "../assets/ico/icoLogin/logo.png";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import { useAuth } from "../../contexts/AuthContext";

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
  const [name, setName] = useState("");
  const [classes, setClass] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  async function handleDaftar(e) {
    e.preventDefault();

    try {
      setLoading(true);
      await signup(email, password, name, classes, date, gender, status);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
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

                        <form id="formLogin" onSubmit={handleDaftar}>
                          <h1 className="font1">Registration</h1>
                          <div>
                            <label htmlFor="" className="f-12 font2">
                              Email
                            </label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                          </div>
                          <div className="wrapper">
                            <label htmlFor="" className="f-12 font2">
                              Password
                            </label>
                            <input type="password" id="passInput" onChange={(e) => setPassword(e.target.value)} placeholder="example@gmail.com"></input>
                            <span className="eye hidden" id="spanEye">
                              <i className="fas fa-eye-slash show-hide" toggle="#passInput" id="iconShowHide"></i>
                            </span>
                          </div>
                          <div>
                            <label htmlFor="" className="f-12 font2">
                              Name
                            </label>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="example@gmail.com"></input>
                          </div>
                          <div>
                            <label htmlFor="class" className="f-12 font2">
                              Class
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="class" onChange={(e) => setClass(e.target.value)} required>
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
                            <input type="date" className="form-control" id="date" onChange={(e) => setDate(e.target.value)} required />
                          </div>
                          <div>
                            <label htmlFor="gender" className="f-12 font2">
                              Gender
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="gender" onChange={(e) => setGender(e.target.value)} required>
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
                            <select defaultValue="" className="form-select customSelect" id="status" onChange={(e) => setStatus(e.target.value)} required>
                              <option value="" disabled>
                                Choose Plan
                              </option>
                              <option value="Free Plan">Free Plan</option>
                              <option value="Personal Plan">Personal Plan</option>
                              <option value="Pro PLan">Pro Plan</option>
                            </select>
                          </div>
                            <button type="submit" className="btn btn-danger daftar1">
                              Sign Up
                            </button>
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
