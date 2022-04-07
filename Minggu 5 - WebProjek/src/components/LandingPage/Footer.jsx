import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="footer mt-5 pt-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col1">
                <div class="d-flex align-items-center">
                  <img src="img/10.png" alt="" />
                  <h3 class="footer-brand pt-lg-2">scholLine.id</h3>
                </div>
                <p href="#" class="mt-3 d-inline-block text-white">
                  Be smart and creative for nusa and the nation
                </p>
                <a href="#" class="d-block text-white-50 Model4">
                  Learning is easier anywhere and anytime
                </a>
              </div>
              <div class="col-lg-2 col-md-3 col2 mt-4 mt-md-0 homefooter">
                <h3>Home</h3>
                <ul class="ps-0">
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">Pricing</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-3 col3 mt-4 mt-md-0">
                <h3>Features</h3>
                <ul class="ps-0">
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
              <div class="col-lg-4 col-md-4 col4 mt-4 mt-lg-0">
                <h3>Contact us</h3>
                <ul class="ps-0">
                  <li>
                    <a href="">
                      <i class="bx bxl-telegram text-white">
                        {" "}
                        <span class="">devcode0101@gmail.com</span>{" "}
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bx bxs-phone-call"></i> <span>0877-9072-2028</span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="bx bxl-instagram-alt"></i> <span>@shcolLine.id</span>{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col">
                <p class="copy text-white text-center Model4">&copy;2022 scholLine.id. All right reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
