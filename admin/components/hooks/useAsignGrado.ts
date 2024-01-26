import { useRouter } from "next/router";
import { useState } from "react";

import { toast } from "sonner";
import { baseUrl } from "./baseurl";

const useAssignGrado = (alumno:any, cursos:any) => {
const router = useRouter()
  const [selectedGrado, setSelectedGrado] = useState<any>();
  const [assignmentResult, setAssignmentResult] = useState<any>();

  const handleGradoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurso = JSON.parse(event.target.value);
    setSelectedGrado(selectedCurso);
  };

  const assignGrado = async () => {
    try {
      if (!selectedGrado) {
        toast.error("Por favor, selecciona un grado");
        return;
      }

      const response = await fetch(`${baseUrl}/api/users/${alumno.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Grado_ID: selectedGrado.ID,
          Grado_Nombre: selectedGrado.Grado_Nombre,
          Grado_Categoria: selectedGrado.Grado_Categoria,
        }),
      });
      if (!response.ok) {
        toast.error("Error al asignar el grado al alumno");
        setAssignmentResult({ success: false, message: "Error al asignar el grado al alumno" });
        return;
      }
        const cursoEncontrado = cursos.find((curso: any) => curso.ID === selectedGrado.ID);
        if (cursoEncontrado) {
          const { Grado_Nombre, Grado_Categoria } = cursoEncontrado;
          const updatedGrado = {
            ID: selectedGrado,
            Grado_Nombre,
            Grado_Categoria,
          };
          toast.success("Grado asignado exitosamente");
 
          setAssignmentResult({ success: true, message: "Grado asignado exitosamente" });
        } else {
          console.error("No se encontró el curso con el ID seleccionado");
          setAssignmentResult({ success: false, message: "No se encontró el curso con el ID seleccionado" });
        }
        setTimeout(() => {
          router.reload(); 
        }, 1000);
    } catch (error) {
      toast.error("Error al asignar el grado al alumno");
      console.error("Error al asignar el grado al alumno:", error);
      setAssignmentResult({ success: false, message: `Error al asignar el grado al alumno: ${error}` });
    }
  };

  return { handleGradoChange, assignGrado, selectedGrado, assignmentResult  };
};

export default useAssignGrado;
