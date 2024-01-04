import { useState, useEffect } from "react";
import { toast } from "sonner";

export interface Nota {
  notas: {
    grado: string;
    trimestres: { trimestre: number; nota: string }[];
    examenFinal: string;
  };
}

export interface Alumno {
  Nombre: string;
  Apellido: string;
  RegistroNotas: Nota[];
}

interface FetchNotasResult {
  loading: boolean;
  error: Error | null;
  alumno: Alumno | null;
}
// ... (importaciones)

function useFetchNotas(id: string): FetchNotasResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [alumno, setAlumno] = useState<Alumno | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/users?id=${id}`);
        const data = await response.json();

        const promise = () =>
          new Promise<Alumno | null>((resolve, reject) => {
            if (Array.isArray(data) && data.length > 0) {
              const alumnoData: Alumno = {
                Nombre: data[0].Nombre,
                Apellido: data[0].Apellido,
                RegistroNotas: data[0].RegistroNotas || [],
              };

              if (!response.ok) {
                reject(new Error("error al obtener notas"));
              } else {
                resolve(alumnoData);
              }
            } else {
              resolve(null);
            }
          });

        toast.promise(promise, {
          loading: "Obteniendo notas...",
          success: (data) => {
            if (data) {
              setAlumno(data); // Actualizando el estado con los datos correctos
              return "Notas obtenidas exitosamente";
            } else {
              return "No se encontraron notas";
            }
          },
          error: "Error al obtener notas",
        });

        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return { loading, error, alumno };
}

export default useFetchNotas;
