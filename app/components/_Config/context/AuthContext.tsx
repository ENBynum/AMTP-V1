import { createContext, useContext, useState } from "react";



const AuthContext = createContext(null)

// @ts-ignore
export function AuthProvider({children}) {
    const [user, setUser] = useState<number|null>(null)
    const [role, setRole] = useState<string>('')
    
    function Login(user: number, role: string) {
        setUser(user)
        setRole(role)
    }

    function Logout() {
        setUser(null)
    }

    return (
        <AuthContext.Provider 
            // @ts-ignore
            value={{user, role, Login, Logout}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}