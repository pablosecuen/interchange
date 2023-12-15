"use client";
import React, { useState } from "react";
import useExamCreation from "../hooks/useExamCreation";

export interface Exam {
  ID?: string;
  titulo: string;
  NotaFinal?: number | null;
  UsuarioID?: string | null;
  createdAt?: string;
  updatedAt?: string;
  preguntas: Question[];
}

// Question.ts
export interface Question {
  enunciado: string;
  respuestas: string[];
  respuestaCorrecta: string;
}

const Nivelador = () => {
  const { createExam, loading, error } = useExamCreation();
  const [exam, setExam] = useState<Exam>({
    titulo: "",
    preguntas: [],
  });

  const [currentQuestion, setCurrentQuestion] = useState<Question>({
    enunciado: "",
    respuestas: [""], // Un array con 4 strings vacíos para las respuestas
    respuestaCorrecta: "",
  });

  const handleAddResponse = () => {
    setCurrentQuestion({
      ...currentQuestion,
      respuestas: [...currentQuestion.respuestas, ""],
    });
  };

  const handleResponseChange = (index: number, value: string) => {
    const updatedResponses = [...currentQuestion.respuestas];
    updatedResponses[index] = value;
    setCurrentQuestion({
      ...currentQuestion,
      respuestas: updatedResponses,
    });
  };

  const handleAddQuestion = () => {
    setExam({
      ...exam,
      preguntas: [...exam.preguntas, currentQuestion],
    });
    setCurrentQuestion({
      enunciado: "",
      respuestas: [""],
      respuestaCorrecta: "",
    });
  };

  const handleAddNewQuestion = () => {
    setExam({
      ...exam,
      preguntas: [...exam.preguntas, currentQuestion],
    });
    setCurrentQuestion({
      enunciado: "",
      respuestas: ["", "", "", ""],
      respuestaCorrecta: "",
    });
  };

  const handleCreateExam = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddQuestion();
  };

  return (
    <form onSubmit={handleCreateExam}>
      <h2>Crear Examen</h2>
      <label>
        Título:
        <input
          type="text"
          name="titulo"
          value={exam.titulo}
          onChange={(e) => setExam({ ...exam, titulo: e.target.value })}
        />
      </label>

      <h3>Agregar Pregunta</h3>
      <label>
        Enunciado:
        <input
          type="text"
          value={currentQuestion.enunciado}
          onChange={(e) => setCurrentQuestion({ ...currentQuestion, enunciado: e.target.value })}
        />
      </label>

      <h4>Respuestas</h4>
      {currentQuestion.respuestas.map((respuesta, index) => (
        <div key={index}>
          <label>
            Respuesta {index + 1}:
            <input
              type="text"
              value={respuesta}
              onChange={(e) => handleResponseChange(index, e.target.value)}
            />
          </label>
          <label>
            <input
              type="radio"
              name="respuestaCorrecta"
              checked={currentQuestion.respuestaCorrecta === respuesta}
              onChange={() =>
                setCurrentQuestion({ ...currentQuestion, respuestaCorrecta: respuesta })
              }
            />
            Correcta
          </label>
          <button type="button" onClick={handleAddResponse}>
            +
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAddQuestion}>
        Agregar Pregunta
      </button>
      <button type="button" onClick={handleAddNewQuestion}>
        Agregar Nueva Pregunta
      </button>

      <button type="submit" className="mt-20">
        Enviar examen
      </button>
    </form>
  );
};

export default Nivelador;
