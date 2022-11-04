import React from "react";
import { useContext, useState, useEffect } from "react";
// import { auth } from './firebase';
import firebase from 'firebase/compat/app';
// import signup from "./Login";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider( children ) {
    const [ currentUser, setCurrentUser ] = useState;
    const [loading, setLoading] = useState(true)

    const signIn = (name, email, password) => {
        return firebase.createUserWithEmailAndPassword(name, email, password)
    }

    useEffect(() => {
        const unsubscribe = firebase.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe;
    }, [])
    

    const value = {
        currentUser,
        signIn
    };

    return (
        // <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        /* </div> */
    )
};