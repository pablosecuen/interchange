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

console.log(users);

  

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
              throw new Error('Error al cargar el grado del usuario');
            }
            const gradoData = await gradoResponse.json();

            // Obtener los pagos asociados al grado del usuario
            const pagosResponse = await fetch(`http://localhost:3001/api/pagos?Grado_ID=${user.Grado_ID}`);
            if (!pagosResponse.ok) {
              throw new Error('Error al cargar los pagos del usuario');
            }
            const pagosData = await pagosResponse.json();

            // Agregar la información del grado y los pagos al usuario
            return {
              ...user,
              Grado: gradoData,
              Pagos: pagosData,
            };
          }
          // Si el usuario no tiene un Grado_ID, devolvemos el usuario sin modificar
          return user;
        })
      );
      toast.success("Usuarios cargados correctamente")
      setUsers(usersWithGradesAndPayments);
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

// Resto de tu código...


  return { users, isLoading, error };
};

export default useFetchUsers;
