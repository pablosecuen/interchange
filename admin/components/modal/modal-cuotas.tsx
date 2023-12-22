import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableCell,
  TableRow,
  Chip,
} from "@nextui-org/react";
import usePaymentUpdate from "../hooks/usePaymentUpdate";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  user: any;
}

export default function ModalCuotas({ onOpenChange, isOpen, user }: Props) {
  const [vencimientoCuotas, setVencimientoCuotas] = useState(
    user?.Pagos && user.Pagos.length > 0 && user.Pagos[0].VencimientoCuota
      ? user.Pagos[0].VencimientoCuota
      : []
  );

  const { showConfirmation, setShowConfirmation, handleConfirmation, setIndexToUpdate } =
    usePaymentUpdate(vencimientoCuotas, user);

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
              Curso: {user.Grado_Nombre} {user.Grado_Categoria}
            </ModalHeader>
            <ModalBody>
              <Table aria-label="Tabla de cuotas">
                <TableHeader>
                  <TableColumn>mes</TableColumn>
                  <TableColumn>vencimiento</TableColumn>
                  <TableColumn>pagado</TableColumn>
                  <TableColumn>Acción</TableColumn>
                </TableHeader>
                <TableBody>
                  {vencimientoCuotas.map((cuota: any, index: any) => {
                    const currentDate = new Date();
                    const vencimientoDate = new Date(cuota.vencimiento);
                    let buttonColor = undefined; // Por defecto, no se establece color
                    if (!cuota.pagado) {
                      if (currentDate > vencimientoDate) {
                        buttonColor = "danger"; // Cuota no pagada y fecha vencida
                      } else if (currentDate < vencimientoDate) {
                        buttonColor = "warning"; // Cuota no pagada, pero fecha no vencida
                      }
                    }

                    return (
                      <TableRow key={index}>
                        <TableCell>{cuota.mes}</TableCell>
                        <TableCell>{cuota.vencimiento}</TableCell>
                        <TableCell>
                          <Chip
                            size="sm"
                            color={
                              cuota.pagado
                                ? "success"
                                : currentDate > vencimientoDate
                                ? "danger"
                                : "warning"
                            }
                          >
                            {cuota.pagado ? "Pago" : "No Pago"}
                          </Chip>
                        </TableCell>
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
                    );
                  })}
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
                  <Button
                    className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                    onPress={handleConfirmation}
                  >
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
