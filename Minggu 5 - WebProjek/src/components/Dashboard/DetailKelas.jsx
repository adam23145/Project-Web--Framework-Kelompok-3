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
        <div class="sidebar">
          <div class="logo-details">
            <img src="./img/Logo1.png" alt="--" />
            <span class="logo_name">scholLine.id</span>
          </div>
          <ul class="nav-links">
            <li class="nav-item active">
              <a href="#" class="focusMenu">
                <i class="bx bxs-category ico2"></i>
                <span class="link_name">Dashboard</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="focusMenu">
                <div class="frame-ico">
                  <img src="./img/School.png" alt="item2" />
                </div>
                <span class="link_name">Courses</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Courses
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="focusMenu">
                <div class="frame-ico">
                  <img src="./img/Schedule.png" alt="" />
                </div>
                <span class="link_name">Schedule</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Data Akun
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="focusMenu">
                <div class="frame-ico">
                  <img src="./img/people.png" alt="logo1" />
                </div>
                <span class="link_name">List Teachers</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    List Teachers
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="focusMenu">
                <div class="frame-ico">
                  <img src="./img/Quiz.png" alt="logo1" />
                </div>
                <span class="link_name">Quiz</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Quiz
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <hr class="seperator" />
            </li>
            <li class="nav-item">
              <a href="#" class="focusMenu">
                <div class="frame-ico">
                  <img class="ico2" src="./img/Logout.png" alt="logo1" />
                </div>
                <span class="link_name">Sign Out</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="dataPemesanan.php">
                    Pemesanan
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <!-- Content --> */}
        <div class="home-section">
          <div class="home-content d-flex justify-content-end align-items-center mb-4">
            <div class="menu">
              <i class="bx bx-menu"></i>
            </div>
            <nav class="custNav">
              <ul class="nav">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="dropdownProfile" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img class="img-profile rounded-circle" src="./img/profile.png" />
                    <span class="RobotoReg14">kelompok 3</span>
                  </a>

                  <ul class="dropdown-menu border-0 dropdown-menu-end shadow" aria-labelledby="dropdownProfile">
                    <li>
                      <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#editDataAdministrator<?php echo $sesID ?>">
                        <i class="las la-user mr-2"></i>My Profile
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="logout.php">
                        {" "}
                        <i class="las la-sign-out-alt mr-2"></i> Sign Out{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- isi --> */}
          <div class="container">
            <div class="row rowCustom">
              <div class="col-8">
                <div class="Course px-5 py-4">
                  <div class="d-flex justify-content-between">
                    <h6 class="heading">Kimia: Class X</h6>
                    <div class="chooseClass d-flex">
                      <h6>Choose class :</h6>
                      <div class="borderclass"></div>
                    </div>
                  </div>
                  <div class="chooseClass d-flex mt-2">
                    <h6>Semester :</h6>
                    <div class="borderclass"></div>
                  </div>
                  <div class="d-flex justify-content-between">
                    <img src="img/Video.png" class="imgVideo mt-3" alt="" />
                    <div class="bab mt-3">
                      <div class="borderclass2">
                        <p class="text-white pt-1 fw-bold">1. Teori Atom</p>
                      </div>
                      <div class="borderclass3 mt-2">
                        <p class="text-black pt-1 fw-bold">2. Struktur Atom</p>
                      </div>
                      <div class="borderclass3 mt-2">
                        <p class="text-black pt-1 fw-bold">2. Struktur Atom</p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="textDetail mt-4 col-lg-6 me-lg-3">
                      <h6 class="header fw-bold">Teori Atom</h6>
                      <p>
                        ada beberapa abad sebelum masehi, filsuf-filsuf Yunani, di antaranya Leucippus dan Democritus berpendapat bahwa semua materi terdiri dari partikel-partikel kecil yang tak terbagi. Democritus menyatakan bahwa jika suatu materi dibagi menjadi bagian yang lebih kecil kemudian terus dibagi lagi maka akan sampai pada suatu saat
                        di mana didapat bagian yang sangat kecil yang tidak dapat dihancurkan atau dibagi lagi yang disebut atom (‘atomos’ dalam bahasa Yunani yang artinya ‘tak terbagi
                      </p>
                      <button class="btn btnReadMore">Read more</button>
                    </div>
                    <div class="col-lg-4 mt-4 ms-5">
                      <div class="cardPengajar d-flex pt-2 ps-2">
                        <div class="mt-1">
                          <img src="img/5.png" alt="" class="img-fluid" />
                        </div>
                        <div class="cardNama ms-3">
                          <h6 class="ms-3 text-white">Adam Dwi</h6>
                          <p class="ms-3 text-white">Pengajar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <main>
                  <div class="calendar">
                    <div class="month-indicator">
                      <time datetime="2019-02"> February 2019 </time>
                    </div>
                    <div class="day-of-week">
                      <div>Su</div>
                      <div>Mo</div>
                      <div>Tu</div>
                      <div>We</div>
                      <div>Th</div>
                      <div>Fr</div>
                      <div>Sa</div>
                    </div>
                    <div class="date-grid">
                      <button>
                        <time datetime="2019-02-01">1</time>
                      </button>
                      <button>
                        <time datetime="2019-02-02">2</time>
                      </button>
                      <button>
                        <time datetime="2019-02-03">3</time>
                      </button>
                      <button>
                        <time datetime="2019-02-04">4</time>
                      </button>
                      <button>
                        <time datetime="2019-02-05">5</time>
                      </button>
                      <button>
                        <time datetime="2019-02-06">6</time>
                      </button>
                      <button>
                        <time datetime="2019-02-07">7</time>
                      </button>
                      <button>
                        <time datetime="2019-02-08">8</time>
                      </button>
                      <button>
                        <time datetime="2019-02-09">9</time>
                      </button>
                      <button>
                        <time datetime="2019-02-10">10</time>
                      </button>
                      <button>
                        <time datetime="2019-02-11">11</time>
                      </button>
                      <button>
                        <time datetime="2019-02-12">12</time>
                      </button>
                      <button>
                        <time datetime="2019-02-13">13</time>
                      </button>
                      <button>
                        <time datetime="2019-02-14">14</time>
                      </button>
                      <button>
                        <time datetime="2019-02-15">15</time>
                      </button>
                      <button>
                        <time datetime="2019-02-16">16</time>
                      </button>
                      <button>
                        <time datetime="2019-02-17">17</time>
                      </button>
                      <button>
                        <time datetime="2019-02-18">18</time>
                      </button>
                      <button>
                        <time datetime="2019-02-19">19</time>
                      </button>
                      <button>
                        <time datetime="2019-02-20">20</time>
                      </button>
                      <button>
                        <time datetime="2019-02-21">21</time>
                      </button>
                      <button>
                        <time datetime="2019-02-22">22</time>
                      </button>
                      <button>
                        <time datetime="2019-02-23">23</time>
                      </button>
                      <button>
                        <time datetime="2019-02-24">24</time>
                      </button>
                      <button>
                        <time datetime="2019-02-25">25</time>
                      </button>
                      <button>
                        <time datetime="2019-02-26">26</time>
                      </button>
                      <button>
                        <time datetime="2019-02-27">27</time>
                      </button>
                      <button>
                        <time datetime="2019-02-28">28</time>
                      </button>
                    </div>
                  </div>
                </main>
                <div class="event mt-lg-3 pe-2 borderActivity">
                  <div class="d-flex justify-content-between">
                    <p class="headerActivy ps-3 pt-3">Today Mask</p>
                    <p class="showMore pe-1 pt-3 terlihat">Show More</p>
                  </div>
                  <div class="d-flex justify-content-between pb-3">
                    <div class="col-lg-4 align-content-between">
                      <p class="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                      <p class="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                    </div>
                    <div class="col-lg-1 garisVertical"></div>
                    <div class="col-lg-6 bg-info rounded-3"></div>
                  </div>
                </div>
                <div class="event mt-lg-3 pe-2 borderActivity">
                  <div class="d-flex justify-content-between">
                    <p class="headerActivy ps-3 pt-3">Today Mask</p>
                    <p class="showMore pe-1 pt-3 terlihat">Show More</p>
                  </div>
                  <div class="d-flex justify-content-between pb-3">
                    <div class="col-lg-4 align-content-between">
                      <p class="showMore ps-3 pt-3 terlihat">07:00 AM</p>
                      <p class="showMore ps-3 pt-3 terlihat">08:00 AM</p>
                    </div>
                    <div class="col-lg-1 garisVertical"></div>
                    <div class="col-lg-6 bg-info rounded-3"></div>
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

export default SectionBlogs;
