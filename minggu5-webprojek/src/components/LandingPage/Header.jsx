import React, { Component } from "react";
import Vektor from "../assets-Page/ico/Vector.png";
import Ornamen1 from "../assets-Page/ico/ornamen1.png";
import Ornamen2 from "../assets-Page/ico/GearBiru.png";
import Ornamen3 from "../assets-Page/ico/GambarBanner.png";
import Ornamen4 from "../assets-Page/ico/GearKuning.png";

// className Component Header
class Header extends Component {
  render() {
    return (
      <div>
        <section className="header position-relative">
          <img className="d-flex customPosition" src={Vektor} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 position-relative">
                <p className="titleHeader">Learning is easier anywhere and anytime</p>
                <p className="fontNunitoSans s-24 textHeader mb-5">
                  A simplified, to-the-point course made for you. We help you find your dreams by improving your skills. Only in <span className="fontNunitoSans extraBold">scholLine.id</span>
                </p>
                <form className="d-flex center">
                  <button className="btn custBtn1 rounded-6 fontNunitoSans Bold s-16 me-5" type="submit">
                    Get Started
                  </button>
                  <button className="btn custBtn2 rounded-6 fontNunitoSans Bold s-16" type="submit">
                    Learn More
                  </button>
                </form>
              </div>
              <div className="col-lg-6 position-relative d-lg-inline-block d-none">
                <div className="position-relative">
                  <img src={Ornamen1} className="ornamen1" alt="" />
                </div>
                <img src={Ornamen2} className="ornamen2 imgMove" alt="" />
                <div className="ornamen4">
                  <img src={Ornamen4} className="ornamen4 imgMove" alt="" />
                </div>
                <div className="ornamen3 mt-4 d-flex justify-content-center p-4">
                  <img src={Ornamen3} className="ImgBanner" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
