import { useState, useEffect } from "react";
import {  toast } from 'sonner'
export interface ExamResults {
    userEmail?: string;
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
  }
  
function useGetCompletedExams() {
  const [completedExams, setCompletedExams] = useState<ExamResults[]>([]);
  const [loadingResult, setLoading] = useState(true);
  const [errorResult, setError] = useState(null);

  useEffect(() => {
    let successFlag = false;

    async function fetchCompletedExams() {
      try {
        const response = await fetch("http://localhost:3001/api/examen-completado");
        if (!response.ok) {
          toast.error("Error completados obtenidos con éxito");
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const examPromises = data.examenes.map(async (completedExam: any) => {
          const examenResponse = await fetch(`http://localhost:3001/api/examen?examenID=${completedExam.examenID}`);
          const userDataResponse = await fetch(`http://localhost:3001/api/users?userID=${completedExam.userID}`);
          const examenData = await examenResponse.json();
          const userData = await userDataResponse.json();
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
        setError(error.message || "Hubo un error al obtener los exámenes completados");
        setLoading(false);
      } finally {
        // Mostramos la alerta solo si las operaciones se han completado con éxito y la notificación aún no se ha mostrado
        if (successFlag) {
          toast.success("Exámenes completados obtenidos con éxito");
        }
      }
    }

    fetchCompletedExams();
  }, []);

  return { completedExams, loadingResult, errorResult };
}

export default useGetCompletedExams;