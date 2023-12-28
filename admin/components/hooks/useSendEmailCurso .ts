import { useEffect } from 'react';
import { toast } from 'sonner';
import { useRouter } from "next/router";

const useSendEmailCurso = (alumnoEmail:any, assignmentResult:any) => {
  const router = useRouter();
  const enviarEmailCurso = async () => {
    if (assignmentResult && assignmentResult.success) {
      try {
        const response = await fetch(`http://localhost:3001/send-email/curso/${alumnoEmail}`, {
          method: 'GET',
        });

      if (!response.ok){
        toast.error('Error al enviar el correo');
          }
          const data = await response.json();
          toast.promise(
            Promise.resolve(data),
            {
              success: 'Correo enviado con éxito',
              error: 'Error al enviar el correo',
            }
        )
      } catch (error) {
        toast.error('Error al enviar el correo');
      }
    }
  };

  useEffect(() => {
    enviarEmailCurso().then(() => {
      if (assignmentResult && assignmentResult.success) {
        setTimeout(() => {
          router.reload();
        }, 2000);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assignmentResult]);

  return { enviarEmailCurso };
};

export default useSendEmailCurso;
