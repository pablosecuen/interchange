const { Usuario, Examen, Grado, Pago, Notas } = require("../../db");
const { sendEmailNotificationRegister, sendEmailNotificationCurso } = require("../nodemailer");
/* const estructuraNotas = require("../middleware/Notas.middleware");
const { createNotas } = require("./Notas.controller"); */

const createUserController = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await Usuario.create(userData);

    const newUserEmail = newUser.Email;
    sendEmailNotificationRegister(newUserEmail);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario", error: error.message });
  }
};

const getAllUsuariosController = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      where: req.usuariosFiltros,
      include: [
        {
          model: Grado,
          as: "Grado", // Alias definido en la asociación Usuario.belongsTo(Grado, { as: "Grado" })
        },
        {
          model: Pago,
          include: [
            {
              model: Usuario, // Incluir Usuario a través de la asociación Pago.belongsTo(Usuario)
            },
            {
              model: Grado, // Incluir Grado a través de la asociación Pago.belongsTo(Grado)
            },
          ],
        },
        {
          model: Notas, // Agregamos la inclusión de la relación Notas
          as: "RegistroNotas", // El nombre de la asociación definida en Usuario.hasMany(Notas, { foreignKey: "Usuario_ID", as: "RegistroNotas" })
        },
      ],
    });

    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

const patchUsuarioController = async (req, res) => {
  const { id } = req.params;
  const { Grado_ID, Grado_Nombre, Grado_Categoria } = req.body;

  try {
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (Grado_ID && Grado_Nombre && Grado_Categoria) {
      user.Grado_ID = Grado_ID;
      user.Grado_Nombre = Grado_Nombre;
      user.Grado_Categoria = Grado_Categoria;

      await user.save();
      const currentYear = new Date().getFullYear();
      const nuevoPago = await Pago.create({
        EstadoCuota: "Pendiente",
        EstadoInscripcionGrado: "Pendiente",
        EstadoInscripcionExamenes: "Pendiente",
        VencimientoCuota: [
          {
            mes: "inscripcion",
            vencimiento: `${currentYear}-03-10`,
            pagado: false,
          },
          {
            mes: "marzo",
            vencimiento: `${currentYear}-04-10`,
            pagado: false,
          },
          {
            mes: "abril",
            vencimiento: `${currentYear}-05-10`,
            pagado: false,
          },
          {
            mes: "mayo",
            vencimiento: `${currentYear}-06-10`,
            pagado: false,
          },
          {
            mes: "junio",
            vencimiento: `${currentYear}-07-10`,
            pagado: false,
          },
          {
            mes: "julio",
            vencimiento: `${currentYear}-08-10`,
            pagado: false,
          },
          {
            mes: "agosto",
            vencimiento: `${currentYear}-09-10`,
            pagado: false,
          },
          {
            mes: "septiembre",
            vencimiento: `${currentYear}-10-10`,
            pagado: false,
          },
          {
            mes: "octubre",
            vencimiento: `${currentYear}-11-10`,
            pagado: false,
          },
          {
            mes: "noviembre",
            vencimiento: `${currentYear}-12-10`,
            pagado: false,
          },
          {
            mes: "examenes",
            vencimiento: `${currentYear}-12-10`,
            pagado: false,
          },
          {
            mes: `inscripcion ${currentYear + 1}`,
            vencimiento: `${currentYear + 1}-02-10`,
            pagado: false,
          },
        ],
        VencimientoExamen: `${currentYear}-12-10`,
        VencimientoInscripcionGrado: `${currentYear}-03-10`,
        Grado_ID: user.Grado_ID,
        Usuario_ID: id,
      });
      sendEmailNotificationCurso(user.Email, user.Grado_Nombre, user.Grado_Categoria);
      return res
        .status(200)
        .json({ message: "Datos de grado actualizados correctamente", nuevoPago });
    }
    return res.status(200).json({ message: "Datos de grado actualizados correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar los datos de usuario" });
  }
};

const patchTiposController = async (req, res) => {
  const { id } = req.params;
  const { Tipo } = req.body;

  try {
    const user = await Usuario.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    if (Tipo) {
      user.Tipo = Tipo;

      await user.save();

      return res.status(200).json({ message: "Datos de tipo actualizados correctamente" });
    }
    return res.status(200).json({ message: "Datos de tipo actualizados correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar los datos de tipo" });
  }
};

const deleteUsuarioController = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuario.Activo = false;
    await usuario.save();

    res.status(200).json({ message: "Usuario desactivado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al desactivar el usuario", error: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { Email: email } });

    if (!user || user.Password !== password) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    return res.status(200).json({ message: "Inicio de sesión exitoso", user });
  } catch (error) {
    return res.status(500).json({ error: "Error en el servidor al iniciar sesión" });
  }
};

const getExamenesAsociadosController = async (req, res) => {
  try {
    const { userId } = req.params;
    const usuario = await Usuario.findByPk(userId, { include: Examen }); // Incluimos Examen en la búsqueda

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    const examenesAsociados = usuario.Examens.map((examen) => examen.toJSON());
    res.status(200).json({ examenesAsociados });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los exámenes asociados", error: error.message });
  }
};

const getAnotaciones = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.status(200).json({ anotaciones: usuario.Anotaciones });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las anotaciones" });
  }
};

const createAnotaciones = async (req, res) => {
  try {
    const { id } = req.params;
    const { Anotaciones } = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    usuario.Anotaciones = Anotaciones;
    await usuario.save();

    res.status(201).json({ mensaje: "Anotaciones creadas correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear las anotaciones" });
  }
};

const updateAnotaciones = async (req, res) => {
  try {
    const { id } = req.params;
    const { Anotaciones } = req.body;

    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    usuario.Anotaciones = Anotaciones;
    await usuario.save();

    res.status(200).json({ mensaje: "Anotaciones actualizadas correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al actualizar las anotaciones" });
  }
};

module.exports = {
  createUserController,
  getAllUsuariosController,
  patchUsuarioController,
  deleteUsuarioController,
  loginController,
  getExamenesAsociadosController,
  getAnotaciones,
  createAnotaciones,
  updateAnotaciones,
  patchTiposController,
};
