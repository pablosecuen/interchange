
import { toast } from 'sonner';
import { baseUrl } from './baseurl';

const useSendEmail = (userEmail:string) => {
  const sendEmailVencimiento = async (userEmail: string) => {
    try {
      const response = await fetch(`${baseUrl}/send-email/vencimiento/${userEmail}`, {
        method: "GET",
      });

      if (response.ok) {
        toast.success("Correo enviado con éxito")
        return { success: true, message: "Correo enviado con éxito" };
      } else {
        throw new Error("Error al enviar el correo");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al enviar el correo")
      return { success: false, message: "Ocurrió un error al enviar el correo" };
    }
  };

  return { sendEmailVencimiento };
};

export default useSendEmail;
