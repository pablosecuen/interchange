import { useState } from "react";
import { baseUrl } from "../../../client/app/hooks/baseurl";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useDeleteCampus = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const deleteCampus = async (id: string) => {
  
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${baseUrl}/api/campus/${id}`, {
        method: "DELETE",
      });

        if (!response.ok) {
          toast.error("Error al eliminar contenido")
        throw new Error("Error al eliminar contenido");
      }
    toast.success("contenido eliminado correctamente")
      setSuccess(true);
      router.refresh()
      setLoading(false);
    } catch (error) {
      setError("Error al eliminar contenido");
      setLoading(false);
    } 
  };

  return { loading, error, success, deleteCampus };
};

export default useDeleteCampus;
