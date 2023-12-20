import useGetNivelationExam from "@/app/hooks/useNivelationExams";
import useSaveExamsResults from "@/app/hooks/useSaveExamsResults";
import { useState } from "react";

function ExamenNivelador() {
  const { loggedInUser, examsAssociated } = useGetNivelationExam();
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const { saveExamResults, loading } = useSaveExamsResults();

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>, questionIndex: number) => {
    const { value } = e.target;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: value,
    });
  };

  const handleClickSave = async () => {
    await saveExamResults(loggedInUser, examsAssociated, selectedAnswers);
  };

  const renderQuestions = () => {
    return examsAssociated.map((exam, index) => (
      <div key={index} className="w-full">
        <h3 className="text-center text-2xl font-bold tracking-widest py-8">{exam.titulo}</h3>
        <div className="w-full flex flex-wrap gap-10 justify-center">
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
    <div className="animate-fade  min-h-[90vh] w-full mt-20 flex justify-center items-center relative">
      {loggedInUser && examsAssociated.length > 0 ? (
        renderQuestions()
      ) : (
        <p className="text-3xl">Cargando...</p>
      )}
      <button
        onClick={handleClickSave}
        disabled={loading}
        className="absolute bottom-6 right-1/2 translate-x-1/2 yellow-btn"
      >
        Guardar resultados
      </button>
    </div>
  );
}

export default ExamenNivelador;
