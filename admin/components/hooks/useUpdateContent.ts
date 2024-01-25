import { useState } from 'react';
import { baseUrl } from './baseurl';

interface UpdateContent {
  ID: string;
  Title: string;
  Description: string;
  Link: string[];
  Tipo: string;
  Grado_ID: string;
}

const useUpdateContent = () => {
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
        throw new Error('Error al actualizar el campus');
      }

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
