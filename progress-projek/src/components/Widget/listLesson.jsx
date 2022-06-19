import React from "react";
import "../css/detail-class.css";

const ListLesson = ({ list, selectList, lessons }) => {
  return (
    <>
      <div className={`card listLesson mb-3 ${lessons.title === list.title && "selectedLesson"}`} onClick={() => selectList(list)}>
        <div className="card-body">{list.title}</div>
      </div>
    </>
  );
};

export default ListLesson;
