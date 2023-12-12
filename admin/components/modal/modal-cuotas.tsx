import React from "react";
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
  const vencimientoCuotas = user?.Pagos[0]?.VencimientoCuota || [];
  return (
    <>
      {/*     <Button onPress={onOpen} color="secondary">
        Open Modal
      </Button> */}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="2xl"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
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
                        {Object.entries(cuota).map(([key, value], index) => (
                          <TableCell key={index}>
                            {key === "pagado" ? (
                              <Chip size="sm" color={value ? "success" : "danger"}>
                                {value ? "Pago" : "No Pago"}
                              </Chip>
                            ) : (
                              String(value)
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
