import  { useEffect, useState } from "react";
import { toast } from "sonner";
import { baseUrl } from "./baseurl";

export interface Nota {
  grado: string;
  examenFinal: string;
  trimestres: {
    trimestre: number;
    t_escrito: string;
    t_oral: string;
    deb_asig: string;
    deb_ent: string;
    inasist: string;
    conducta: string;
    observaciones: string;
  }[];
}

const useChangeNotas = (alumno:any) => {
    const [notasData, setNotasData] = useState<Nota>({
        grado: "",
        examenFinal: "",
        trimestres: [],
      });
      const [gradoOptions, setGradoOptions] = useState<{ id: string; nombre: string }[]>([]);

      useEffect(() => {
        const gradosDisponibles = [
          { id: "Starters", nombre: "Starters" },
          { id: "Beginners", nombre: "Beginners" },
          { id: "Pre-Kids", nombre: "Pre_Kids" },
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
          { id: "F.C.E", nombre: "F C E" }
          // ... otros grados disponibles
        ];
        setGradoOptions(gradosDisponibles);
      }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/notas/${alumno.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Notas: [notasData] }),
      });

      if (!response.ok) {
        toast.error(`Error al actualizar las notas: ${response.statusText}`);
        throw new Error("Error al actualizar las notas");
      } else {
        toast.success("Notas actualizadas correctamente");
      }
    } catch (error: any) {
      console.error("Error al actualizar las notas:", error.message);
    }
  };

  const handleTrimestreChange = (value: string) => {
    const newTrimestre = {
      trimestre: parseInt(value),
      t_escrito: "",
      t_oral: "",
      deb_asig: "",
      deb_ent: "",
      inasist: "",
      conducta: "",
      observaciones: "",
    };

    const existingTrimestreIndex = notasData.trimestres.findIndex(
      (trimestre) => trimestre.trimestre === parseInt(value)
    );

    if (existingTrimestreIndex === -1) {
      setNotasData({
        ...notasData,
        trimestres: [...notasData.trimestres, newTrimestre],
      });
    }
  };

const handleNotaChange = (value: string, categoria: string) => {
  const lastIndex = notasData.trimestres.length - 1;

  if (lastIndex >= 0) {
    const newTrimestres = [...notasData.trimestres];
    newTrimestres[lastIndex] = {
      ...newTrimestres[lastIndex],
      [categoria]: value,
    };
    console.log("New Trimestres:", newTrimestres);
    setNotasData((prevNotasData) => ({
  ...prevNotasData,
  trimestres: newTrimestres,
}));
  }
};



      const handleGradoChange = (value: string) => {
        setNotasData({ ...notasData, grado: value });
      };
    
      const handleExamenFinalChange = (value: string) => {
        setNotasData({ ...notasData, examenFinal: value });
      };


  return {
    notasData,
    gradoOptions,
    handleSubmit,
    handleTrimestreChange,
    handleNotaChange,
    handleGradoChange,
    handleExamenFinalChange,
    
  };
};


export default useChangeNotas