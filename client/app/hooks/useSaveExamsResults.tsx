import { useState } from "react";

export interface ExamResults {
  userID: string;
  username: string;
  userlastname: string;
  examenID: string;
  examTitle: string;
  preguntas: {
    enunciado: string;
    respuestaUsuario: string;
    respuestaCorrecta: string;
  }[];
}

function useSaveExamsResults() {
  const [loading, setLoading] = useState(false);

  const guardarResultadosExamen = async (data: ExamResults) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/examen-completado/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      return await response.json();
    } catch (error: any) {
      throw new Error(`Error al guardar los resultados del examen: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const saveExamResults = async (loggedInUser: any, examsAssociated: any, selectedAnswers: any) => {
    const userId = loggedInUser?.ID;
    const username = loggedInUser?.Nombre;
    const userlastname = loggedInUser?.Apellido;
    const examId = examsAssociated[0]?.ID;
    const examTitle = examsAssociated[0]?.titulo;
    const questions = examsAssociated[0]?.preguntas;

    try {
      const preguntasYRespuestas = questions.map((question: any, index: number) => ({
        enunciado: question.enunciado,
        respuestaUsuario: selectedAnswers[index] || "", // Respuesta del usuario o cadena vacía si no respondió
        respuestaCorrecta: question.respuestaCorrecta,
      }));

      const data: ExamResults = {
        userID: userId,
        username: username,
        userlastname: userlastname,
        examenID: examId,
        examTitle: examTitle,
        preguntas: preguntasYRespuestas,
      };

      await guardarResultadosExamen(data);
      alert("Resultados del examen guardados exitosamente");
    } catch (error) {
      alert("error");
      console.error("Error al guardar los resultados del examen:", error);
      // Manejar el error, mostrar mensaje al usuario, etc.
    }
  };

  return { saveExamResults, loading };
}

export default useSaveExamsResults;
