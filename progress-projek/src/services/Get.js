import { domainPath } from "./Config";

const GetDataAPI = (path) => {
  const promise = new Promise((resolve, reject) => {
    // alamat URL API yang ingin kita anbil datanya
    fetch(`${domainPath}/${path}`) 
      // ubah response data dari URL API menjadi sebuah data json
      .then((response) => response.json()) 
      .then(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
  });
  return promise;
};

export default GetDataAPI;