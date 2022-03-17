import React from "react";
import "./Login.css";
import imgBanner from "../images/people.png"

const Title = () => {
  return <h1>Login</h1>;
};

const InputEmail = () => {
  return (
    <div>
      <label for="">Email</label>
      <input type="text" placeholder="example@gmail.com"></input>
    </div>
  );
};

const InputPass = () => {
  return (
    <div>
      <label for="">Password</label>
      <input type="password" placeholder="password"></input>
    </div>
  );
};

const BtnLogin = () => {
  return (
    <div className="login1">
      <button>login</button>
    </div>
  );
};

const Login = () => {
  return (
    <div className="App">
      <header className="">
        <title>Educagood</title>
      </header>
      <body>
        <div class="container">
          <div class="right">
            <img src={imgBanner} alt=""></img>
          </div>
          <div class="login">
            <form action="">
              {Title()}
              {InputEmail()}
              {InputPass()}
              {BtnLogin()}
            </form>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
