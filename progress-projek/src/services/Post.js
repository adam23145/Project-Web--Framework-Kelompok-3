import { domainPath } from "./Config";

const PostDataStudentsAPI = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${domainPath}/${path}`, {
      // method POST untuk input/insert data
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      // kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
      body: JSON.stringify(data), 
    }).then(
      (result) => {
        resolve(result); // reload / refresh data
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

export default PostDataStudentsAPI;