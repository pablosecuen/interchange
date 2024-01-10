import { useState } from 'react';
import { toast } from 'sonner';

// Custom hook para enviar el acuerdo institucional por correo electrónico
const useEnviarAcuerdoInstitucional = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const enviarAcuerdoInstitucional = async (email:string) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/send-email/acuerdoinstitucional/${email}`);
      const data = await response.json();
      if (!response.ok) {
      toast.error("error al enviar el correo")
      throw new Error(data.message);
      }
        toast.success("correo enviado exitosamente!")
      setLoading(false);
    } catch (error:any) {
      setError(error.message);
      setLoading(false);
    }
  };

  return { enviarAcuerdoInstitucional, loading, error };
};

export default useEnviarAcuerdoInstitucional;