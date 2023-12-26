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
    async function fetchCompletedExams() {
      try {
        const response = await fetch("http://localhost:3001/api/examen-completado");
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        } else { 
             toast.success("Exámenes completados obtenidos con éxito")}

        const data = await response.json();
        const completedExamsWithDetails = await Promise.all(
          data.examenes.map(async (completedExam:any) => {
            const examenResponse = await fetch(`http://localhost:3001/api/examen?examenID=${completedExam.examenID}`);
        const userDataResponse = await fetch(`http://localhost:3001/api/users?userID=${completedExam.userID}`);
            const examenData = await examenResponse.json();
            const userData = await userDataResponse.json();

            return {
              ...completedExam,
              examenTitle: examenData.examenes[0].titulo,
              userName: userData[0]?.Nombre+ (" ") + userData[0]?.Apellido,
              userEmail: userData[0]?.Email,
            };
          })
        );
    
        setCompletedExams(completedExamsWithDetails);
        setLoading(false);
      } catch (error:any) {
        setError(error.message || "Hubo un error al obtener los exámenes completados");
        setLoading(false);
        toast.error("Error completados obtenidos con éxito")
      }
    }
    

    fetchCompletedExams();
  }, []);

  return { completedExams, loadingResult, errorResult };
}

export default useGetCompletedExams;
