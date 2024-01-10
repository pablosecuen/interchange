import { useState, useEffect } from "react";

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

function useFetchNotas(id: string): FetchNotasResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [alumno, setAlumno] = useState<Alumno | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/users?id=${id}`);
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const alumnoData: Alumno = {
            Nombre: data[0].Nombre,
            Apellido: data[0].Apellido,
            RegistroNotas: data[0].RegistroNotas || [],
          };

          if (!response.ok) {
            throw new Error("Error al obtener notas");
          } else {
            setAlumno(alumnoData); // Actualizando el estado con los datos correctos
          }
        } else {
          setAlumno(null);
        }

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
