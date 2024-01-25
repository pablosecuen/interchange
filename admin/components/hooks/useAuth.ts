import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

interface UseAuthProps {
  isAuthenticated: boolean;
  checkAuth: () => void;
  userType: string | null;
}

const useAuth = (): UseAuthProps => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userType, setUserType] = useState<string | null>(null);
  
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const userIsLoggedIn: boolean = await checkLoginStatus();
      setIsAuthenticated(userIsLoggedIn);

      if (userIsLoggedIn) {
        const userData = JSON.parse(localStorage.getItem("user") || sessionStorage.getItem("user") || '{}');       
        setUserType(userData?.Tipo || null);
      } else {
        setUserType(null);
      }

      return userType;
    } catch (error) {
      console.error("Error al verificar el inicio de sesión:", error);
      return null;
    }
  };


  useEffect(() => {
    checkAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return {
   isAuthenticated,
    userType,
    checkAuth,
  };
};

// Simulación de la función asíncrona para verificar el inicio de sesión.
const checkLoginStatus = async (): Promise<boolean> => {
  return Boolean(localStorage.getItem("user") || sessionStorage.getItem("user"));
};

export default useAuth;
