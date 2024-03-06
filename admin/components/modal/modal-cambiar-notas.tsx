import React from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input,
  ModalContent,
  useDisclosure,
  Textarea,
} from "@nextui-org/react";
import useChangeNotas from "../hooks/useChangeNotas";
import { EditIcon } from "../icons/table/edit-icon";
import { Select, SelectItem } from "@nextui-org/select";
import Draggable from "react-draggable";

interface ModalNotasProps {
  alumno: any;
}

const CambiarNotasModal = ({ alumno }: ModalNotasProps) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const {
    notasData,
    gradoOptions,
    handleSubmit,
    handleTrimestreChange,
    handleNotaChange,
    handleGradoChange,
    handleExamenFinalChange,
  } = useChangeNotas(alumno);

  const trimestresDisponibles = [1, 2, 3, 4];

  return (
    <>
      <button color="primary" title="Detalles notas" onClick={onOpen}>
        <EditIcon size={20} fill="#979797" />
      </button>
      <Draggable>
        <Modal
          backdrop="opaque"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          radius="lg"
          size="xl"
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
                <ModalHeader className="cursor-move">
                  Cambiar Notas de {alumno.Nombre} {alumno.Apellido}
                </ModalHeader>
                <ModalBody>
                  {alumno.Grado && (
                    <p>
                      Año en que cursa: {alumno?.Grado.Grado_Categoria} {alumno?.Grado.Grado_Nombre}
                    </p>
                  )}
                  <p>Trimestres y notas existentes:</p>
                  {/* Mostrar la información de los trimestres y notas existentes */}
                  <div className="flex items-center justify-evenly gap-2">
                    {" "}
                    <div className="flex flex-col w-full">
                      {" "}
                      <label>Seleccionar grado</label>
                      <Select
                        placeholder="Seleccionar grado"
                        value={notasData.grado}
                        onChange={(e) => handleGradoChange(e.target.value)}
                      >
                        {gradoOptions.map((grado) => (
                          <SelectItem key={grado.id} value={grado.id}>
                            {grado.nombre}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                    <div className="flex flex-col w-full">
                      {" "}
                      <label>Seleccionar trimestre</label>
                      <Select
                        placeholder="Seleccionar trimestre"
                        value={
                          notasData.trimestres.length > 0
                            ? notasData.trimestres[
                                notasData.trimestres.length - 1
                              ].trimestre.toString()
                            : ""
                        }
                        onChange={(e) => handleTrimestreChange(e.target.value)}
                      >
                        {trimestresDisponibles.map((t, index) => (
                          <SelectItem key={index} value={t}>
                            {t.toString()}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label>T. Escrito</label>
                    <Input
                      type="number"
                      placeholder="Nota"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].t_escrito
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "t_escrito")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label>T. Oral</label>
                    <Input
                      type="number"
                      placeholder="T_oral"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].t_oral
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "t_oral")}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    {" "}
                    <label>Deb Asig </label>
                    <Input
                      type="number"
                      placeholder="Deb_asig"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].deb_asig
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "deb_asig")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {" "}
                    <label>Deb Ent </label>
                    <Input
                      type="number"
                      placeholder="Deb_ent"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].deb_ent
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "deb_ent")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {" "}
                    <label> Inasist </label>
                    <Input
                      type="number"
                      placeholder="Inasist"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].inasist
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "inasist")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {" "}
                    <label> Conducta </label>
                    <Input
                      type="number"
                      placeholder="Conducta"
                      className="w-1/4"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].conducta
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "conducta")}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    {" "}
                    <label>Nota del Examen Final</label>
                    <Input
                      type="number"
                      placeholder="Examen final"
                      className="w-1/4"
                      value={notasData.examenFinal}
                      onChange={(e) => handleExamenFinalChange(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    {" "}
                    <label> Observaciones </label>
                    <Textarea
                      placeholder="Observaciones"
                      className="w-1/2"
                      value={
                        notasData.trimestres.length > 0
                          ? notasData.trimestres[notasData.trimestres.length - 1].observaciones
                          : ""
                      }
                      onChange={(e) => handleNotaChange(e.target.value, "observaciones")}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="success" variant="light" onClick={handleSubmit}>
                    Guardar
                  </Button>
                  <Button onClick={onClose} variant="light">
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </Draggable>
    </>
  );
};

export default CambiarNotasModal;
