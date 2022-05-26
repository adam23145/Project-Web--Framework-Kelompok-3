import GetDataAPI from "./Get";
import PostDataAPI from "./Post";
import DeleteDataAPI from "./Delete";

// API - GET
const getListStudents = () => GetDataAPI("daftarSiswa?_sort=nama&_order=asc");
const getListMApel = () => GetDataAPI("daftarMapel");
const getListDashboardTeachers = () => GetDataAPI("daftarGuru");
const getListTeacher = () => GetDataAPI("daftarGuru?_sort=nama&_order=asc");
const getMateri = (getId) => GetDataAPI(`list_MateriMapel?id_materi=${getId}`);
const getJudul = (getId) => GetDataAPI(`daftarMapel?id_Mapel=${getId}`);
const getDetailMateri = (getId) => GetDataAPI(`list_MateriMapel?id=${getId}`);


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
  getListDashboardTeachers,
  getListTeacher,
  getMateri,
  getJudul,
  getDetailMateri,
  postListTeacher,
  deleteListTeacher,
};

export default API;
