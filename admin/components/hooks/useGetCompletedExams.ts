import { useState, useEffect } from "react";
import {  toast } from 'sonner'
import { baseUrl } from "./baseurl";
export interface ExamResults {
  userEmail?: string;
  titulo?: string;
    Email?: string;
    userName?: string;
  examenTitle?: string;
    userID: string;
    username: string;
    userlastname: string;
    examenID: string;
    examTitle: string;
    respuestas: {
      enunciado: string;
      respuestaUsuario: string;
      respuestaCorrecta: string;
    }[];
  nota?: number;
  createdAt?: any
  }
  
function useGetCompletedExams() {
  const [completedExams, setCompletedExams] = useState<ExamResults[]>([]);
  const [loadingResult, setLoading] = useState(true);
  const [errorResult, setError] = useState(null);

  useEffect(() => {
    let successFlag = false;

    async function fetchCompletedExams() {
      try {
        const response = await fetch(`${baseUrl}/api/examen-completado`);
        if (!response.ok) {
          toast.error("Error completados obtenidos con éxito");
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
       const examPromises = data.examenes.map(async (completedExam: any) => {
        const [examenResponse, userDataResponse] = await Promise.all([
          fetch(`${baseUrl}/api/examen?examenID=${completedExam.examenID}`),
          fetch(`${baseUrl}/api/users?userID=${completedExam.userID}`),
        ]);

        const [examenData, userData] = await Promise.all([
          examenResponse.json(),
          userDataResponse.json(),
        ]);

        return {
          ...completedExam,
          examenTitle: examenData.examenes[0].titulo,
          userName: userData[0]?.Nombre + " " + userData[0]?.Apellido,
          userEmail: userData[0]?.Email,
        };
      });

      const completedExamsWithDetails = await Promise.all(examPromises);
      setCompletedExams(completedExamsWithDetails);

      // Marcamos que las operaciones se han completado con éxito
      successFlag = true;

      setLoading(false);
      } catch (error: any) {
        toast.error("Error completados obtenidos con éxito");
      setError(error.message || "Hubo un error al obtener los exámenes completados");
      setLoading(false);
    } finally {
    
    }
  }

  fetchCompletedExams();
}, []);

  return { completedExams, loadingResult, errorResult };
}

export default useGetCompletedExams;