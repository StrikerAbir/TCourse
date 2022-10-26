import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    // setLoading(true);
    return signOut(auth);
  };

  const createUser = (email, password) => {
    //   setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    };
    
     const signIn = (email, password) => {
    //    setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
     };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // if (currentUser === null || currentUser.emailVerified) {

      // }
      // setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, providerLogin, logOut, createUser,signIn };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
