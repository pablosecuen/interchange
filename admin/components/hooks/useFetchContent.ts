import { useState, useEffect } from 'react';
import { baseUrl } from './baseurl';

export interface Content {
  ID?: string;
  Title: string;
  Description: string;
  Link: string[];
  Tipo: string;
  Grado_ID: string;
          Grado_Nombre: string,   
    Grado_Categoria: string,  
}

const useFetchContent = () => {
  const [contentList, setContentList] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCampus = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/campus`); 
        if (!response.ok) {
          throw new Error('Error al cargar los datos del campus');
        }

        const data: Content[] = await response.json();
        setContentList(data);
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCampus();
  }, []);

  return { contentList, loading, error };
};

export default useFetchContent;
