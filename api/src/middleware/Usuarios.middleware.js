// middleware.js

const validateUserData = (req, res, next) => {
  const { Nombre, Apellido, Email, Password, Tipo, Grado_ID } = req.body;

  // Verificar que los campos requeridos estén presentes
  if (!Nombre || !Apellido || !Email || !Password || !Tipo || !Grado_ID) {
    return res.status(400).json({ message: "Todos los campos son requeridos." });
  }

  // Validar el formato del Email con una expresión regular
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(Email)) {
    return res.status(400).json({ message: "El Email no tiene un formato válido." });
  }

  // Verificar que el nombre no tenga más de 20 caracteres y no contenga caracteres especiales
  const nombreRegex = /^[a-zA-Z\s]{1,20}$/;
  if (!nombreRegex.test(Nombre)) {
    return res.status(400).json({
      message:
        "El Nombre no puede tener más de 20 letras y no debe contener caracteres especiales.",
    });
  }

  if (Password.length < 8) {
    return res.status(400).json({ message: "La contraseña debe tener al menos 8 caracteres." });
  }

  // Si pasa la validación, llamar a next() para continuar con el siguiente middleware o el controlador
  next();
};

module.exports = { validateUserData };
