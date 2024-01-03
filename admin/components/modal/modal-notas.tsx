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

interface Nota {
  grado: string;
  examenFinal: string;
  trimestres: { trimestre: number; nota: string }[];
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
                <select
                  placeholder="Seleccionar grado"
                  value={notasData.grado}
                  onChange={(e) => handleGradoChange(e.target.value)}
                >
                  <option value="">Seleccionar un grado</option>
                  {gradoOptions.map((grado) => (
                    <option key={grado.id} value={grado.id}>
                      {grado.nombre}
                    </option>
                  ))}
                </select>

                <select
                  placeholder="Seleccionar trimestre"
                  value={
                    notasData.trimestres.length > 0
                      ? notasData.trimestres[notasData.trimestres.length - 1].trimestre.toString()
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

                <Input
                  type="number"
                  placeholder="Nueva nota"
                  value={
                    notasData.trimestres.length > 0
                      ? notasData.trimestres[notasData.trimestres.length - 1].nota
                      : ""
                  }
                  onChange={(e) => handleNotaChange(e.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Examen Final"
                  value={notasData.examenFinal}
                  onChange={(e) => handleExamenFinalChange(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="success" onClick={handleSubmit}>
                  Guardar
                </Button>
                <Button onClick={onClose}>Cerrar</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CambiarNotasModal;
