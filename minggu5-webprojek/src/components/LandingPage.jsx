import React, { Component } from "react";
import "./LandingPage.css";
import Logo from "../components/assets-Page/ico/Logo.png";
import Header from "./LandingPage/Header";
import SectionBlogs from "./LandingPage/SectionBlogs";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-white custShadowNav custPaddingNav fixed-top">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src={Logo} alt="Logo" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="btnCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ps-lg-6">
                  <li className="nav-item px-lg-3">
                    <a className="nav-link active custFont" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item px-lg-3">
                    <a className="nav-link custFont" href="#">
                      Blogs
                    </a>
                  </li>
                  <li className="nav-item px-lg-3">
                    <a className="nav-link custFont" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item px-lg-3">
                    <a className="nav-link custFont" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
                <form className="d-flex justify-content-center">
                  <button className="btn custBtnSignin rounded-18 custFont me-2" type="submit">
                    Sign in
                  </button>
                  <button className="btn custBtnSignUp rounded-18 custFont" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
        <Header/>
        <SectionBlogs/>
      </div>
    );
  }
}
export default LandingPage;
