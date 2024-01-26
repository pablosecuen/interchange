import { useState } from 'react';
import { baseUrl } from './baseurl';
import { Content } from './useFetchContent';
import { toast } from 'sonner';
import { useRouter } from 'next/router';

const useEditContent = (initialState: Content) => {
    const router = useRouter()
  const [editedContent, setEditedContent] = useState<Content>(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);


    const editContent = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${baseUrl}/api/campus/${initialState?.ID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Title: editedContent.Title,
                    Description: editedContent.Description,
                    Link: editedContent.Link,
                    Tipo: editedContent.Tipo,
                    Grado_ID: editedContent.Grado_ID,
                    Grado_Nombre: editedContent.Grado_Nombre,
                    Grado_Categoria: editedContent.Grado_Categoria,
                }),
            });

            if (!response.ok) {
                toast.error('Error al editar el contenido');
                throw new Error('Error al editar el contenido');
            }

     setTimeout(() => {
          router.reload(); 
        }, 1000);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

  return { editedContent, setEditedContent, loading, error, editContent };
};

export default useEditContent;
