import { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { User } from "../components/navbar";
import { baseUrl } from "./baseurl";

interface FormValues {
  phoneAdult: string | number | readonly string[] | undefined;
  emailAdult: string | number | readonly string[] | undefined;
  lastNameAdult: string | number | readonly string[] | undefined;
  firstNameAdult: string | number | readonly string[] | undefined;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
}
interface UseRegisterProps {
  updateUser: (user: User) => void;
   onClose: () => void;
}

const useRegister = ({ updateUser,onClose }: UseRegisterProps) => {
  const [formData, setFormData] = useState<FormValues>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    firstNameAdult: "",
    lastNameAdult: "",
    emailAdult: "",
    phoneAdult: "",
  });
  const router = useRouter();

  const handleSubmit = async (rememberMe: boolean, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Nombre: formData.firstName,
          NombreAdulto: formData.firstNameAdult,
          Apellido: formData.lastName,
          ApellidoAdulto: formData.lastNameAdult,
          Email: formData.email,
          EmailAdulto: formData.emailAdult,
          Telefono: formData.phone,
          TelefonoAdulto: formData.phoneAdult,
          Password: formData.password,
          Tipo: "Alumno",
          Activo: true,
        }),
      });

      if (response.ok) {
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(formData));
          const user = localStorage.getItem("user");
          if (user) {
            const userData = JSON.parse(user);
            updateUser(userData);
          }
          sessionStorage.removeItem("user");
          toast.success("Inicio de sesión exitoso. Datos guardados");
        } else {
          sessionStorage.setItem("user", JSON.stringify(formData));
          const user = sessionStorage.getItem("user");
          if (user) {
            const userData = JSON.parse(user);
            updateUser(userData);
          }
          localStorage.removeItem("user");
        }
        onClose()
        router.push("/campus?section=home");
      } else {
        toast.error("Error al validar credenciales");
      }
    } catch (error) {
      toast.error(`Error al enviar la solicitud: ${error}`);
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  };
};

export default useRegister;
