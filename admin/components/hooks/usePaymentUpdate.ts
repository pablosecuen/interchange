import { useState } from "react";
import { toast } from "sonner";

const usePaymentUpdate = (vencimientoCuotas:any, user:any) => {
  const [indexToUpdate, setIndexToUpdate] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleChangePaymentState = async (index:any) => {
    try {
      const updatedVencimientoCuotas = [...vencimientoCuotas];
      updatedVencimientoCuotas[index].pagado = !updatedVencimientoCuotas[index].pagado;
      const pagoId = user.Pagos[0].ID;
      const updatedMes = updatedVencimientoCuotas[index].mes;

      const response = await fetch(`http://localhost:3001/api/pagos/${pagoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pagoId: pagoId,
          mes: updatedMes,
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
        toast.success(`Estado de pago actualizado correctamente ${updatedMes}`);
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
