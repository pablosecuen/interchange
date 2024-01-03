import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input,
  ModalContent,
} from "@nextui-org/react";
import useChangeNotas from "../hooks/useChangeNotas";

interface ModalNotasProps {
  onOpenChange: (value: boolean) => void;
  isOpen: boolean;
  alumno: any;
}

const CambiarNotasModal = ({ alumno, isOpen, onOpenChange }: ModalNotasProps) => {
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
    <div className="flex justify-center items-center w-full h-full">
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        size="lg"
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
              <ModalHeader>
                Cambiar Notas de {alumno.Nombre} {alumno.Apellido}
              </ModalHeader>
              <ModalBody>
                {alumno.Grado && (
                  <p>
                    Año en que cursa: {alumno?.Grado[0].Grado_Categoria}{" "}
                    {alumno?.Grado[0].Grado_Nombre}
                  </p>
                )}
                <p>Trimestres y notas existentes:</p>
                {/* Mostrar la información de los trimestres y notas existentes */}
                <div className="flex items-center justify-evenly gap-2">
                  {" "}
                  <div className="flex flex-col w-full">
                    {" "}
                    <label>Seleccionar grado</label>
                    <select
                      placeholder="Seleccionar grado"
                      value={notasData.grado}
                      onChange={(e) => handleGradoChange(e.target.value)}
                    >
                      <option value="">Seleccionar grado</option>
                      {gradoOptions.map((grado) => (
                        <option key={grado.id} value={grado.id}>
                          {grado.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col w-full">
                    {" "}
                    <label>Seleccionar trimestre</label>
                    <select
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
                      <option value="">Seleccionar un trimestre</option>
                      {trimestresDisponibles.map((t, index) => (
                        <option key={index} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {" "}
                  <label>Nota del Trimistre Seleccionado</label>
                  <Input
                    type="number"
                    placeholder="Nota"
                    className="w-1/4"
                    value={
                      notasData.trimestres.length > 0
                        ? notasData.trimestres[notasData.trimestres.length - 1].nota
                        : ""
                    }
                    onChange={(e) => handleNotaChange(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  {" "}
                  <label>Nota del Examen Final</label>
                  <Input
                    type="number"
                    placeholder="Nota "
                    className="w-1/4"
                    value={notasData.examenFinal}
                    onChange={(e) => handleExamenFinalChange(e.target.value)}
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
    </div>
  );
};

export default CambiarNotasModal;
