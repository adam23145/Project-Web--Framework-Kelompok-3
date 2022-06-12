import React, { Component, useState } from "react";
import "../css/Login.css";
import logo from "../assets/ico/icoLogin/logo.png";
import { Link } from "react-router-dom";

function Login() {
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
                        <img src={require("../assets/ico/icoLogin/gambarBanner.png")} alt="" className="img-fluid"/>
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
                          <h1 className="font1">Login</h1>
                          <div>
                            <label for="" className="f-12 font2">
                              Email
                            </label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com"></input>
                          </div>
                          <div>
                            <label for="" className="f-12 font2">
                              Password
                            </label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
                          </div>

                          <div className="login1">
                            <button type="submit" className="font2">
                              Sign In
                            </button>
                          </div>
                          <Link to="/register">
                            <button type="submit" className="btn btn-danger daftar1 mb-0">
                              Sign Up
                            </button>
                          </Link>
                          <div className="text-center">
                           <hr />
                          </div>
                          <div>
                            <button type="submit" className="btn btn-primary daftar2">
                            <img src={require("../assets/ico/icoLogin/googleIco-min.png")} className="logoGoogle me-3"/>Sign Up with Google
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

export default Login;
