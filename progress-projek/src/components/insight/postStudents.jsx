import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import React from "react";

const PostDataStudents = (props) => {

  function deleteData(id){
    const docRef = doc(db, "students", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document Deleted");

      })
      .catch((error) => console.log(error.message));
  }

  const kondisionalStatus = () => {
    if (props.status === "Free Plan") {
      return <span class="badge bg-inverse-success">{props.status}</span>;
    } else if (props.status === "Personal Plan") {
      return <span class="badge bg-personalPlan">{props.status}</span>;
    } else if (props.status === "Pro Plan") {
      return <span class="badge bg-proPlan">{props.status}</span>;
    } else {
      return <span class="badge bg-inverse-success">Free Plan</span>;
    }
  };

  return (
    <div className="col-sm-4">
      <div className="card shadow custom-radius custom-card r-12 color-black border-0 mb-4">
        <div className="card-body p-0">
          <img src={props.gambar} className="bd-placeholder-img"></img>
          <div className="p-3">
            <h5 className="card-title">Profile</h5>
            <div className="row">
              <div class="col-6">Name :</div>
              <div class="col-6">{props.name}</div>
              <div class="col-6">Email :</div>
              <div class="col-6">{props.email}</div>
              <div class="col-6">Password :</div>
              <div class="col-6">{props.password}</div>
              <div class="col-6">Class :</div>
              <div class="col-6">{props.class}</div>
              <div class="col-6">Tanggal Lahir :</div>
              <div class="col-6">{props.date}</div>
              <div class="col-6">Gender :</div>
              <div class="col-6">{props.gender}</div>
              <div class="col-6">Status :</div>
              <div class="col-6">{kondisionalStatus()}</div>
            </div>
            <div className="col-12 text-center mt-4">
              <botton className="btn delete-btn btn-danger" onClick={() => deleteData(props.idItem)}>
                Hapus
              </botton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDataStudents;
