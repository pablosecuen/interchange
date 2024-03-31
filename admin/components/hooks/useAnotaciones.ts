import { useRouter } from 'next/router';
import { useMutation } from 'react-query'; // Importamos useMutation de react-query
import { toast } from 'sonner';
import { baseUrl } from './baseurl';

const useAnotaciones = () => {
  const router = useRouter();

  // Definimos la función de mutación para guardar anotaciones
  const guardarAnotacionesMutation = useMutation(
    async (data: { alumnoId: string; nuevasAnotaciones: string }) => {
      const response = await fetch(`${baseUrl}/api/anotaciones/${data.alumnoId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Anotaciones: data.nuevasAnotaciones,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al guardar las anotaciones');
      }

      // No necesitamos invalidar la caché aquí, ya que React Query lo maneja automáticamente
      toast.success('Anotaciones guardadas correctamente');
      setTimeout(() => {
        router.reload();
      }, 1000);
    }
  );

  const guardarAnotaciones = async (alumnoId: string, nuevasAnotaciones: string) => {
    try {
      await guardarAnotacionesMutation.mutateAsync({ alumnoId, nuevasAnotaciones });
    } catch (error: any) {
      console.error('Error al guardar las anotaciones:', error.message);
      toast.error('Error al guardar las anotaciones');
    }
  };

  return {
    guardarAnotaciones,
  };
};

export default useAnotaciones;
