import React, { Component, useState } from "react";
import "../css/Login.css";
import logo from "../assets/ico/icoLogin/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import showhidePass from "../js/showHidePass";

class RegisterTeacher extends Component {
  componentDidMount() {
    showhidePass();
  }
  render() {
    return <App />;
  }
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [nip, setNIP] = useState("");
  const [name, setName] = useState("");
  const [classes, setClass] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const { signupTeacher } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleDaftar = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await  signupTeacher(email, password, nip, name, classes, date, gender);
      alert("Registration has been success !");
      history.push("/dashboard-teacher");
    } catch (error) {
      setError(error.code);
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
                        <form id="formLogin" onSubmit={handleDaftar}>
                          <h1 className="font1">Registration</h1>
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
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" required></input>
                          </div>
                          <div className="wrapper">
                            <label htmlFor="" className="f-12 font2">
                              Password
                            </label>
                            <input type="password" id="passInput" minLength="6" onChange={(e) => setPassword(e.target.value)} placeholder="******" required></input>
                            <span className="eye hidden" id="spanEye">
                              <i className="fas fa-eye-slash show-hide" toggle="#passInput" id="iconShowHide"></i>
                            </span>
                          </div>
                          <div className="wrapper">
                            <label htmlFor="" className="f-12 font2">
                              Confirm Password
                            </label>
                            <input type="password" id="passInput2" minLength="6" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="******" required></input>
                            <span className="eye hidden" id="spanEye">
                              <i className="fas fa-eye-slash show-hide2" toggle="#passInput2" id="iconShowHide2"></i>
                            </span>
                          </div>
                          <div>
                            <label htmlFor="" className="f-12 font2">
                              NIP
                            </label>
                            <input type="text" onChange={(e) => setNIP(e.target.value)} placeholder="NIP/Identity Number" required></input>
                          </div>
                          <div>
                            <label htmlFor="" className="f-12 font2">
                              Name
                            </label>
                            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Full name" required></input>
                          </div>
                          <div>
                            <label htmlFor="class" className="f-12 font2">
                              Tutor/Class
                            </label>
                            <select defaultValue="" className="form-select customSelect" id="class" onChange={(e) => setClass(e.target.value)} required>
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
                          <button type="submit" className="btn btn-danger daftar1" disabled={loading}>
                            {loading ? <span className="font2 btnSignin">Wait...</span> : <span className="font2 btnSignin">Sign Up</span>}
                          </button>
                          <div className="text-center">
                            <p className="f-12">
                              Do you already have an account? <Link to="/loginTeacher">Sign in now</Link>
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

export default RegisterTeacher;
