import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { baseUrl } from './baseurl';

export interface User {
  ID: string;
  Nombre: string;
  Apellido: string;
  Telefono: string;
  Email: string;
  Password: string;
  Anotaciones?: string | null;
  Tipo?: string;
  Activo: boolean;
  Grado_ID?: string | null;
  NombreAdulto?: string | null;
  ApellidoAdulto?: string | null;
  TelefonoAdulto?: string | null;
  EmailAdulto?: string | null;
  RegistroNotas: any;
}

const useFetchUsers = (currentPage: number, pageSize: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/api/users?page=${currentPage}&pageSize=${pageSize}`
        );
        if (!response.ok) {
          throw new Error('Error al cargar los usuarios');
        }
        
        const data = await response.json();
  

        setUsers(data);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
        toast.error('Error al cargar usuarios');
      }
    };

    fetchUsers();
  }, [currentPage, pageSize]);

  return { users, isLoading, error, currentPage };
};

export default useFetchUsers;




