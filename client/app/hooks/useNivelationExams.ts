"use client";
import { useEffect, useState } from "react";
import { User } from "../components/navbar";
import { toast } from "sonner";

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

const useGetNivelationExam = (): {
  loggedInUser: User | null;
  examsAssociated: Exam[];
  userHasExams: boolean;
} => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const [examsAssociated, setExamsAssociated] = useState<Exam[]>([]);

  const userHasExams = examsAssociated.length > 0 ? true : false;

  useEffect(() => {
    const userDataSessionStorage = sessionStorage.getItem("user");
    const userDataLocalStorage = localStorage.getItem("user");

    if (userDataSessionStorage) {
      const { Email } = JSON.parse(userDataSessionStorage);
      getUserByEmail(Email);
    } else if (userDataLocalStorage) {
      const { Email } = JSON.parse(userDataLocalStorage);
      getUserByEmail(Email);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserByEmail = async (Email: string) => {
    try {
      const response = await fetch(`https://interchange-production.up.railway.app/api/users?email=${Email}`);
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
      const response = await fetch(`https://interchange-production.up.railway.app/api/users/${userId}/examenes-asociados`);
      const data = await response.json();
      if (!response.ok) {
        toast.error("Error al obtener los exámenes asociados");
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      } 
      setExamsAssociated(data.examenesAsociados);
    } catch (error) {
      console.error("Error al obtener los exámenes asociados:", error);
    }
  };

  return { loggedInUser, examsAssociated, userHasExams };
};

export default useGetNivelationExam;
