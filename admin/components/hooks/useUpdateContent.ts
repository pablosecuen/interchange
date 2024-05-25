import { useState } from 'react';
import { baseUrl } from './baseurl';
import { toast } from 'sonner';
import { useRouter } from 'next/router';

interface UpdateContent {
  ID: string;
  Title: string;
  Description: string;
  Link: string[];
  Tipo: string;
  Grado_ID: string;
}

const useUpdateContent = () => {
  const router = useRouter()
  const [updateContent, setUpdateContent] = useState<UpdateContent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateExistingContent = async () => {
    if (!updateContent) return;

    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/campus/${updateContent.ID}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateContent),
      });

      if (!response.ok) {
        toast.error('Error al actualizar el campus');
        throw new Error('Error al actualizar el campus');
      }
     setTimeout(() => {
        }, 1000);
      setUpdateContent(null);
    } catch (error:any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateContent, setUpdateContent, loading, error, updateExistingContent };
};

export default useUpdateContent;
