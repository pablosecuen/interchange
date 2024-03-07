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

const useFetchUsers = (currentPage?: number, pageSize?: number) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let url = `${baseUrl}/api/users`;

        const response = await fetch(url);
        
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
  }, []);

  return { users, isLoading, error };
};

export default useFetchUsers;
