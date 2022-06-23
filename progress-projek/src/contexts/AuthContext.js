import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateEmail, updatePassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase-config";
import { addDoc, collection, deleteDoc, doc, getDoc, serverTimestamp, setDoc, Timestamp, updateDoc } from "firebase/firestore";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password, name, classes, date, gender, status) {
    const studentsCollectionRef = collection(db, "students");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(studentsCollectionRef, res.user.uid), {
      uid: res.user.uid,
      name: name,
      email: email,
      password: password,
      classes: classes,
      date: date,
      gender: gender,
      status: status,
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
      timeStamp: serverTimestamp(),
    }).catch((error) => {
      console.log("Something went wrong with added user to firestore: ", error);
    });
  }

  async function signupTeacher(email, password, nip, name, classes, date, gender) {
    const studentsCollectionRef = collection(db, "teacher");
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(studentsCollectionRef, res.user.uid), {
      id_teacher: res.user.uid,
      nip: nip,
      name: name,
      email: email,
      password: password,
      tutor: classes,
      date: date,
      gender: gender,
      gambar: "https://source.unsplash.com/random/200x200?sig=1",
      createdAt: Timestamp.fromDate(new Date()),
      role: "teacher",
      isOnline: true,
      timeStamp: serverTimestamp(),
    }).catch((error) => {
      console.log("Something went wrong with added user to firestore: ", error);
    });
  }

  function addUserTeacher(email, password, nip, name, tutor, date, gender) {
    const teacherCollectionRef = collection(db, "teacher");
    addDoc(teacherCollectionRef, {
      email: email,
      password: password,
      nip: nip,
      name: name,
      tutor: tutor,
      date: date,
      gender: gender,
      role: "teacher",
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
      timeStamp: serverTimestamp(),
    }).catch((error) => {
      console.log("Something went wrong with added user to firestore: ", error);
    });
  }

  function updateUserTeacher(id, email, password, nip, name, tutor, date, gender) {
    const docRef = doc(db, "teacher", id);
    updateDoc(docRef, { email, password, nip, name, tutor, date, gender})
      .then((response) => {
        console.table(response);
        console.log("Berhasil Di Update");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function deleteUserTeacher(id) {
    const docRef = doc(db, "teacher", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document Deleted");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function addUserStudent(email, password, name, classes, date, gender, status) {
    const studentsCollectionRef = collection(db, "students");
    addDoc(studentsCollectionRef, {
      email: email,
      password: password,
      name: name,
      class: classes,
      date: date,
      gender: gender,
      status: status,
      createdAt: Timestamp.fromDate(new Date()),
      isOnline: true,
      timeStamp: serverTimestamp(),
    }).catch((error) => {
      console.log("Something went wrong with added user to firestore: ", error);
    });
  }

  function updateUserStudent(id, email, password, name, classes, date, gender, status) {
    const docRef = doc(db, "students", id);
    updateDoc(docRef, { email, password, name, class: classes, gender, date, status })
      .then((response) => {
        console.table(response);
        console.log("Berhasil Di Update");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function deleteUserStudent(id) {
    const docRef = doc(db, "students", id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document Deleted");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmailUser(email) {
    return updateEmail(auth, email);
  }

  function updatePasswordUser(password) {
    return updatePassword(auth, password);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function infoCurrentUser(uid) {
    const studentsCollectionRef = collection(db, "students");
    return getDoc(doc(studentsCollectionRef, uid));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    signupTeacher,
    logout,
    resetPassword,
    updateEmailUser,
    updatePasswordUser,
    googleSignIn,
    infoCurrentUser,
    addUserTeacher,
    addUserStudent,
    updateUserTeacher,
    updateUserStudent,
    deleteUserTeacher,
    deleteUserStudent,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
