import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import Img404 from "../assets/ico/icoDashboard/404page.png";

class PageNotFound extends Component {
  render() {
    return (
      <div className="bodyPageNotFound">
        <div class="my-5 pt-sm-5">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="text-center">
                  <div>
                    <div class="row justify-content-center">
                      <div class="col-sm-4">
                        <div class="error-img">
                          <img src={Img404} alt="" class="img-fluid mx-auto d-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 class="text-uppercase mt-4">Sorry, our page not ready for you</h4>
                  <p>Always check this pages if was updating and ready for you</p>
                  <div class="mt-5">
                    <Link to={"/dashboard"}>
                      <button class="btn custBtnReturn shadow">Back to dashboard</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PageNotFound;
