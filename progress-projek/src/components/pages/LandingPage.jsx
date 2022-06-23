import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/LandingPage.css";

class LandingPage extends Component {
  render() {
    return <App />;
  }
}

function App() {
  return (
    <div className="bodyLanding">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white custShadowNav custPaddingNav fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={require("../assets/ico/Logo.png")} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" id="btnCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ps-lg-6">
                <li className="nav-item px-lg-3">
                  <a className="nav-link active custFont" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item px-lg-3">
                  <a className="nav-link custFont" href="#blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item px-lg-3">
                  <a className="nav-link custFont" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item px-lg-3">
                  <a className="nav-link custFont" href="#footer">
                    Contact us
                  </a>
                </li>
              </ul>
              <form className="d-flex justify-content-center">
                <Link to="/login">
                  <button className="btn custBtnSignin rounded-18 custFont me-2" type="submit">
                    Sign in
                  </button>
                </Link>
                <Link to="/register">
                  <button className="btn custBtnSignUp rounded-18 custFont" type="submit">
                    Sign Up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <section className="header position-relative" id="home">
        <img className="d-flex customPosition" src={require("../assets/ico/Vector.png")} alt="" />
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
                <img src={require("../assets/ico/ornamen1.png")} className="ornamen1" alt="" />
              </div>
              <img src={require("../assets/ico/GearBiru.png")} className="ornamen2 imgMove" alt="" />
              <div className="ornamen4">
                <img src={require("../assets/ico/GearKuning.png")} className="ornamen4 imgMove" alt="" />
              </div>
              <div className="ornamen3 mt-4 d-flex justify-content-center p-4">
                <img src={require("../assets/ico/GambarBanner.png")} className="ImgBanner" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs" id="blogs">
        <div className="container">
          <h2 className="text-center fontGilroy s-36">Why try online learning?</h2>
          <div className="underline text-center" style={{ marginBottom: "60px" }}>
            <span className="line"></span>
          </div>
          <div className="row mb-5">
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="card mb-lg-0 mb-5">
                <div className="d-flex justify-content-center">
                  <img src={require("../assets/ico/IconTime.png")} className="bg-placeholder" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fontGilroy s-26 mb-3">Flexible Time</h5>
                  <p className="card-text text-center fontNunitoSans custFont s-16">In online learning allows teachers and students to set their own meeting schedules that fit everyone's agenda.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="card mb-lg-0 mb-5">
                <div className="d-flex justify-content-center">
                  <img src={require("../assets/ico/IconClass.png")} className="bg-placeholder" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fontGilroy s-26 mb-3">Class</h5>
                  <p className="card-text text-center fontNunitoSans custFont s-16">Materials in the course or learning adjust the class at the high school level.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="card mb-lg-0 mb-5">
                <div className="d-flex justify-content-center">
                  <img src={require("../assets/ico/IconCertificate.png")} className="bg-placeholder" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fontGilroy s-26 mb-3">Certificates</h5>
                  <p className="card-text text-center fontNunitoSans custFont s-16">The benefit of participating in online learning on this platform is to get a certificate as an award.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex justify-content-center">
              <div className="card">
                <div className="d-flex justify-content-center">
                  <img src={require("../assets/ico/IconPlace.png")} className="bg-placeholder" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center fontGilroy s-26 mb-3">Access anywhere</h5>
                  <p className="card-text text-center fontNunitoSans custFont s-16">In the use of online learning media, teachers and students can use this media anywhere on a mobile or website.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="login" className="btn custBtn1 rounded-6 fontNunitoSans Bold s-16">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="title heading">Pricing</h1>
              <div className="d-flex justify-content-center">
                <h1 className="garis"></h1>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5">
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="card-pricing rounded-4 p-4 white-card1" data-aos="flip-left">
                    <div className="img1">
                      <img src={require("../assets/ico/icoSectionPricing/4.png")} />
                    </div>
                    <div className="text12">
                      <span className="text2">Free Plan</span>
                    </div>
                    <div className="d-flex textbox1 mt-3 justify-content-between me-5">
                      <div className="d-flex">
                        <p className="harga top-0 text-black-50">Rp.</p>
                        <span className="span1 black">0</span>
                      </div>
                      <p className="mt-3 black2 satuan">/Month</p>
                    </div>
                    <p className="subheading1 black">Suitable for early users to be more familiar with the use of this platform.</p>
                    <div className="text-center">
                      <div className="garis2 background-black"></div>
                    </div>
                    <div className="textfitur d-flex mt-lg-3">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/2.png")} alt="" />
                      </div>
                      <div className="col-lg-6 mx-2">
                        <p className="text-right black">1 Courses className</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/2.png")} alt="" />
                      </div>
                      <div className="col-lg-6 mx-2">
                        <p className="text-right black">Certificates</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-6 mx-2">
                        <p className="text-right black">Forum className</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">Explore learning material videos</p>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center btn-plan">
                      <button className="btn choose-plant2">Choose Plan</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="card-pricing rounded-4 p-4 my-4 my-lg-0" data-aos="flip-left" data-aos-delay="300">
                    <div className="img1">
                      <img src={require("../assets/ico/icoSectionPricing/1.png")} alt="" />
                    </div>
                    <div className="text12">
                      <span className="text1">Personal Plan</span>
                    </div>
                    <div className="d-flex textbox1 mt-3">
                      <p className="harga top-0">Rp.</p>
                      <span className="span1">325.000</span>
                      <p className="mt-3 text-white satuan">/Month</p>
                    </div>
                    <p className="subheading1">Suitable for early users to be more familiar with the use of this platform.</p>
                    <div className="text-center">
                      <div className="garis2"></div>
                    </div>
                    <div className="textfitur d-flex mt-lg-3">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/3.png")} alt="" />
                      </div>
                      <div className="w-100 mx-2">
                        <p className="text-right">1 Courses class</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/2.png")} alt="" />
                      </div>
                      <div className="col-lg-6 mx-2">
                        <p className="text-right">Certificates</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/3.png")} alt="" />
                      </div>
                      <div className="col-lg-6 mx-2">
                        <p className="text-right">Forum className</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/3.png")} alt="" />
                      </div>
                      <div className="col-lg-8 mx-2">
                        <div>
                          <p className="text-right">Premium videos & practice questions</p>
                        </div>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/3.png")} alt="" />
                      </div>
                      <div className="col-lg-8 mx-2">
                        <p className="text-right">20x school exam tryout</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/3.png")} alt="" />
                      </div>
                      <div className="col-lg-8 mx-2">
                        <p className="text-right">Examples of questions and exercises</p>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <Link to="/login" className="btn choose-plant">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                  <div className="card-pricing rounded-4 p-4 white-card2" data-aos="flip-left" data-aos-delay="600">
                    <div className="img1">
                      <img src={require("../assets/ico/icoSectionPricing/6.png")} alt="" />
                    </div>
                    <div className="text12">
                      <span className="text2">Pro Plan</span>
                    </div>
                    <div className="d-flex textbox1 mt-3 justify-content-between me-5">
                      <div className="d-flex">
                        <p className="harga top-0 text-black-50">Rp.</p>
                        <span className="span1 black">1.500.000</span>
                      </div>
                      <p className="mt-3 black2 satuan">/Month</p>
                    </div>
                    <p className="subheading1 black">Suitable for early users to be more familiar with the use of this platform.</p>
                    <div className="text-center">
                      <div className="garis2 background-black"></div>
                    </div>
                    <div className="textfitur d-flex mt-lg-3">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">Unlock all courses class</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">12 live className/week sessions</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">90k+ premium video</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">20x school exam tryout with score IRT</p>
                      </div>
                    </div>
                    <div className="textfitur d-flex">
                      <div className="col-lg-1">
                        <img src={require("../assets/ico/icoSectionPricing/5.png")} alt="" />
                      </div>
                      <div className="col-lg-10 mx-2">
                        <p className="text-right black">A collection of practice questions and their discussions</p>
                      </div>
                    </div>
                    <div className="col-lg-12 text-center btn-plan2">
                      <Link to="/login" className="btn choose-plant2">
                        Choose Plan
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner1" id="banner1">
        <div className="container">
          <div className="row bg-background img-fluid mBackground">
            <div className="col-lg-4 mt-lg-4 d-flex justify-content-center align-items-center gambarLogo">
              <img src={require("../assets/ico/icoSectionPricing/8.png")} className="memperkecil" alt="" />
            </div>
            <div className="col-lg-8 mt-lg-1 d-flex justify-content-center align-items-center textLogo">
              <div>
                <h1 className="textLogotop">Come join us now</h1>
                <p className="textsub">Once you join, you can use the platform by adjusting your existing subscription type. Come on, explore together !</p>
                <div className="buttonstart pt-lg-2">
                  <Link to="/login" className="btn py-3 warnabuttonGetStarted d-flex justify-content-center">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-5 pt-5" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col1">
              <div className="d-flex align-items-center">
                <img src={require("../assets/ico/icoSectionPricing/10.png")} alt="" />
                <h3 className="footer-brand pt-lg-2">scholLine.id</h3>
              </div>
              <p href="#" className="mt-3 d-inline-block tagline">
                Be smart and creative for nusa and the nation
              </p>
              <a href="#" className="d-block Model4">
                Learning is easier anywhere and anytime
              </a>
            </div>
            <div className="col-lg-2 col-md-3 col2 mt-4 mt-md-0 homefooter">
              <h3>Home</h3>
              <ul className="ps-0">
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 col3 mt-4 mt-md-0">
              <h3>Features</h3>
              <ul className="ps-0">
                <li>
                  <a href="">Courses</a>
                </li>
                <li>
                  <a href="">Premium videos</a>
                </li>
                <li>
                  <a href="">
                    Examples of <br />
                    questions and <br />
                    exercises
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col4 mt-4 mt-lg-0">
              <h3>Contact us</h3>
              <ul className="ps-0">
                <li>
                  <a href="">
                    <i className="bx bxl-telegram text-white">
                      {" "}
                      <span className="">devcode0101@gmail.com</span>{" "}
                    </i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="bx bxs-phone-call"></i> <span>0877-9072-2028</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="bx bxl-instagram-alt"></i> <span>@shcolLine.id</span>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <p className="copy text-white text-center Model4">&copy;2022 scholLine.id. All right reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default LandingPage;
