"use client"
import { useState, useEffect } from 'react';
import {  toast } from 'sonner'

export interface Curso {
  ID: number;
  Grado_Nombre: string;
  Grado_Categoria: string;
}

const useFetchCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<any>();


  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/Grados');
        if (!response.ok) {
          setSucess(response)
          toast.error('Error al cargar los cursos');
        } 

 

        const data = await response.json();
        // Obtener los pagos asociados a cada curso
        const cursosConPagos = await Promise.all(
          data.map(async (curso: Curso) => {
            const pagosResponse = await fetch(`http://localhost:3001/api/pagos?Grado_ID=${curso.ID}`);
            if (!pagosResponse.ok) {
              throw new Error('Error al cargar los pagos del curso');
            }
            const pagosData = await pagosResponse.json();

      
            return {
              ...curso,
              Pagos: pagosData,
            };
          })
        );

        toast.success('Cursos listados exitosamente');
        setCursos(cursosConPagos);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);


  return { cursos, isLoading, error };
};

export default useFetchCursos;
