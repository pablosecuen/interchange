"use client";
import { useEffect, useState } from "react";
import { User } from "../components/navbar";

export interface Exam {
  ID: string;
  titulo: string;
  preguntas: {
    enunciado: string;
    respuestas: string[];
    respuestaCorrecta: string;
  }[];
  // ... Otros campos del examen
}

const useGetNivelationExam = (): { loggedInUser: User | null; examsAssociated: Exam[] } => {
  const [loggedInUser, setLoggedInUser] = useState<User  | null>(null);
  const [examsAssociated, setExamsAssociated] = useState<Exam[]>([]);

  useEffect(() => {
    const userDataSessionStorage = sessionStorage.getItem("loginFormData");
    const userDataLocalStorage = localStorage.getItem("loginFormData");

    if (userDataSessionStorage) {
      const { email } = JSON.parse(userDataSessionStorage);
      getUserByEmail(email);
    } else if (userDataLocalStorage) {
      const { email } = JSON.parse(userDataLocalStorage);
      getUserByEmail(email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserByEmail = async (email: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users?email=${email}`);
      const users: User[] = await response.json();
      if (users.length > 0) {
        setLoggedInUser(users[0]);
        getExamsAssociated(users[0].ID);
      }
    } catch (error) {
      console.error("Error al obtener el usuario:", error);
    }
  };

  const getExamsAssociated = async (userId: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${userId}/examenes-asociados`);
      const data = await response.json();
      setExamsAssociated(data.examenesAsociados);
    } catch (error) {
      console.error("Error al obtener los exámenes asociados:", error);
    }
  };

  return { loggedInUser, examsAssociated };
};

export default useGetNivelationExam;
