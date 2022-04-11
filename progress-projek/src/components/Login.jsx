import React, { Component, useState } from "react";
import "../components/css/Login.css";
import logo from "../components/assets/imgLogin/logo.png";
import { Link } from "react-router-dom";


function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const handleproses = () =>{
    if(!email){
      alert('please');
      return;
    }
    if(!password){
      alert('please2');
      return;
    }
  }
  
  
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
                  <img src={logo} alt="" width={95} className="LogoLogin" />
                  <form action="" id="formLogin">
                    <h1 className="font1">Login</h1>;
                    <div>
                      <label for="" className="f-12 font2">
                        Email
                      </label>
                      <input type="text" 
                      onChange={(e)=>setEmail(e.target.value)}
                      placeholder="example@gmail.com"></input>
                    </div>
                    <div>
                      <label for="" className="f-12 font2">
                        Password
                      </label>
                      <input type="password" 
                      onChange={(e)=>setPassword(e.target.value)} 
                      placeholder="password"></input>
                    </div>

                   
                    <div className="login1">
                    <Link to="/dashboard">
                        <button onClick={handleproses} className="font2">Login</button>
                        </Link>
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
