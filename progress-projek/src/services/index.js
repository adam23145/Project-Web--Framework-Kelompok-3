import GetDataAPI from "./Get";
import PostDataAPI from "./Post";
import DeleteDataAPI from "./Delete";

// API - GET
const getListStudents = () => GetDataAPI("daftarSiswa?_sort=nama&_order=asc");
const getListMApel = () => GetDataAPI("daftarMapel");
const getListTeacher = () => GetDataAPI("daftarGuru?_sort=nama&_order=asc");

// API - POST
const postListStudents = (postData) => PostDataAPI("daftarSiswa", postData);
const postListTeacher = (postData) => PostDataAPI("daftarGuru", postData);

// API - DELETE
const deleteListStudents = (deleteData) => DeleteDataAPI("daftarSiswa", deleteData);
const deleteListTeacher = (deleteData) => DeleteDataAPI("daftarGuru", deleteData);

const API = {
  //Inisialisasi functuion-function yang akan di sediakan global API
  getListStudents,
  postListStudents,
  getListMApel,
  deleteListStudents,
  getListTeacher,
  postListTeacher,
  deleteListTeacher,
};

export default API;
