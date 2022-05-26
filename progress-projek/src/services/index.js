import GetDataStudents from "./Get";
import PostDataStudentsAPI from "./Post";
import DeleteDataStudentsAPI from "./Delete";

// API - GET
const getListStudents = () => GetDataStudents("daftarSiswa?_sort=nama&_order=asc");

// API - POST
const postListStudents = (postData) => PostDataStudentsAPI("daftarSiswa", postData);

// API - DELETE
const deleteListStudents = (deleteData) => DeleteDataStudentsAPI("daftarSiswa", deleteData);

const API = {
  //Inisialisasi functuion-function yang akan di sediakan global API
  getListStudents,
  postListStudents,
  deleteListStudents,
};

export default API;
