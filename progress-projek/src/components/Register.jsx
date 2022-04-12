import React, { Component, useState } from "react";
import "../components/css/Login.css";
import logo from "../components/assets/imgLogin/logo.png";
import { Link } from "react-router-dom";


function Register(){
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [tgllahir, setTgllahir] = useState("");
  const [jeniskelamin, setJeniskelamin] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // call api
    await fetch("http://localhost:3001/daftarSiswa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "credentials": "include",
        },
        body: JSON.stringify({
            email,
            nama,
            password,
            kelas,
            tgllahir,
            jeniskelamin,
        }),
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data) {
              alert("Data Tersimpan");
            }
            window.location = "http://localhost:3000/#/login";
        });


};
    return (
      <div className="bodyLogin">
        <div className="formLogin">
          <div class="row">
            <div class="registercolumnSide color1 banner">
              <div className="text-center Title2">
                <h2 className="font1 f-24">ScolLine.id</h2>
                <p className="f-14">Belajar dengan nyaman dimana pun dan kapanpun</p>
              </div>
            </div>
            <div class="columnSide color2">
              <div className="">
                <div class="login">
                  <img src={logo} alt="" width={95} className="LogoLogin" />
                  <form action="" id="formLogin" onSubmit={handleRegister}>
                    <h1 className="font1">Login</h1>;
                    <div>
                      <label for="" className="f-12 font2">
                        Email
                      </label>
                      <input type="text"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@gmail.com"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Nama
                      </label>
                      <input type="nama"
                      id="nama"
                      name="nama"
                      onChange={(e) => setNama(e.target.value)}
                        placeholder="nama"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Password
                      </label>
                      <input type="password"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Kelas
                      </label>
                      <input type="text"
                      id="kelas"
                      name="kelas"
                      onChange={(e) => setKelas(e.target.value)}
                        placeholder="Kelas"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        tgllahir
                      </label>
                      <input type="text"
                      id="tgllahir"
                      name="tgllahir"
                      onChange={(e) => setTgllahir(e.target.value)}
                        placeholder="tgllahir"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        jeniskelamin
                      </label>
                      <input type="text"
                      id="jeniskelamin"
                      name="jeniskelamin"
                      onChange={(e) => setJeniskelamin(e.target.value)}
                        placeholder="jeniskelamin"></input>
                    </div>
                    <div className="login1">
                      <button type="submit">Daftar</button>
                    </div>

                    <div className="daftar1">
                      <Link to="/login">
                        <button className="font2">Login</button>
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


export default Register;
