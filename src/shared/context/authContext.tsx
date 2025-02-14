import React, {createContext, useState, useEffect, ReactNode} from 'react';
import {getToken, storeToken, removeToken} from '../utils/tokenStorage';

interface AuthContextType {
  isAuthenticated: boolean;
  signin: (token: string) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      setIsAuthenticated(!!token);
    };
    checkToken();
  }, []);

  const signin = async (token: string) => {
    await storeToken(token);
    setIsAuthenticated(true);
  };

  const signout = async () => {
    await removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{isAuthenticated: !!isAuthenticated, signin, signout}}>
      {children}
    </AuthContext.Provider>
  );
};
