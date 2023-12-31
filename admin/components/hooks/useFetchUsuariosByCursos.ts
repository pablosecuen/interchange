import { useEffect, useState } from "react";
import { toast } from "sonner";
import { User } from "./useFetchUsers"; // Asegúrate de importar el tipo User adecuadamente

interface Curso {
  ID: number;
  // Agrega las propiedades necesarias del objeto curso
}

interface FetchUsuariosByCursosResponse {
  usuarios: any[];
  loading: boolean;
  error: Error | null;
}

const useFetchUsuariosByCursos = (isOpen: boolean, curso: Curso | null): FetchUsuariosByCursosResponse => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);



  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        if (!isOpen || !curso) return;

        setLoading(true);
        setError(null);

        const response = await fetch(`http://localhost:3001/api/grados/${curso.ID}/usuarios`);
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios");
        }

        const data = await response.json();
        const usersWithGradesAndPayments = await Promise.all(
          data.map(async (user: User) => {
            if (user.Grado_ID !== null) {
              const gradoResponse = await fetch(`http://localhost:3001/api/grados?ID=${user.Grado_ID}`);
              if (!gradoResponse.ok) {
                throw new Error("Error al cargar el grado del usuario");
              }

              const gradoData = await gradoResponse.json();
              const pagoUsuario = gradoData[0].Pagos.find((pago: any) => pago.Usuario_ID === user.ID);

              return {
                ...user,
                Grado: gradoData,
                Pagos: pagoUsuario ? [pagoUsuario] : [],
              };
            }
            return user;
          })
        );

        toast.success("Usuarios cargados correctamente");
        setUsuarios(usersWithGradesAndPayments);
      } catch (error:any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [isOpen, curso]);

  return { usuarios, loading, error };
};

export default useFetchUsuariosByCursos;
