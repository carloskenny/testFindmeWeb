import { createContext, ReactNode, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import api from "../services/api";

type User = {
    email: string;

}

type SignInCredentials = {
    email: string;
    password: string;
};

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>;
    isAuthenticated: boolean;
};

type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;




    async function signIn({ email, password }: SignInCredentials) {

        try {
            const response = await api.post('login', {
                email,
                password,
            })

            setUser({
                email,
            })

            console.log(response.data)







        } catch (err) {
            console.log(err);

        }
    }

    return (
        <AuthContext.Provider value={{ signIn, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

