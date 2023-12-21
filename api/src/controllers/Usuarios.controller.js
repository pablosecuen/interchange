const { Usuario, Examen, Grado, Pago } = require("../../db");

const createUserController = async (req, res) => {
  try {
    const userData = req.body;
    console.log(req.body);
    const newUser = await Usuario.create(userData);
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

      const nuevoPago = await Pago.create({
        EstadoCuota: "Pendiente",
        EstadoInscripcionGrado: "Pendiente",
        EstadoInscripcionExamenes: "Pendiente",
        VencimientoCuota: [
          {
            mes: "febrero",
            vencimiento: "2023-03-10",
            pagado: false,
          },
          {
            mes: "marzo",
            vencimiento: "2023-04-10",
            pagado: false,
          },
          {
            mes: "abril",
            vencimiento: "2023-05-10",
            pagado: false,
          },
          {
            mes: "mayo",
            vencimiento: "2023-06-10",
            pagado: false,
          },
          {
            mes: "junio",
            vencimiento: "2023-07-10",
            pagado: false,
          },
          {
            mes: "julio",
            vencimiento: "2023-08-10",
            pagado: false,
          },
          {
            mes: "agosto",
            vencimiento: "2023-09-10",
            pagado: false,
          },
          {
            mes: "septiembre",
            vencimiento: "2023-10-10",
            pagado: false,
          },
          {
            mes: "octubre",
            vencimiento: "2023-11-10",
            pagado: false,
          },
          {
            mes: "noviembre",
            vencimiento: "2023-12-10",
            pagado: false,
          },
        ],
        VencimientoExamen: new Date("2023-12-10T00:00:00.000Z"),
        VencimientoInscripcionGrado: new Date("2023-12-08T00:00:00.000Z"),
        Grado_ID: user.Grado_ID,
        Usuario_ID: id,
      });

      return res
        .status(200)
        .json({ message: "Datos de grado actualizados correctamente", nuevoPago });
    }
    return res.status(200).json({ message: "Datos de grado actualizados correctamente" });
  } catch (error) {
    return res.status(500).json({ error: "Error al actualizar los datos de usuario" });
  }
};

const deleteUsuarioController = async (req, res) => {
  try {
    const { id } = req.params;

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

    // Si las credenciales son correctas, aquí puedes generar un token JWT para la sesión
    // y devolverlo en la respuesta para autenticar al usuario en sesiones futuras

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

module.exports = {
  createUserController,
  getAllUsuariosController,
  patchUsuarioController,
  deleteUsuarioController,
  loginController,
  getExamenesAsociadosController,
};
