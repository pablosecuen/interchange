import { useState } from "react";
import { toast } from "sonner";
import { baseUrl } from "./baseurl";

const usePaymentUpdate = (vencimientoCuotas: any, user: any) => {
console.log(user);

  
  const [indexToUpdate, setIndexToUpdate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);


const handleChangePaymentState = async (index: any) => {
  try {
    if (vencimientoCuotas) { 
      const updatedVencimientoCuotas = [...vencimientoCuotas[0].VencimientoCuota];
      updatedVencimientoCuotas[index].pagado = !updatedVencimientoCuotas[index].pagado;
          const userPayment = user?.Grado?.Pagos.find((pago: any) => pago.Usuario_ID === user.ID);

      if (!userPayment) {
        throw new Error("No se encontró el pago correspondiente al usuario");
      }

      const pagoId = userPayment.ID;
     
      const response = await fetch(`${baseUrl}/api/pagos/${pagoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pagoId: pagoId,
          mes: updatedVencimientoCuotas[index].mes,
          nuevoEstado: updatedVencimientoCuotas[index].pagado,
        }),
      });
      
      if (!response.ok) {
        toast.error("Error al actualizar el estado de pago");
        throw new Error("Error al actualizar el estado de pago");
      }

      if (response.ok) {
        setIndexToUpdate(index);
        setShowConfirmation(true);
        toast.success(`Estado de pago actualizado correctamente ${updatedVencimientoCuotas[index].mes}`);
      }
    }
  } catch (error) {
    toast.error("Error al actualizar el estado de pago");
    console.error("Error al actualizar el estado de pago:", error);
  }
};


  const handleConfirmation = async () => {
    if (indexToUpdate !== null) {
      await handleChangePaymentState(indexToUpdate);
      setIndexToUpdate(null);
      setShowConfirmation(false);
    }
  };

  return { showConfirmation, setShowConfirmation, handleChangePaymentState, handleConfirmation, setIndexToUpdate };
};

export default usePaymentUpdate;
