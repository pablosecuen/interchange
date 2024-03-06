import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { baseUrl } from './baseurl';
import { Curso } from '../(...)/cursos';

const useFetchCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/Grados`);
        if (!response.ok) {
          toast.error('Error al cargar los cursos');
          throw new Error('Error al cargar los cursos');
        } 


        const data = await response.json();
        const cursoIDs = data.map((curso: Curso) => curso.ID);

        // Realizar una sola llamada al API para obtener todos los pagos
        const pagosResponse = await fetch(`${baseUrl}/api/pagos?Grado_ID=${cursoIDs.join(',')}`);

        
        if (!pagosResponse.ok) {
          toast.error('Error al cargar los pagos de los cursos');
          throw new Error('Error al cargar los pagos de los cursos');
        }
        const pagosData = await pagosResponse.json();

        // Asociar los pagos con los cursos
        const cursosConPagos = data.map((curso: Curso) => ({
          ...curso,
          Pagos: pagosData.filter((pago: any) => pago.Grado_ID === curso.ID),
        }));

        setCursos(cursosConPagos);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  return { cursos, isLoading, error };
};

export default useFetchCursos;
