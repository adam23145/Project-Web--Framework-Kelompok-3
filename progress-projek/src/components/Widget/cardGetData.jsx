import React from "react";

const PostDataTeachers = (props) => {
  const statusPlan = () => {
    if (props.status === "Online") {
      return <span class="badge bg-inverse-success">{props.status}</span>;
    } else if (props.status === "Offline") {
      return <span class="badge bg-inverse-danger">{props.status}</span>;
    } else {
      return <span class="badge bg-inverse-primary">{props.status}</span>;
    }
  };

  const statusUser = () => {
    return props.status === !false ?  <span className="badge bg-inverse-success">Online</span> : <span className="badge bg-inverse-danger">Offline</span>;
  };

  return (
    <div className="col-sm-4">
      <div className="card shadow custom-radius custom-card r-12 color-black border-0 mb-4" alt="">
        <div className="card-body p-0">
          <img src={props.gambar} className="bd-placeholder-img"></img>
          <div className="p-3">
            <h5 className="card-title">Profile</h5>
            <div className="row">
              <div class="col-6">NIP :</div>
              <div class="col-6">{props.nip}</div>
              <div class="col-6">Name :</div>
              <div class="col-6">{props.name}</div>
              <div class="col-6">Gender :</div>
              <div class="col-6">{props.gender}</div>
              <div class="col-6">Teacher :</div>
              <div class="col-6">{props.teacher}</div>
              <div class="col-6">Status :</div>
              <div class="col-6">{kondisionalStatus()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDataTeachers;
