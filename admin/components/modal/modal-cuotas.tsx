import React, { useEffect, useMemo, useState } from "react";
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
  useDisclosure,
} from "@nextui-org/react";
import usePaymentUpdate from "../hooks/usePaymentUpdate";
import useSendEmail from "../hooks/useSendEmailVencimiento";
import { EyeIcon } from "../icons/table/eye-icon";
import Draggable from "react-draggable";

interface Props {
  isOpen: boolean;
  onOpenChange: (value: boolean) => void;
  user: any;
}

export default function ModalCuotas({ onOpenChange, isOpen, user }: Props) {
  const { onOpen, onClose } = useDisclosure();
  const [vencimientoCuotas, setVencimientoCuotas] = useState<any>([]);

  // Memoize the filter function
  // Memoize the filter function
  const filterPayments = useMemo(() => {
    return (pago: any) => pago.Usuario_ID.includes(user.ID.toString());
  }, [user.ID]);

  useEffect(() => {
    if (isOpen) {
      const filteredPayments =
        user && user.Grado && user.Grado.Pagos
          ? user.Grado.Pagos.filter(filterPayments).map((pago: any) => ({
              ...pago,
              userID: user.ID,
              pagoUserID: pago.Usuario_ID,
            }))
          : [];

      setVencimientoCuotas(filteredPayments);
    }
  }, [isOpen, user, filterPayments]);

  const { sendEmailVencimiento } = useSendEmail(user.Email);

  const { showConfirmation, setShowConfirmation, handleConfirmation, setIndexToUpdate } =
    usePaymentUpdate(vencimientoCuotas, user);

  /* 79e9106b-ffb4-4b83-b24e-9846b05f5239 */
  return (
    <>
      <button color="primary" title="Ver detalles" onClick={onOpen}>
        <EyeIcon size={20} fill="#979797" />
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          size="2xl"
          classNames={{
            body: "py-6 max-h-[80vh] overflow-y-auto",
            backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
            base: "border-[#292f46] bg-[#19172c]  text-[#a8b0d3] ",
            header: "border-b-[1px] border-[#292f46] ",
            footer: "border-t-[1px] border-[#292f46] ",
            closeButton: "hover:bg-white/5 active:bg-white/10 ",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 cursor-move s">
                  <span>
                    {" "}
                    Cuotas de {user.Nombre} {user.Apellido}
                  </span>
                  <span>
                    {" "}
                    Curso:{" "}
                    {user.Grado
                      ? `${user.Grado.Grado_Nombre} ${user.Grado.Grado_Categoria}`
                      : "este alumno no tiene asignado un curso"}
                  </span>
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
                      {vencimientoCuotas[0]?.VencimientoCuota.map((cuota: any, index: any) => {
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
                                style={{ whiteSpace: "nowrap" }}
                              >
                                {cuota.pagado ? "Pago" : "No Pago"}
                              </Chip>
                            </TableCell>
                            <TableCell className="flex items-center gap-4">
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
                              {cuota.pagado ? null : (
                                <Button
                                  size="sm"
                                  id="sendEmailButton"
                                  onPress={() => sendEmailVencimiento(user.Email)}
                                >
                                  Enviar Correo
                                </Button>
                              )}
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
      </Draggable>
    </>
  );
}
