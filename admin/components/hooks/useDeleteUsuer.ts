import { useState } from "react";
import { baseUrl } from "../../../client/app/hooks/baseurl";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useDeleteUser = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const deleteUser = async (id: string) => {
  
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${baseUrl}/api/users/${id}`, {
        method: "DELETE",
      });

        if (!response.ok) {
          toast.error("Error al eliminar usuario")
        throw new Error("Error al eliminar usuario");
      }
    toast.success("Usuario eliminado correctamente")
      setSuccess(true);
      router.refresh()
    } catch (error) {
      setError("Error al eliminar usuario");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, deleteUser };
};

export default useDeleteUser;
