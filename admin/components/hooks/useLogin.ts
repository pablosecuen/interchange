import { useState, ChangeEvent } from "react";
import { toast } from "sonner";
import { baseUrl } from "./baseurl";
/* import { useRouter } from "next/navigation"; */
import router from "next/router";

export interface FormData {
  email: string;
  password: string;
}

interface UseLoginProps {
  formData: FormData;
  rememberMe: boolean;
  handleRememberMe: React.ChangeEventHandler<HTMLInputElement>;
  handleFormDataChange: (e: ChangeEvent<HTMLInputElement>) => void;
   handleLogin: (formData: FormData) => Promise<boolean>;
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

        if (userFromServer.user.Tipo === "admin" || userFromServer.user.Tipo === "teacher") {
          // Usuario autenticado y es admin o teacher
          const { Password, ...userDataWithoutPassword } = userFromServer.user;
          toast.success("¡Bienvenido de nuevo!");
          router.push("/")
          if (rememberMe) {
            localStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
            sessionStorage.removeItem("user");
          } else {
            sessionStorage.setItem("user", JSON.stringify(userDataWithoutPassword));
            localStorage.removeItem("user");
          }

  
          return true;
           } else {
          // Usuario no es admin ni teacher
          toast.error("Credenciales incorrectas");
          return false;
        }
      } else {
        toast.error("Error al validar credenciales");
         return false;
      }
    } catch (error) {
      console.error("Error al validar credenciales:", error);
         return false;
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
