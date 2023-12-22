import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";

const useAssignGrado = (alumno:any, cursos:any) => {
  const router = useRouter();
  const [selectedGrado, setSelectedGrado] = useState<any>();

  const handleGradoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCurso = JSON.parse(event.target.value);
    setSelectedGrado(selectedCurso);
  };

  const assignGrado = async () => {
    try {
      if (!selectedGrado) {
        console.error("Por favor, selecciona un grado");
        return;
      }

      const response = await fetch(`http://localhost:3001/api/users/${alumno.ID}`, {
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
        console.log(response);
        toast.error("Error al asignar el grado al alumno");
        throw new Error("Error al asignar el grado al alumno");
      }

      if (response.ok) {
        const cursoEncontrado = cursos.find((curso: any) => curso.ID === selectedGrado.ID);

        if (cursoEncontrado) {
          const { Grado_Nombre, Grado_Categoria } = cursoEncontrado;
          const updatedGrado = {
            ID: selectedGrado,
            Grado_Nombre,
            Grado_Categoria,
          };
          toast.success("Grado asignado exitosamente");
          router.reload();
        } else {
          console.error("No se encontró el curso con el ID seleccionado");
          // Manejar el caso en el que no se encuentra el curso
        }
      }
    } catch (error) {
      toast.error("Error al asignar el grado al alumno");
      console.error("Error al asignar el grado al alumno:", error);
    }
  };

  return { handleGradoChange, assignGrado, selectedGrado };
};

export default useAssignGrado;
