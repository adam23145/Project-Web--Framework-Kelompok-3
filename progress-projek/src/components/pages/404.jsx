import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import Img404 from "../assets/ico/icoDashboard/404page.png";

class PageNotFound extends Component {
  render() {
    return (
      <div className="bodyPageNotFound">
        <div className="my-5 pt-sm-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <div>
                    <div className="row justify-content-center">
                      <div className="col-sm-4">
                        <div className="error-img">
                          <img src={Img404} alt="" className="img-fluid mx-auto d-block" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-uppercase mt-4">Sorry, our page not ready for you</h4>
                  <p>Always check this pages if was updating and ready for you</p>
                  <div className="mt-5">
                    <Link to={"/dashboard"}>
                      <button className="btn custBtnReturn shadow">Back to dashboard</button>
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
