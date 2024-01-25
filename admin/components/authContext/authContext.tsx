import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import useAuth from "../hooks/useAuth";
import useLogin, { FormData } from "../hooks/useLogin";

interface AuthContextProps {
  isAuthenticated: boolean;
  userType: string | null;
  login: (formData: FormData) => Promise<void>;
  checkAuth: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { isAuthenticated, checkAuth, userType } = useAuth();
  const { handleLogin } = useLogin({ email: "", password: "" });

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = async (formData: FormData) => {
    await handleLogin(formData);
    checkAuth();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, userType, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
