import React from "react";
import './css/styleBanner.css';
import './css/styleForm.css';
import Title from "./LoginRIght/Title";
import InputEmail from "./LoginRIght/InputEmail";
import InputPass from "./LoginRIght/InputPass";
import BtnLogin from "./LoginRIght/BtnLogin";
import BtnDaftar from "./LoginRIght/BtnDaftar";
import logo from "./images/logo.png";

const Login = () => {
  return (
    <div className="App">
      <header className="">
        <title>Educagood</title>
      </header>
      <body>
        <div class="container">
          <div class="row">
            <div class="column color1 banner">
              <div className="center Title2">
                <h2 className="font1">ScolLine.id</h2>
                <p>Belajar dengan nyaman dimana pun dan kapanpun</p>
              </div>
            </div>
            <div class="column color2">
              <div className="">
                <div class="login">
                  <img src={logo} alt="" width={95} />
                  <form action="">
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
      </body>
    </div>
  );
};

export default Login;
