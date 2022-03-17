import React from "react";
import './Login.css';

const LoginRight = (props)=>{
    return(
        <div class="login">
        <form action=''>
        <h1>Login</h1>
              <label for="">Email</label>
              <input type="text"
              placeholder='example@gmail.com'></input>
              <label for="">Password</label>
              <input type="password"
              placeholder='password'></input>
              <div class="login1">
              <button>login</button>
              </div>
              <div class="loginGoogle">
              <button>Google</button>
              </div>
            
        </form>
      </div>
              
    );
};

export default LoginRight;