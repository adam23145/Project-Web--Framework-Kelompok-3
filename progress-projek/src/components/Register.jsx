import React, { Component, useState } from "react";
import "../components/css/Login.css";
import logo from "../components/assets/imgLogin/logo.png";
import { Link } from "react-router-dom";


class Register extends Component {
  refresh = ()=>{
    window.location.reload();
    this.handleTombolSimpan();
    alert('Berhasil Menyimpan Data');
}
  state = {
    insertDataAcount: {
      id: 1,
      nama: "",
      email: "",
      password: "",
      kelas: "",
      tgllahir: "",
      jeniskelamin: "",
    },
  };

  handleTambahDataAcount = (event) => {
    let forminsertDataAcount = { ...this.state.insertDataAcount };
    let timestamp = new Date().getTime();
    forminsertDataAcount['id'] = timestamp;
    forminsertDataAcount[event.target.name] = event.target.value;
    this.setState({
      insertDataAcount: forminsertDataAcount
    });
  };
  handleTombolSimpan = () => {
    fetch('http://localhost:3001/daftarSiswa/', {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.insertDataAcount)
    })
      .then((response) => {
        
      }
    );
  }
  render() {
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
                  <form action="" id="formLogin">
                    <h1 className="font1">Login</h1>;
                    <div>
                      <label for="" className="f-12 font2">
                        Email
                      </label>
                      <input type="text"
                        id="email"
                        name="email"
                        onChange={this.handleTambahDataAcount}
                        placeholder="example@gmail.com"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Nama
                      </label>
                      <input type="nama"
                      id="nama"
                      name="nama"
                      onChange={this.handleTambahDataAcount}
                        placeholder="nama"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Password
                      </label>
                      <input type="password"
                      id="password"
                      name="password"
                      onChange={this.handleTambahDataAcount}
                        placeholder="password"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Kelas
                      </label>
                      <input type="text"
                      id="kelas"
                      name="kelas"
                      onChange={this.handleTambahDataAcount}
                        placeholder="Kelas"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        tgllahir
                      </label>
                      <input type="text"
                      id="tgllahir"
                      name="tgllahir"
                      onChange={this.handleTambahDataAcount}
                        placeholder="tgllahir"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        jeniskelamin
                      </label>
                      <input type="text"
                      id="jeniskelamin"
                      name="jeniskelamin"
                      onChange={this.handleTambahDataAcount}
                        placeholder="jeniskelamin"></input>
                    </div>
                    <div className="login1">
                      <button type="submit" onClick={this.refresh}>Daftar</button>
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
  }
};


export default Register;
