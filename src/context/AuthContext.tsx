import { createContext, useContext, useEffect, useState } from 'react';
import { getToken, clearAuth } from '../utils/authStorage';

type AuthContextType = {
    isLoggedIn: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({children}: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuth = async () => {
        const token = await getToken();
        setIsLoggedIn(!!token);
        setLoading(false);
    };

    useEffect(() => {
        checkAuth();
    }, []);

    const login = async () => {
        setIsLoggedIn(true);
    }

    const logout = async () => {
        await clearAuth();
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);