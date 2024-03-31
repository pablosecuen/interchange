import { useQuery } from 'react-query';
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

const useFetchUsers = () => {
  const fetchUsers = async () => {
    const response = await fetch(`${baseUrl}/api/users`);

    if (!response.ok) {
      throw new Error('Error al cargar los usuarios');
    }

  
    return response.json();
  };

  const { data: users, isLoading, isError, error } = useQuery<User[], Error>('users', fetchUsers);

  if (isError) {
    toast.error('Error al cargar usuarios');
  }

  return { users, isLoading, isError, error };
};

export default useFetchUsers;
