import GetDataAPI from "./Get";
import PostDataAPI from "./Post";
import DeleteDataAPI from "./Delete";

// API - GET
const getListStudents = () => GetDataAPI("daftarSiswa?_sort=nama&_order=asc");
const getJudul = (getId) => GetDataAPI(`daftarMapel?id_Mapel=${getId}`);
const getMateri = (getId) => GetDataAPI(`list_MateriMapel?id_materi=${getId}`);
const getdetailMateri = (getId) => GetDataAPI(`list_MateriMapel?id=${getId}`);

// API - POST
const postListStudents = (postData) => PostDataAPI("daftarSiswa", postData);

// API - DELETE
const deleteListStudents = (deleteData) => DeleteDataAPI("daftarSiswa", deleteData);

const API = {
  //Inisialisasi functuion-function yang akan di sediakan global API
  getListStudents,
  getJudul,
  getMateri,
  getdetailMateri,
  postListStudents,
  deleteListStudents,
};

export default API;
