"use client"
import { useState, useEffect } from 'react';
import {  toast } from 'sonner'
import { User } from '../../types/user';

const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://interchange-production.up.railway.app/api/users');
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios');
      }
      const data = await response.json();
console.log(data);

      const usersWithGradesAndPayments = await Promise.all(
        data.map(async (user: User) => {
          if (user.Grado_ID !== null) {
            // Obtener el grado asociado al usuario
            const gradoResponse = await fetch(`https://interchange-production.up.railway.app/api/grados?ID=${user.Grado_ID}`);
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
      setLoading(false);
    }
  };

  fetchUsers();
}, []);

  return { users, isLoading, error };
};

export default useFetchUsers;
