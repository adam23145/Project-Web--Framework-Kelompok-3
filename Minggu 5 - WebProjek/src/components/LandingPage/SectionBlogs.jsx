import React, { Component } from "react";
import IcoTime from "../assets-Page/ico/IconTime.png";
import IcoClass from "../assets-Page/ico/IconClass.png";
import IcoCertif from "../assets-Page/ico/IconCertificate.png";
import IcoPlace from "../assets-Page/ico/IconPlace.png";

// Class Component SectionBlogs
class SectionBlogs extends Component {
  render() {
    return (
      <div>
        <section class="blogs">
          <div class="container">
            <h2 class="text-center fontGilroy s-36">Why try online learning?</h2>
            <div class="underline text-center" style={{ marginBottom: "60px" }}>
              <span class="line"></span>
            </div>
            <div class="row mb-5">
              <div class="col-lg-3 col-md-6 d-flex justify-content-center">
                <div class="card mb-lg-0 mb-5">
                  <div class="d-flex justify-content-center">
                    <img src={IcoTime} class="bg-placeholder" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center fontGilroy s-26 mb-3">Card title</h5>
                    <p class="card-text text-center fontNunitoSans custFont s-16">In online learning allows teachers and students to set their own meeting schedules that fit everyone's agenda.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-flex justify-content-center">
                <div class="card mb-lg-0 mb-5">
                  <div class="d-flex justify-content-center">
                    <img src={IcoClass} class="bg-placeholder" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center fontGilroy s-26 mb-3">Card title</h5>
                    <p class="card-text text-center fontNunitoSans custFont s-16">In online learning allows teachers and students to set their own meeting schedules that fit everyone's agenda.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-flex justify-content-center">
                <div class="card mb-lg-0 mb-5">
                  <div class="d-flex justify-content-center">
                    <img src={IcoCertif} class="bg-placeholder" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center fontGilroy s-26 mb-3">Card title</h5>
                    <p class="card-text text-center fontNunitoSans custFont s-16">In online learning allows teachers and students to set their own meeting schedules that fit everyone's agenda.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 d-flex justify-content-center">
                <div class="card">
                  <div class="d-flex justify-content-center">
                    <img src={IcoPlace} class="bg-placeholder" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center fontGilroy s-26 mb-3">Card title</h5>
                    <p class="card-text text-center fontNunitoSans custFont s-16">In online learning allows teachers and students to set their own meeting schedules that fit everyone's agenda.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn custBtn1 rounded-6 fontNunitoSans Bold s-16" type="submit">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SectionBlogs;
