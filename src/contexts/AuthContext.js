
import { createContext } from "react"

export const AuthContext = createContext();

export function AuthProvider(props) {
    const { children } = props;
    console.log("putaaa");

    const data = {
        accesToken: null,
        user: null,
        login: null,
        logout: null,
        updateUser: null
    }
    
    return (
        <AuthContext.Provider value={data}>       
            {children}
        </AuthContext.Provider>
    )

}