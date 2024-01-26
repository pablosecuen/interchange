"use client"
import { useState, useEffect } from 'react';
import {  toast } from 'sonner'
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
    RegistroNotas:any
}
const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/users`);
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      const data = await response.json();


      const usersWithGradesAndPayments = await Promise.all(
        data.map(async (user: User) => {
          if (user.Grado_ID !== null) {
            // Obtener el grado asociado al usuario
            const gradoResponse = await fetch(`${baseUrl}/api/grados?ID=${user.Grado_ID}`);
            if (!gradoResponse.ok) {
              toast.error("Error al cargar usuarios cargados correctamente")
              throw new Error('Error al cargar el grado del usuario');
            } 
            const gradoData = await gradoResponse.json();
            // Filtrar los pagos que corresponden al ID del usuario actual
            const pagoUsuario = gradoData[0].Pagos.find((pago: any) => pago.Usuario_ID === user.ID);
            // Agregar la información del grado y los pagos al usuario
            return {
              ...user,
              Grado: gradoData,
              Pagos: pagoUsuario ? [pagoUsuario] : []
            };
          }         
          return user;
        })
        );
        
        setUsers(usersWithGradesAndPayments);
    } catch (error: any) {
      setError(error);
    } finally {
      toast.error("Error al cargar usuarios")
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  return { users, isLoading, error };
};

export default useFetchUsers;
