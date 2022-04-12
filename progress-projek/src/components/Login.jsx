import React, { Component, useState } from "react";
import "../components/css/Login.css";
import logo from "../components/assets/imgLogin/logo.png";
import { Link,Route } from "react-router-dom";
import { Navigate } from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

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
        "credentials": "include",
      },
    }).then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data == variabel) {
          alert("Anda Salah Memasukkan");
      }else{
          alert("Anda Benar Memasukkan");
          window.location = "http://localhost:3000/#/dashboard";
      }
      });
  };
  

  return (
    <div className="bodyLogin">
      <div className="formLogin">
        <div class="row">
          <div class="columnSide color1 banner">
            <div className="text-center Title2">
              <h2 className="font1 f-24">ScolLine.id</h2>
              <p className="f-14">Belajar dengan nyaman dimana pun dan kapanpun</p>
            </div>
          </div>
          <div class="columnSide pb-4 color2">
            <div className="">
              <div class="login">
                <img src={logo} alt="" width={95} className="LogoLogin" />
                <form action="" id="formLogin" onSubmit={handleLogin}>
                  <h1 className="font1">Login</h1>
                  <div>
                    <label for="" className="f-12 font2">
                      Email
                    </label>
                    <input type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@gmail.com"></input>
                  </div>
                  <div>
                    <label for="" className="f-12 font2">
                      Password
                    </label>
                    <input type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="password"></input>
                  </div>


                  <div className="login1">
                      <button type="submit" className="font2">Login</button>
                  </div>

                  <div className="daftar1">
                    <Link to="/register">
                      <button>Daftar</button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;
