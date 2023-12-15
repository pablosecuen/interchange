import React, { useState } from "react";
import { User } from "../hooks/useFetchUsers";

interface SendExamToUserProps {
  users: User[]; // Lista de usuarios disponibles
  onSendExam: (userId: string) => void;
}

const SendExamToUser: React.FC<SendExamToUserProps> = ({ users, onSendExam }) => {
  const [selectedUser, setSelectedUser] = useState<string>("");

  const handleSendExam = () => {
    // Envia el examen al usuario seleccionado
    onSendExam(selectedUser);
    setSelectedUser(""); // Limpiar la selección después de enviar el examen
  };

  return (
    <div>
      <h2>Enviar Examen</h2>
      <label>
        Seleccionar Usuario:
        <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">Seleccionar usuario</option>
          {users.map((user) => (
            <option key={user.ID} value={user.ID}>
              {user.Nombre}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleSendExam} disabled={!selectedUser}>
        Enviar Examen
      </button>
    </div>
  );
};

export default SendExamToUser;
