import React, { createContext } from 'react';
import app from '../../Firebase/firebase.config';
import {getAuth} from "firebase/auth"

export const AuthContext = createContext();
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user={displayName: 'bane'}
    const authInfo={user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{ children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;