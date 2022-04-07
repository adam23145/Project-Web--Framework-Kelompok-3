import React, { Component } from "react";
import "./style.css";
import Img1 from "../assets-Page/ico/1.png";
import Img2 from "../assets-Page/ico/2.png";
import Img3 from "../assets-Page/ico/3.png";
import Img4 from "../assets-Page/ico/4.png";
import Img5 from "../assets-Page/ico/5.png";
import Img6 from "../assets-Page/ico/6.png";
import Img7 from "../assets-Page/ico/7.png";
import Img8 from "../assets-Page/ico/8.png";
import Img10 from "../assets-Page/ico/10.png";
import Footer from "./Footer";

class SectionPricing extends Component {
  render() {
    return (
      <div>
        <section className="pricing section-margin mt-5" id="pricing">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="heading">Pricing</h1>
                <div className="d-flex justify-content-center">
                  <h1 className="garis"></h1>
                </div>
              </div>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <div className="card-pricing rounded-4 p-4 white-card1" data-aos="flip-left">
                      <div className="img1">
                        <img src={Img4} alt="" />
                      </div>
                      <div className="text12">
                        <span className="text2">Free Plan</span>
                      </div>
                      <div className="d-flex textbox1 mt-3 justify-content-between me-5">
                        <div className="d-flex">
                          <p className="harga top-0 text-black-50">Rp.</p>
                          <span className="span1 black">0</span>
                        </div>
                        <p className="mt-3 black2">/Month</p>
                      </div>
                      <p className="subheading1 black">Suitable for early users to be more familiar with the use of this platform.</p>
                      <div className="text-center">
                        <div className="garis2 background-black"></div>
                      </div>
                      <div className="textfitur d-flex mt-lg-3">
                        <div className="col-lg-1">
                          <img src={Img2} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right black">1 Courses className</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img2} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right black">Certificates</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right black">Forum className</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-10 mx-2">
                          <p className="text-right black">Explore learning material videos</p>
                        </div>
                      </div>
                      <div className="col-lg-10 position-absolute bottom-0 pb-4">
                        <button className="btn choose-plant2">Choose Plan</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <div className="card-pricing rounded-4 p-4 my-4 my-lg-0" data-aos="flip-left" data-aos-delay="300">
                      <div className="img1">
                        <img src={Img1} alt="" />
                      </div>
                      <div className="text12">
                        <span className="text1">Personal Plan</span>
                      </div>
                      <div className="d-flex textbox1 mt-3">
                        <p className="harga top-0">Rp.</p>
                        <span className="span1">325.000</span>
                        <p className="mt-3 text-white">/Month</p>
                      </div>
                      <p className="subheading1">Suitable for early users to be more familiar with the use of this platform.</p>
                      <div className="text-center">
                        <div className="garis2"></div>
                      </div>
                      <div className="textfitur d-flex mt-lg-3">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right">1 Courses className</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right">Certificates</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-6 mx-2">
                          <p className="text-right">Forum className</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-8 mx-2">
                          <div>
                            <p className="text-right">Premium videos & practice questions</p>
                          </div>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-8 mx-2">
                          <p className="text-right">20x school exam tryout</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img3} alt="" />
                        </div>
                        <div className="col-lg-8 mx-2">
                          <p className="text-right">Examples of questions and exercises</p>
                        </div>
                      </div>
                      <div className="col-lg-12 text-center">
                        <button className="btn choose-plant">Choose Plan</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 d-flex justify-content-center">
                    <div className="card-pricing rounded-4 p-4 white-card2" data-aos="flip-left" data-aos-delay="600">
                      <div className="img1">
                        <img src={Img6} alt="" />
                      </div>
                      <div className="text12">
                        <span className="text2">Free Plan</span>
                      </div>
                      <div className="d-flex textbox1 mt-3 justify-content-between me-5">
                        <div className="d-flex">
                          <p className="harga top-0 text-black-50">Rp.</p>
                          <span className="span1 black">1.500.000</span>
                        </div>
                        <p className="mt-3 black2">/Month</p>
                      </div>
                      <p className="subheading1 black">Suitable for early users to be more familiar with the use of this platform.</p>
                      <div className="text-center">
                        <div className="garis2 background-black"></div>
                      </div>
                      <div className="textfitur d-flex mt-lg-3">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-8 mx-2">
                          <p className="text-right black">Unlock all courses className</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-10 mx-2">
                          <p className="text-right black">12 live className/week sessions</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-10 mx-2">
                          <p className="text-right black">90k+ premium video</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-10 mx-2">
                          <p className="text-right black">20x school exam tryout with score IRT</p>
                        </div>
                      </div>
                      <div className="textfitur d-flex">
                        <div className="col-lg-1">
                          <img src={Img5} alt="" />
                        </div>
                        <div className="col-lg-10 mx-2">
                          <p className="text-right black">A collection of practice questions and their discussions</p>
                        </div>
                      </div>
                      <div className="col-lg-10 position-absolute bottom-0 pb-4">
                        <button className="btn choose-plant2">Choose Plan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Banner1 */}
        <section className="banner1" id="banner1">
          <div className="container">
            <div className="row bg-background img-fluid mBackground">
              <div className="col-lg-4 mt-lg-4 d-flex justify-content-center align-items-center gambarLogo">
                <img src={Img8} className="memperkecil" alt="" />
              </div>
              <div className="col-lg-8 mt-lg-1 d-flex justify-content-center align-items-center textLogo">
                <div>
                  <h1 className="textLogotop">Come join us now</h1>
                  <p className="textsub">Once you join, you can use the platform by adjusting your existing subscription type. Come on, explore together !</p>
                  <div className="buttonstart pt-lg-2">
                    <a href="" className="btn py-3 warnabuttonGetStarted d-flex justify-content-center">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default SectionPricing;
