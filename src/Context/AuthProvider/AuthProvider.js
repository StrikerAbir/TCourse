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
    
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
      setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
       setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    };
    
     const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile);
    };
    
    const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
    };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser === null || currentUser.emailVerified) {
          setUser(currentUser);
      }
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
