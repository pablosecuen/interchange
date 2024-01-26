import { useState } from 'react';
import { toast } from 'sonner';
import { baseUrl } from './baseurl';
import { useRouter } from 'next/router';

// Custom hook para enviar el acuerdo institucional por correo electrónico
const useEnviarAcuerdoInstitucional = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const enviarAcuerdoInstitucional = async (email:string) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}/send-email/acuerdoinstitucional/${email}`);
      const data = await response.json();
      if (!response.ok) {
      toast.error("error al enviar el correo")
      throw new Error(data.message);
      }
      toast.success("correo enviado exitosamente!")
           setTimeout(() => {
          router.reload(); 
        }, 1000);
      setLoading(false);
    } catch (error:any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { enviarAcuerdoInstitucional, loading, error };
};

export default useEnviarAcuerdoInstitucional;