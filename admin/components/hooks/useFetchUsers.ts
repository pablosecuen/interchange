"use client"
import { useState, useEffect } from 'react';
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

        console.log(data);
        
    // Para cada usuario, obtén el grado asociado
    const usersWithGrades = await Promise.all(
      data.map(async (user: User) => {
        const gradoResponse = await fetch(`http://localhost:3001/api/grados?ID=${user.Grado_ID}`);
        if (!gradoResponse.ok) {
          throw new Error('Error al cargar el grado del usuario');
        }
        const gradoData = await gradoResponse.json();
        // Agrega la información del grado al usuario
        return { ...user, Grado: gradoData };
      })
    );

        setUsers(usersWithGrades);
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
