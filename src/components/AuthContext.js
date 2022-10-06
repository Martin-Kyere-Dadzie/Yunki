import { useContext, useState, useEffect } from "react";
import { auth, Auth } from './Firebase';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuhtProvider( children ) {

    const [ currentUser, setCurrentUser ] = useState;

    const login = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        });
        return unsubscribe;
    }, [])
    

    const value = {
        currentUser,
        signup
    };

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    )
};