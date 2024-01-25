import { useState } from "react";
import { baseUrl } from "./baseurl";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useUserType = (initialType: string) => {
  const router = useRouter();
  const [userType, setUserType] = useState(initialType);

  const updateUserType = async (alumnoID: string, selectedType: string) => {
    
    try {
      const response = await fetch(`${baseUrl}/api/users/tipo/${alumnoID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Tipo: selectedType,
        }),
      });

      if (response.ok) {
        toast.success("Tipo de usuario actualizado con éxito");
        router.refresh()
        return userType; 
      } else {
        toast.error("Error al actualizar el tipo de usuario");
        return null;
      }
    } catch (error) {
      toast.error("Error al actualizar el tipo de usuario");
      console.error("Error al actualizar el tipo de usuario:", error);
      return null;
    }
  };

  return {
    userType,
    setUserType,
    updateUserType,
  };
};

export default useUserType;
