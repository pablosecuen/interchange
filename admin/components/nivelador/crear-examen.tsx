"use client";
import React, { useState } from "react";
import useExamCreation from "../hooks/useExamCreation";
import { Toaster } from "sonner";
import LoadingError from "../loading-error";

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

const CrearExamen = () => {
  const { createExam, loading, error } = useExamCreation();

  const [exam, setExam] = useState<Exam>({
    titulo: "",
    preguntas: [{ enunciado: "", respuestas: [""], respuestaCorrecta: "" }],
  });
  const [checkedRespuestas, setCheckedRespuestas] = useState<boolean[][]>(
    exam.preguntas.map(() => [])
  );

  const agregarRespuesta = (indice: number, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newExam = { ...exam };
    newExam.preguntas[indice].respuestas.push("");
    setExam(newExam);
  };

  const agregarPregunta = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newExam = { ...exam };
    newExam.preguntas.push({ enunciado: "", respuestas: [""], respuestaCorrecta: "" });
    setExam(newExam);
  };

  const handleExamChange = (
    indicePregunta: number,
    campo: string,
    valor: string,
    indiceRespuesta?: number | undefined
  ) => {
    const newExam = { ...exam };
    if (campo === "enunciado") {
      newExam.preguntas[indicePregunta].enunciado = valor;
    } else if (campo === "respuesta" && indiceRespuesta !== undefined) {
      newExam.preguntas[indicePregunta].respuestas[indiceRespuesta] = valor;
    } else if (campo === "respuestaCorrecta" && indiceRespuesta !== undefined) {
      newExam.preguntas[indicePregunta].respuestaCorrecta = indiceRespuesta.toString();
    }
    setExam(newExam);
  };

  const handleCheckBoxChange = (
    indicePregunta: number,
    indiceRespuesta: number,
    checked: boolean
  ) => {
    const newCheckedRespuestas = [...checkedRespuestas];
    newCheckedRespuestas[indicePregunta][indiceRespuesta] = checked;
    setCheckedRespuestas(newCheckedRespuestas);

    const newExam = { ...exam };
    newExam.preguntas[indicePregunta].respuestaCorrecta = indiceRespuesta.toString();
    setExam(newExam);
  };

  return (
    <div className="w-full h-full border">
      <Toaster richColors position="top-center" />
      <LoadingError isLoading={loading} error={error} />
      {!loading && !error && (
        <form>
          {exam.preguntas.map((pregunta, index) => (
            <div className="pregunta" key={`pregunta-${index}`}>
              <label htmlFor={`pregunta-${index}-text`}>Pregunta:</label>
              <input
                type="text"
                id={`pregunta-${index}-text`}
                value={pregunta.enunciado}
                onChange={(e) => handleExamChange(index, "enunciado", e.target.value)}
                className="bg-transparent border-b"
              />
              <br />
              {pregunta.respuestas.map((respuesta, respIndex) => (
                <div className="respuesta" key={`respuesta-${index}-${respIndex}`}>
                  <label htmlFor={`respuesta-${index}-${respIndex}-text`}>Respuesta:</label>
                  <input
                    type="text"
                    id={`respuesta-${index}-${respIndex}-text`}
                    value={respuesta}
                    onChange={(e) =>
                      handleExamChange(index, "respuesta", e.target.value, respIndex)
                    }
                    className="bg-transparent border-b"
                  />
                  <input
                    type="checkbox"
                    id={`respuesta-${index}-${respIndex}-correcta`}
                    checked={checkedRespuestas[index][respIndex]}
                    onChange={(e) => handleCheckBoxChange(index, respIndex, e.target.checked)}
                  />
                </div>
              ))}
              <button type="button" onClick={(e) => agregarRespuesta(index, e)}>
                + Agregar Respuesta
              </button>
            </div>
          ))}
          <button type="button" onClick={(e) => agregarPregunta(e)}>
            + Agregar Pregunta
          </button>
        </form>
      )}
    </div>
  );
};

export default CrearExamen;
