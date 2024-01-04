"use client";
import { useState, ChangeEvent } from "react";
import { toast } from "sonner";

interface FormData {
  email: string;
  password: string;
}

interface UseLoginProps {
  formData: FormData;
  rememberMe: boolean;
  handleRememberMe: React.ChangeEventHandler<HTMLInputElement>;
  handleFormDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
}

const useLogin = (initialFormData: FormData): UseLoginProps => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

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

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const loginPromise = () => {
        return new Promise<void>((resolve, reject) => {
          if (response.ok) {
            resolve();
          } else {
            reject(new Error("Error al validar credenciales"));
          }
        });
      };

      toast.promise(loginPromise(), {
        loading: 'Validando credenciales...',
        success: '¡Bienvenido de nuevo!',
        error: (err) => err.message,
      });

      if (response.ok) {
        const userFromServer = await response.json();
        const { Password, ...userDataWithoutPassword } = userFromServer.user;

        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
          sessionStorage.removeItem("user");
        } else {
          sessionStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
          localStorage.removeItem("user");
        }
      }
    } catch (error) {
      console.error("Error al validar credenciales:", error);
    }
  };

  return {
    formData,
    rememberMe,
    handleRememberMe,
    handleFormDataChange,
    handleLogin,
  };
};

export default useLogin;

