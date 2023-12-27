"use client";
import Logo from "@/app/components/logo";
import useGetNivelationExam from "@/app/hooks/useNivelationExams";
import useSaveExamsResults from "@/app/hooks/useSaveExamsResults";
import Image from "next/image";
import { useState } from "react";
import spinner from "@/public/assets/spinner/Spinnerblack.gif";
import Link from "next/link";

function ExamenPage({ examId }: any) {
  const { loggedInUser, examsAssociated } = useGetNivelationExam();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const { saveExamResults, loading } = useSaveExamsResults();

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    const { value } = e.target;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: value,
    });
  };

  const handleClickSave = () => {
    setShowModal(true);

    try {
      setTimeout(async () => {
        await saveExamResults(loggedInUser, examsAssociated, selectedAnswers);
        setIsSuccessful(true);
      }, 4000);
    } catch (error) {
      console.error("Error al enviar el examen:", error);
    }
  };

  const renderQuestions = () => {
    return examsAssociated.map((exam, index) => (
      <div key={index} className="w-full flex flex-col justify-start ">
        <h3 className="text-center text-2xl font-bold tracking-widest py-8 capitalize ">
          {exam.titulo}
        </h3>
        <div className="w-full flex flex-wrap gap-10  justify-center">
          {exam.preguntas.map((question, qIndex) => (
            <div key={qIndex} className="border-4 rounded-3xl p-4 relative">
              <span className="absolute right-3 top-2 border rounded-full px-2">{qIndex}</span>
              <p className="font-bold text-center mt-6">{question.enunciado}</p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {question.respuestas.map((answer, aIndex) => (
                  <li key={aIndex} className="flex items-center">
                    <input
                      type="checkbox"
                      value={answer}
                      id={`answer_${qIndex}_${aIndex}`}
                      onChange={(e) => handleAnswerSelection(e, qIndex)}
                      checked={selectedAnswers[qIndex] === answer}
                      className="mr-2"
                    />
                    <label htmlFor={`answer_${qIndex}_${aIndex}`}>{answer}</label>
                  </li>
                ))}
              </ul>
              <div className="w-full text-center py-4">
                {" "}
                <span className="font-bold">
                  {selectedAnswers[qIndex] || "Ninguna seleccionada"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="animate-fade  h-[90vh] w-full flex justify-center mt-20 relative overflow-hidden ">
      {showModal && (
        <div className="absolute flex flex-col justify-between items-center animate-fade gap-8 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-50 bg-slate-200 w-11/12 h-[50vh] md:w-96 md:h-96 rounded-3xl p-4 md:p-20">
          <p className="text-center font-bold md:text-xl">
            {isSuccessful
              ? "Examen enviado correctamente"
              : "Por favor, espere mientras el examen se envía..."}
          </p>
          <Logo size="xl" />
          {isSuccessful ? (
            <Link href="/campus?section=home">
              <button className="yellow-btn">Ir a la página principal</button>
            </Link>
          ) : (
            <Image src={spinner} alt="spinner" width={100} height={100} />
          )}
        </div>
      )}
      {/* Renderizar el modal */}

      {loggedInUser && examsAssociated.length > 0 ? (
        renderQuestions()
      ) : (
        <p className="text-3xl">Cargando...</p>
      )}
      <button
        onClick={handleClickSave}
        disabled={loading}
        className="absolute bottom-10 right-1/2 translate-x-1/2 yellow-btn"
      >
        Enviar resultados
      </button>
    </div>
  );
}

export default ExamenPage;
