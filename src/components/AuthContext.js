import { useState } from "react";
import { useContext } from "react";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuhtProvider( children ) {

    const [ currentUser, setCurrentUser ] = useState;

    const user = {
        currentUser
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </div>
    )
};