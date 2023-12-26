"use client"
import { useState, useEffect } from 'react';
import {  toast } from 'sonner'
export interface User {
  ID: number;
Nombre: string;
Apellido: string;
Email: string;
Tipo: string;
Grado_ID: string;
createdAt: string;
updatedAt: string;
Activo: Boolean;
}
const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users');
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      const data = await response.json();

      const usersWithGradesAndPayments = await Promise.all(
        data.map(async (user: User) => {
          if (user.Grado_ID !== null) {
            // Obtener el grado asociado al usuario
            const gradoResponse = await fetch(`http://localhost:3001/api/grados?ID=${user.Grado_ID}`);
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
        toast.success("Usuarios cargados correctamente")
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  return { users, isLoading, error };
};

export default useFetchUsers;
