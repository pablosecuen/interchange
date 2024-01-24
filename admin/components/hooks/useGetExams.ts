import { useEffect, useState } from 'react';

import { toast } from 'sonner';
import { Exam } from '../(...)/nivelador/crear-examen';
import { baseUrl } from './baseurl';

const useGetExams = () => {
  const [examenes, setExamenes] = useState<Exam[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const obtenerExamenes = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/examen`);
        if (!response.ok) {
          toast.error('Hubo un problema al obtener los exámenes.');
          throw new Error('Hubo un problema al obtener los exámenes.');
        } 
        toast.success('Examenes cargados exitosamente');
        
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
