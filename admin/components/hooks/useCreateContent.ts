import { useState } from 'react';
import { baseUrl } from './baseurl';
import { Content } from './useFetchContent';



const useCreateContent = () => {
  const [newContent, setNewContent] = useState<Content>({
    Title: '',
    Description: '',
    Link: [],
    Tipo: '',
    Grado_ID: '',
        Grado_Nombre: '',   
    Grado_Categoria: '',  
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);


  const createContent = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/campus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContent),
      });

      if (!response.ok) {
        throw new Error('Error al crear el campus');
      }

      setNewContent({
        Title: '',
        Description: '',
        Link: [],
        Tipo: '',
        Grado_ID: '',
        Grado_Nombre: '',   
        Grado_Categoria: '',  
      });
    } catch (error:any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { newContent, setNewContent, loading, error, createContent };
};

export default useCreateContent;
