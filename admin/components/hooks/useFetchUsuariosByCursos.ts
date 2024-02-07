import { useEffect, useState } from "react";
import { toast } from "sonner";
import { User } from "./useFetchUsers"; // Asegúrate de importar el tipo User adecuadamente
import { baseUrl } from "./baseurl";

interface Curso {
  ID: number;
  // Agrega las propiedades necesarias del objeto curso
}

interface FetchUsuariosByCursosResponse {
  usuarios: any[];
  loading: boolean;
  error: Error | null;
}

const useFetchUsuariosByCursos = (isOpen: boolean, cursos: Curso[] | null): FetchUsuariosByCursosResponse => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        if (!isOpen || !cursos || cursos.length === 0) return;

        setLoading(true);
        setError(null);

        // Obtener todos los IDs de los cursos
        const cursoIDs = cursos.map((curso) => curso.ID);

        // Concatenar los IDs en una cadena separada por comas
        const cursoIDsString = cursoIDs.join(',');

        // Hacer una única llamada al API para obtener todos los usuarios asociados a los cursos
        const response = await fetch(`${baseUrl}/api/usuarios?Grado_ID=${cursoIDsString}`);
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }

        const data = await response.json();

        // Actualizar el estado con los usuarios obtenidos
        setUsuarios(data);
      } catch (error:any) {
        toast("No existen usuarios asociados los cursos");
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [isOpen, cursos]);

  return { usuarios, loading, error };
};

export default useFetchUsuariosByCursos;
