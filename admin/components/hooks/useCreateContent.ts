import { useState } from 'react';
import { baseUrl } from './baseurl';
import { Content } from './useFetchContent';
import { toast } from 'sonner';
import { useRouter } from 'next/router';



const useCreateContent = () => {
  const router = useRouter()
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
      toast.success("contenido subido exitosamente")

      setNewContent({
        Title: '',
        Description: '',
        Link: [],
        Tipo: '',
        Grado_ID: '',
        Grado_Nombre: '',   
        Grado_Categoria: '',  
      });
        setTimeout(() => {
          router.reload(); 
        }, 1000);
    } catch (error:any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { newContent, setNewContent, loading, error, createContent };
};

export default useCreateContent;
