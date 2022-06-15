import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAkMhQq2TU7Xfythz2q_B72ATbCp_Q4yfE",
  authDomain: "schoolineid-434e8.firebaseapp.com",
  databaseURL: "https://schoolineid-434e8-default-rtdb.firebaseio.com",
  projectId: "schoolineid-434e8",
  storageBucket: "schoolineid-434e8.appspot.com",
  messagingSenderId: "405495547016",
  appId: "1:405495547016:web:6e3d810f15d236e4c18b3d",
  measurementId: "G-JW2GQWYWM9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
