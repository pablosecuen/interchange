
import { useRouter } from 'next/router';
import { toast } from 'sonner';
import { baseUrl } from './baseurl';

const useAnotaciones = () => {
  const router = useRouter()
  const guardarAnotaciones = async (alumnoId: string, nuevasAnotaciones:string) => {
    try {
      const response = await fetch(`${baseUrl}/api/anotaciones/${alumnoId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Anotaciones: nuevasAnotaciones,
        }),
      });


      if (!response.ok) {
        throw new Error("Error al guardar las anotaciones");
      }

      toast.success("Anotaciones guardadas correctamente");
      setTimeout(() => {
        router.reload(); 
      }, 2000);
    } catch (error: any) {
      console.error("Error al guardar las anotaciones:", error.message);
      toast.error("Error al guardar las anotaciones");
    }
  };

  return {
    guardarAnotaciones,
  };
};

export default useAnotaciones;
