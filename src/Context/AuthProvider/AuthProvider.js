import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // login with google and github
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
  };

    // logout 
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

    // creating user
  const createUser = (email, password) => {
      setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

    // user signin
  const signIn = (email, password) => {
       setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };
    
    // update user profile 
     const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile);
    };
    
    // email varification
    const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    //     if (currentUser === null || currentUser.emailVerified) {
    //   }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user,loading,setLoading, providerLogin, logOut, createUser, signIn, updateUserProfile,verifyEmail };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
