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
    return props.status === !false ? <span className="badge bg-inverse-success">Online</span> : <span className="badge bg-inverse-danger">Offline</span>;
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={props.id}>
      <div className="card card-profile">
        <div className="card-header justify-content-end pb-0"></div>
        <div className="card-body pt-2">
          <div className="text-center">
            <div className="profile-photo mt-2">
              <img src={props.srcImg} width="100" className="img-fluid rounded-circle" alt="" />
            </div>
            <h3 className="mt-4 mb-1 nameUser">{props.name}</h3>
            <p className="text-muted">{props.tutor} Teacher</p>
          </div>
          <div>
            <div className="row g-0 py-1">
              <div className="col-6">
                <span className="mb-0">NIP :</span>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <b>{props.nip}</b>
              </div>
            </div>
            <div className="row g-0 py-1">
              <div className="col-6">
                <span className="mb-0">Email :</span>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <b>{props.email}</b>
              </div>
            </div>
            <div className="row g-0 py-1">
              <div className="col-6">
                <span className="mb-0">Gender :</span>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <b>{props.gender}</b>
              </div>
            </div>
            <div className="row g-0 py-1">
              <div className="col-6">
                <span className="mb-0">Date :</span>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <b>{props.date}</b>
              </div>
            </div>
            <div className="row g-0 py-1">
              <div className="col-6">
                <span className="mb-0">Status :</span>
              </div>
              <div className="col-6" style={{ textAlign: "right" }}>
                <b>{statusUser()}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="text-center">
            <a className="btn btn-outline-primary btn-rounded px-4" href="/#">
              Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDataTeachers;
