import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

import { User } from "../types/user";
import { baseUrl } from "../components/hooks/baseurl";
import { Curso } from "../components/(...)/cursos";

interface AppContextProps {
  usersByCurso: User[] | undefined;
  isLoadingByCurso: boolean;
  errorByCurso: string | null;
  cursos: Curso[];
  isLoadingCursos: boolean;
  errorCursos: string | null;
  fetchCursos: () => Promise<void>;
  users: User[] | undefined;
  isLoading: boolean;
  isError: boolean;
  fetchUsuariosByCurso: (isOpen: boolean, curso: Curso | null) => Promise<void>;
}

const AppContext = createContext<AppContextProps>({
  usersByCurso: undefined,
  isLoadingByCurso: false,
  errorByCurso: null,
  users: undefined,
  isLoading: false,
  isError: false,
  fetchUsuariosByCurso: async () => {},
  cursos: [],
  isLoadingCursos: true,
  errorCursos: null,
  fetchCursos: async () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [usersByCurso, setUsersByCurso] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [errorCursos, setErrorCursos] = useState<string | null>(null);
  const [isLoadingCursos, setIsLoadingCursos] = useState<boolean>(true);
  const [isLoadingByCurso, setIsLoadingByCurso] = useState<boolean>(false);
  const [errorByCurso, setErrorByCurso] = useState<string | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(`${baseUrl}/api/users`);
      if (!response.ok) {
        throw new Error("Error al cargar los usuarios");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      setIsError(true);
      toast.error("Error al cargar usuarios");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUsuariosByCurso = async (isOpen: boolean, curso: Curso | null) => {
    try {
      if (!isOpen || !curso) return;

      setIsLoadingByCurso(true);
      setErrorByCurso(null);

      const response = await fetch(`${baseUrl}/api/grados/${curso.ID}/usuarios`);
      if (!response.ok) {
        throw new Error("Error al obtener los usuarios");
      }
      const data = await response.json();
    
      const usersWithGradesAndPayments = await Promise.all(
        data.map(async (user: User) => {
          if (user.Grado_ID !== null) {
            const gradoResponse = await fetch(`${baseUrl}/api/grados?ID=${user.Grado_ID}`);
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
          console.log(user);
          return user;
        })
      );
      setUsersByCurso(usersWithGradesAndPayments);
      setIsLoadingByCurso(false);
    } catch (error: any) {
      toast("No existen usuarios asociados los cursos");
      setIsLoadingByCurso(false);
      setErrorByCurso(error);
    }
  };
  const fetchCursos = async () => {
    setIsLoadingCursos(true);
    setErrorCursos(null);

    try {
      const response = await fetch(`${baseUrl}/api/Grados`);
      if (!response.ok) {
        toast.error("Error al cargar los cursos");
        throw new Error("Error al cargar los cursos");
      }

      const data = await response.json();
      const cursoIDs = data.map((curso: Curso) => curso.ID);

      const pagosResponse = await fetch(`${baseUrl}/api/pagos?Grado_ID=${cursoIDs.join(",")}`);

      if (!pagosResponse.ok) {
        toast.error("Error al cargar los pagos de los cursos");
        throw new Error("Error al cargar los pagos de los cursos");
      }
      const pagosData = await pagosResponse.json();

      const cursosConPagos = data.map((curso: Curso) => ({
        ...curso,
        Pagos: pagosData.filter((pago: any) => pago.Grado_ID === curso.ID),
      }));

      setCursos(cursosConPagos);
    } catch (error: any) {
      setErrorCursos(error);
    } finally {
      setIsLoadingCursos(false);
    }
  };

  const contextValue: AppContextProps = {
    users,
    isLoading,
    isError,
    fetchUsuariosByCurso,
    cursos,
    isLoadingCursos,
    errorCursos,
    fetchCursos,
    usersByCurso,
    isLoadingByCurso,
    errorByCurso,
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchCursos();
  }, []);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
