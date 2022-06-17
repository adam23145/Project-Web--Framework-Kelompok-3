import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateEmail, updatePassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config/firebase-config";
import { collection, doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";

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
    }).catch(error => {
      console.log('Something went wrong with added user to firestore: ', error);
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmailUser,
    updatePasswordUser,
    googleSignIn,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
