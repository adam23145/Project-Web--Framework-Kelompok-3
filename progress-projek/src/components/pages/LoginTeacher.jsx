import React, { Component, useRef, useState } from "react";
import "../css/Login.css";
import logo from "../assets/ico/icoLogin/logo.png";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import showhidePass from "../js/showHidePass";

class LoginTeacher extends Component {
  componentDidMount() {
    showhidePass();
  }
  render() {
    return <App />;
  }
}

function App() {
  const email = useRef();
  const password = useRef();
  const { loginTeacher, currentUser, googleSignInTeacher } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await loginTeacher(email.current.value, password.current.value);
      alert("Login Success");
      history.push("/dashboard-teacher");
    } catch (error) {
      setError(error.code);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      setError("");
      await googleSignInTeacher();
      history.push("/dashboard-teacher");
    } catch (error) {
      console.log(error.code);
    }
  };

  if (currentUser) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="bodyLogin">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5 loginCard">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block Side bannerTeacher">
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
                          <form id="formLogin" onSubmit={handleLogin}>
                            <h1 className="font1">Login</h1>
                            {error && (
                              <div className="alert alert-danger d-flex align-items-center" role="alert">
                                <span>
                                  <b>Login Failed:</b> {error}
                                </span>
                              </div>
                            )}
                            <div>
                              <label htmlFor="" className="f-12 font2">
                                Email
                              </label>
                              <input type="text" ref={email} placeholder="example@gmail.com" required></input>
                            </div>
                            <div className="wrapper">
                              <label htmlFor="" className="f-12 font2">
                                Password
                              </label>
                              <input type="password" id="passInput" minLength="6" ref={password} placeholder="password" required></input>
                              <span className="eye hidden" id="spanEye">
                                <i className="fas fa-eye-slash show-hide" toggle="#passInput" id="iconShowHide"></i>
                              </span>
                            </div>
                            <div className="forgotPassword">
                              <Link to="/forgotPassword" className="linkForgotPassword">
                                <span>Forgot Password ?</span>
                              </Link>
                            </div>

                            <div className="login1">
                              <button type="submit" className="btn btn-primary customBtnSignIn" disabled={loading}>
                                {loading ? <span className="font2 btnSignin">Wait...</span> : <span className="font2 btnSignin">Sign In</span>}
                              </button>
                            </div>
                            <Link to="/registerTeacher">
                              <button type="submit" className="btn btn-danger daftar1 mb-0">
                                Sign Up
                              </button>
                            </Link>
                            <div className="text-center">
                              <hr />
                            </div>
                            <div>
                              <button type="submit" className="btn btn-primary daftar2" onClick={handleGoogleSignIn}>
                                <img src={require("../assets/ico/icoLogin/googleIco-min.png")} className="logoGoogle me-3" />
                                Sign In with Google
                              </button>
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
}

export default LoginTeacher;
