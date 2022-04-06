import React from "react";

//Props adalah “model” data yang memiliki fungsi ganda yaitu selain untuk menyimpan data, 
// Props juga berfungsi untuk “melempar data” antar components view jika ada perubahan data di state.
const BtnDaftar = (props) => {
  return (
    <div className="daftar1">
      <button>Daftar</button>
    </div>
  );
};
export default BtnDaftar;
