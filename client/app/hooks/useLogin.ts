// useLogin.ts

import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "sonner";
import { baseUrl } from "./baseurl";
import { User } from "../components/navbar";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  updateUser?: (user: User) => void; 
}

interface UseLoginProps {
  formData: FormData;
  rememberMe: boolean;
  handleRememberMe: React.ChangeEventHandler<HTMLInputElement>;
  handleFormDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: (e: any) => void;
  user: User | null;
  updateUser: (user: User) => void;
  
}

const useLogin = (initialFormData: FormData): UseLoginProps => {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const handleRememberMe: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);
  };

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        const userFromServer = await response.json();
        const { Password, ...userDataWithoutPassword } = userFromServer.user;

        setUser(userDataWithoutPassword); // Almacena la información del usuario en el estado
router.push("/")
        toast.success("¡Bienvenido de nuevo!");

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
          sessionStorage.removeItem("user");
        } else {
          sessionStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
          localStorage.removeItem("user");
        }

        // onClose(); Puedes llamar onClose aquí si es necesario, o puedes manejarlo fuera del hook
      } else {
        toast.error("Error al validar credenciales");
      }
    } catch (error) {
      console.error("Error al validar credenciales:", error);
    }
  };

  useEffect(() => {
    if (user && initialFormData.updateUser) {
      // Verifica que updateUser está definido antes de llamarlo
      initialFormData.updateUser(user);
    }
  }, [user, initialFormData.updateUser, initialFormData]);

  return {
    formData,
    rememberMe,
    handleRememberMe,
    handleFormDataChange,
    handleLogin,
    user,
    updateUser: setUser, // Actualiza el estado del usuario en el hook
  };
};

export default useLogin;
