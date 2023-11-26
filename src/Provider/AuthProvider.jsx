/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   useEffect(
  //     () => {
  //       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //         setUser(currentUser);
  //         console.log("current user", currentUser);
  //         //   if (currentUser) {
  //         //     const userInfo = { email: currentUser.email };
  //         //     axiosPublice.post("/jwt", userInfo).then((res) => {
  //         //       if (res.data.token) {
  //         //         localStorage.setItem("access-token", res.data.token);
  //         //         setLoading(false);
  //         //       }
  //         //     });
  //         //     //
  //         //   } else {
  //         //     localStorage.removeItem("access-token");
  //         setLoading(false);
  //         //   }
  //       });
  //       return () => {
  //         return unsubscribe();
  //       };
  //     }
  //     //    [axiosPublice]);
  //   );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
