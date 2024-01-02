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
  const [notasData, setNotasData] = useState<Nota>({
    grado: "",
    examenFinal: "",
    trimestres: [],
  });
  const [gradoOptions, setGradoOptions] = useState<{ id: string; nombre: string }[]>([]);
  console.log(alumno);

  useEffect(() => {
    // Lógica para obtener los grados disponibles y establecer las opciones para el selector
    // Ejemplo de datos de grados:
    const gradosDisponibles = [
      { id: "Starters", nombre: "Starters" },
      { id: "Beginners", nombre: "Beginners" },
      { id: "Pre-Kids", nombre: "preKids" },
      { id: "Adol_1", nombre: "Adol_1" },
      { id: "Adol_2", nombre: "Adol_2" },
      { id: "Adol_3", nombre: "Adol_3" },
      { id: "Adol_4", nombre: "Adol_4" },
      { id: "Adol_5", nombre: "Adol_5" },
      { id: "Kids_1", nombre: "Kids_1" },
      { id: "Kids_2", nombre: "Kids_2" },
      { id: "Kids_3", nombre: "Kids_3" },
      { id: "Kids_4", nombre: "Kids_4" },
      { id: "Kids_5", nombre: "Kids_5" },
      { id: "Kids_6", nombre: "Kids_6" },
      { id: "Adults_1", nombre: "Adults_1" },
      { id: "Adults_2", nombre: "Adults_2" },
      { id: "Adults_3", nombre: "Adults_3" },
      { id: "Adults_4", nombre: "Adults_4" },
      { id: "Adults_5", nombre: "Adults_5" },
      { id: "Adults_6", nombre: "Adults_6" },
      // ... otros grados disponibles
    ];
    setGradoOptions(gradosDisponibles);
  }, []);

  // Función para guardar las notas actualizadas
  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/notas/${alumno.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Notas: [notasData] }),
      });

      if (response.ok) {
        // Realizar alguna acción después de una solicitud exitosa (por ejemplo, cerrar el modal)
      } else {
        console.error("Error al actualizar las notas:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error al actualizar las notas:", error.message);
    }
  };

  const trimestresDisponibles = [1, 2, 3, 4];

  const handleGradoChange = (value: string) => {
    setNotasData({ ...notasData, grado: value });
  };

  const handleTrimestreChange = (value: string) => {
    const newTrimestres = [...notasData.trimestres];

    // Verificar si no hay elementos en la lista de trimestres
    if (newTrimestres.length === 0) {
      // Agregar un nuevo objeto con el valor del trimestre
      newTrimestres.push({ trimestre: parseInt(value), nota: "" });
    } else {
      // Si hay elementos, actualizar el último elemento
      const lastIndex = newTrimestres.length - 1;
      newTrimestres[lastIndex].trimestre = parseInt(value);
    }

    setNotasData({ ...notasData, trimestres: newTrimestres });
  };

  const handleNotaChange = (value: string) => {
    const lastIndex = notasData.trimestres.length - 1;
    const newTrimestres = [...notasData.trimestres];
    newTrimestres[lastIndex].nota = value;
    setNotasData({ ...notasData, trimestres: newTrimestres });
  };

  const handleExamenFinalChange = (value: string) => {
    setNotasData({ ...notasData, examenFinal: value });
  };

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
