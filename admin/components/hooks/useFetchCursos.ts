"use client"
import { useState, useEffect } from 'react';
import {   toast } from 'sonner'
import { baseUrl } from './baseurl';
import { Curso } from '../(...)/cursos';


const useFetchCursos = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sucess, setSucess] = useState<any>();


  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/Grados`);
        if (!response.ok) {
          setSucess(response)
          toast.error('Error al cargar los cursos');
        } 

 

        const data = await response.json();
        // Obtener los pagos asociados a cada curso
        const cursosConPagos = await Promise.all(
          data.map(async (curso: Curso) => {
            const pagosResponse = await fetch(`${baseUrl}/api/pagos?Grado_ID=${curso.ID}`);
            if (!pagosResponse.ok) {
              toast.error('Error al cargar los pagos del curso');
              throw new Error('Error al cargar los pagos del curso');
            }
            const pagosData = await pagosResponse.json();

      
            return {
              ...curso,
              Pagos: pagosData,
            };
          })
        );

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
