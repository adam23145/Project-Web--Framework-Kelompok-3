import React from "react";
import './components/Login';

const textLogin = () => {
  return <h1>Login</h1>;
};

const InputEmail = () => {
  return (<label htmlFor="Email">Email</label>), (<input type="text" id="Email" />);
};

const InputPassword = () => {
  return (<label htmlFor="Password">Password</label>), (<input type="password" id="password" />);
};

const ButtonLogin = () => {
  return (
    <div>
      <button>Login</button>
    </div>
  );
};

const ButtonLoginGoogle = () => {
  return (
    <div>
      <button>LoginGoogle</button>
    </div>
  );
};

const Daftar = () => {
  return (
    <div>
      <p>
        Belum punya akun? <a href="#">Daftar Disini</a>
      </p>
    </div>
  );
};

const Login = () => {
  return (
    <body>
      <div class="container">
        <div class="right">
          <img src={adam} alt=""></img>
        </div>
        <div class="login">
          <form action="">
						<textLogin />
						<InputEmail />
						<InputPassword />
						<ButtonLogin />
						<ButtonLoginGoogle />
						<Daftar />
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;
