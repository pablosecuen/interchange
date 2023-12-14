import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableCell,
  TableRow,
  Chip,
} from "@nextui-org/react";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  user: any;
}

export default function ModalCuotas({ onOpenChange, isOpen, user }: Props) {
  const [vencimientoCuotas, setVencimientoCuotas] = useState(
    user?.Pagos[0]?.VencimientoCuota || []
  );
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [indexToUpdate, setIndexToUpdate] = useState<number | null>(null);

  const handleConfirmation = async () => {
    if (indexToUpdate !== null) {
      await handleChangePaymentState(indexToUpdate);
      setIndexToUpdate(null);
      setShowConfirmation(false);
    }
  };

  const handleChangePaymentState = async (index: number) => {
    try {
      //buscamos las 3 props necesarias para el body {mes, pagoid, y booleano}
      const updatedVencimientoCuotas = [...vencimientoCuotas];
      updatedVencimientoCuotas[index].pagado = !updatedVencimientoCuotas[index].pagado;
      const pagoId = user.Pagos[0].ID; // Aquí obtienes el pagoId correcto
      const updatedMes = updatedVencimientoCuotas[index].mes;

      // Llamada al endpoint para actualizar el estado de pago
      const response = await fetch(`http://localhost:3001/api/pagos/${pagoId}`, {
        method: "PUT",
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
        throw new Error("Error al actualizar el estado de pago");
      }
      setVencimientoCuotas(updatedVencimientoCuotas);
    } catch (error) {
      console.error("Error al actualizar el estado de pago:", error);
    }
    setIndexToUpdate(index);
    setShowConfirmation(true);
  };

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      radius="lg"
      size="2xl"
      classNames={{
        body: "py-6 ",
        backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
        base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] ",
        header: "border-b-[1px] border-[#292f46] ",
        footer: "border-t-[1px] border-[#292f46] ",
        closeButton: "hover:bg-white/5 active:bg-white/10 ",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Cuotas de {user.Nombre} {user.Apellido}
            </ModalHeader>
            <ModalBody>
              <Table aria-label="Tabla de cuotas">
                <TableHeader>
                  {Object.keys(vencimientoCuotas[0] || {}).map((key) => (
                    <TableColumn key={key}>{key}</TableColumn>
                  ))}
                </TableHeader>
                <TableBody>
                  {vencimientoCuotas.map((cuota: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>{cuota.mes}</TableCell>
                      <TableCell>{cuota.vencimiento}</TableCell>
                      <TableCell>
                        <Chip size="sm" color={cuota.pagado ? "success" : "danger"}>
                          {cuota.pagado ? "Pago" : "No Pago"}
                        </Chip>
                      </TableCell>
                      {/* Agregar un botón para cambiar el estado de pago */}
                      <TableCell>
                        <Button
                          color={cuota.pagado ? "danger" : "success"}
                          size="sm"
                          onPress={() => {
                            setIndexToUpdate(index);
                            setShowConfirmation(true);
                          }}
                        >
                          {!cuota.pagado ? "Marcar como pagado" : "Marcar como no pagado"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
            <Modal
              isOpen={showConfirmation}
              onOpenChange={() => setShowConfirmation(false)}
              radius="lg"
              classNames={{
                body: "py-4",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
                header: "border-b-[1px] border-[#292f46]",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
              }}
            >
              <ModalContent>
                <ModalHeader>Confirmación</ModalHeader>
                <ModalBody>¿Estás seguro de realizar este cambio?</ModalBody>
                <ModalFooter>
                  <Button color="warning" onPress={handleConfirmation}>
                    Confirmar
                  </Button>
                  <Button variant="light" onPress={() => setShowConfirmation(false)}>
                    Cancelar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
