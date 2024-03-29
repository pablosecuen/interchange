/* eslint-disable */
import useGetNivelationExam from "@/app/hooks/useNivelationExams";
import { useEffect, useState } from "react";
import ExamenPage from "./components/examen-page";
import { Toaster } from "sonner";

function ExamenNivelador() {
  const { loggedInUser, examsAssociated } = useGetNivelationExam();
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [selectedExamId, setSelectedExamId] = useState(null);
  const [examCompleted, setExamCompleted] = useState(false);

  useEffect(() => {
    // Verificar si el examen ya ha sido completado
    const hasCompletedExam = localStorage.getItem("completedExam");

    if (hasCompletedExam) {
      setExamCompleted(true);
    }
  }, []);

  const handleExamClick = (examId: any) => {
    setSelectedExamId(examId);
  };

  const handleExamCompletion = () => {
    setExamCompleted(true);
    localStorage.setItem("completedExam", "true");
  };

  const renderExamTable = () => {
    return (
      <div className=" w-full h-full flex justify-center items-center relative animate-fade">
        <Toaster richColors={true} expand={false} position="top-center" />
        {loggedInUser && examsAssociated.length > 0 ? (
          <table className="w-full md:m-20 md-2 ">
            <thead className="w-auto bg-gray-200">
              <tr className="grid grid-cols-2 font-bold text-xl tracking-widest">
                <th className=" border h-14 flex items-center justify-center">Titulo</th>
                <th className=" border h-14 flex items-center justify-center">Acción</th>
              </tr>
            </thead>
            <tbody>
              {examsAssociated.map((exam) => (
                <tr key={exam.ID} className="grid grid-cols-2">
                  <td className=" border h-14 flex items-center justify-center"> {exam.titulo}</td>
                  <td className=" border h-14 flex items-center justify-center">
                    <button className="yellow-btn" onClick={() => handleExamClick(exam.ID)}>
                      Rendir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-3xl">Cargando...</p>
        )}
      </div>
    );
  };

  return (
    <>
      {selectedExamId ? (
        <ExamenPage
          examId={selectedExamId}
          onExamCompletion={handleExamCompletion}
          examCompleted={examCompleted}
        />
      ) : (
        renderExamTable()
      )}
    </>
  );
}

export default ExamenNivelador;
