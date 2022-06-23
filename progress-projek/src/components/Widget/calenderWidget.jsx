import React from "react";

const Calender = () => {
  return (
    <div className="bg-light shadow text-center  p-2" style={{ minHeight: "300px", borderRadius: "16px" }}>
    <main>
      <div className="calendar">
        <div className="month-indicator">
          <time dateTime="2019-02"> February 2019 </time>
        </div>
        <div className="day-of-week">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </div>
        <div className="date-grid">
          <button>
            <time dateTime="2019-02-01">1</time>
          </button>
          <button>
            <time dateTime="2019-02-02">2</time>
          </button>
          <button>
            <time dateTime="2019-02-03">3</time>
          </button>
          <button>
            <time dateTime="2019-02-04">4</time>
          </button>
          <button>
            <time dateTime="2019-02-05">5</time>
          </button>
          <button>
            <time dateTime="2019-02-06">6</time>
          </button>
          <button>
            <time dateTime="2019-02-07">7</time>
          </button>
          <button>
            <time dateTime="2019-02-08">8</time>
          </button>
          <button>
            <time dateTime="2019-02-09">9</time>
          </button>
          <button>
            <time dateTime="2019-02-10">10</time>
          </button>
          <button>
            <time dateTime="2019-02-11">11</time>
          </button>
          <button>
            <time dateTime="2019-02-12">12</time>
          </button>
          <button>
            <time dateTime="2019-02-13">13</time>
          </button>
          <button>
            <time dateTime="2019-02-14">14</time>
          </button>
          <button>
            <time dateTime="2019-02-15">15</time>
          </button>
          <button>
            <time dateTime="2019-02-16">16</time>
          </button>
          <button>
            <time dateTime="2019-02-17">17</time>
          </button>
          <button>
            <time dateTime="2019-02-18">18</time>
          </button>
          <button>
            <time dateTime="2019-02-19">19</time>
          </button>
          <button>
            <time dateTime="2019-02-20">20</time>
          </button>
          <button>
            <time dateTime="2019-02-21">21</time>
          </button>
          <button>
            <time dateTime="2019-02-22">22</time>
          </button>
          <button>
            <time dateTime="2019-02-23">23</time>
          </button>
          <button>
            <time dateTime="2019-02-24">24</time>
          </button>
          <button>
            <time dateTime="2019-02-25">25</time>
          </button>
          <button>
            <time dateTime="2019-02-26">26</time>
          </button>
          <button>
            <time dateTime="2019-02-27">27</time>
          </button>
          <button>
            <time dateTime="2019-02-28">28</time>
          </button>
        </div>
      </div>
    </main>
    {/* <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
      <div className="d-flex justify-content-between">
        <p className="headerActivy ps-3 pt-3">Today Mask</p>
        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
      </div>
      <div className="d-flex justify-content-between pb-3">
        <div className="col-lg-4 align-content-between">
          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
        </div>
        <div className="col-lg-1 garisVertical"></div>
        <div className="col-lg-6 bg-info rounded-3"></div>
      </div>
    </div>
    <div className="event mt-lg-3 pe-2 borderActivity shadowNavbar">
      <div className="d-flex justify-content-between">
        <p className="headerActivy ps-3 pt-3">Today Mask</p>
        <p className="showMore pe-1 pt-3 terlihat">Show More</p>
      </div>
      <div className="d-flex justify-content-between pb-3">
        <div className="col-lg-4 align-content-between">
          <p className="showMore ps-3 pt-3 terlihat">07:00 AM</p>
          <p className="showMore ps-3 pt-3 terlihat">08:00 AM</p>
        </div>
        <div className="col-lg-1 garisVertical"></div>
        <div className="col-lg-6 bg-info rounded-3"></div>
      </div>
    </div> */}
  </div>
  )
}
export default Calender;