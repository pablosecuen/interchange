import { useState } from 'react';

import {  toast } from "sonner";
import { Exam } from '../(...)/nivelador/crear-examen';
 // Asegúrate de importar los tipos correctos

const useExamCreation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createExam = async (exam: Exam) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/examen/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exam),
      });

      if (!response.ok) {
        throw new Error('Hubo un error al crear el examen.');
      }
      if(response.ok && response.status === 201 || response.status === 200) {
        toast.success("Examen creado con éxito");
      }

      const data = await response.json();


      setLoading(false);
      setError(null);
    } catch (error:any) {
      setLoading(false);
      setError(error.message);
    }
  };

  return { createExam, loading, error };
};

export default useExamCreation;
