import { useEffect, useState } from 'react';
import { Exam } from '../nivelador/crear-examen';
import { toast } from 'sonner';

const useGetExams = () => {
  const [examenes, setExamenes] = useState<Exam[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const obtenerExamenes = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/examen');
        if (!response.ok) {
          toast.error('Hubo un problema al obtener los exámenes.');
          throw new Error('Hubo un problema al obtener los exámenes.');
        } else {
          toast.success('Examenes cargados exitosamente');
        }
        
        const data = await response.json();
        setExamenes(data.examenes);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    obtenerExamenes();
  }, []);

  return { examenes, loading, error };
};

export default useGetExams;
