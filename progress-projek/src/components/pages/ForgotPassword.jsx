import React, { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../assets/ico/icoLogin/logo.png";
import "../css/forgotPassword.css";

const ForgotPassword = () => {
  const email = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="bodyFogotPassword">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5 customCard">
          <div className="card-body p-0">
            <div className="p-5 py-4">
              <div className="content">
                <div className="logo">
                  <img src={logo} alt="" className="LogoLogin" />
                </div>
                <form id="formForgotPass" onSubmit={handleSubmit}>
                  <h1 className="font1">Forgot Password</h1>
                  {error && (
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                      <span>
                        <b>Reset Password Failed:</b> {error}
                      </span>
                    </div>
                  )}
                  {message && (
                    <div className="alert alert-success d-flex align-items-center" role="alert">
                      <span>
                        <b>Success:</b> {error}
                      </span>
                    </div>
                  )}
                  <div className="formInput">
                    <label htmlFor="" className="f-12 font2">
                      Email
                    </label>
                    <input type="text" ref={email} placeholder="example@gmail.com" required></input>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary custBtnForgot" onClick={handleSubmit}>
                      Reset Password
                    </button>
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

export default ForgotPassword;
