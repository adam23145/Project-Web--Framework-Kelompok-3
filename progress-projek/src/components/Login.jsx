import React from "react";
import "../components/css/Login.css";
import logo from "../components/assets/imgLogin/logo.png";
import { Link } from "react-router-dom";

const Title = (props) => {
  return <h1 className="font1">Login</h1>;
};
const InputPass = (props) => {
  return (
    <div>
      <label for="" className="f-12 font2">
        Password
      </label>
      <input type="password" placeholder="password"></input>
    </div>
  );
};
const InputEmail = (props) => {
  return (
    <div>
      <label for="" className="f-12 font2">
        Email
      </label>
      <input type="text" placeholder="example@gmail.com"></input>
    </div>
  );
};
const BtnLogin = (props) => {
  return (
    <div className="login1">
      <Link to="/dashboard">
      <button className="font2">Login</button>
      </Link>
    </div>
  );
};
const BtnDaftar = (props) => {
  return (
    <div className="daftar1">
      <button>Daftar</button>
    </div>
  );
};

const Login = () => {
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
          <div class="columnSide color2">
            <div className="">
              <div class="login">
                <img src={logo} alt="" width={95} className="LogoLogin"/>
                <form action="" id="formLogin">
                  <Title />
                  <InputEmail />
                  <InputPass />
                  <BtnLogin />
                  <BtnDaftar />
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
