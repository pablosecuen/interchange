// En tu directorio de controladores (por ejemplo, src/controllers/campusController.js)

const { Campus } = require("../../db");

const getAllCampus = async (req, res) => {
  try {
    const campus = await Campus.findAll();
    return res.json(campus);
  } catch (error) {
    console.error("Error al obtener los campus:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getAllCampusByGradoID = async (req, res) => {
  try {
    // Obtén el Grado_ID de la solicitud GET
    const { Grado_ID } = req.params;

    // Busca todos los Campus con el Grado_ID especificado
    const campuses = await Campus.findAll({
      where: {
        Grado_ID: Grado_ID,
      },
    });

    // Devuelve la respuesta al cliente
    return res.json(campuses);
  } catch (error) {
    console.error("Error al obtener los campus por Grado_ID:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const createCampus = async (req, res) => {
  try {
    const { Title, Description, Link, Tipo, Grado_ID, Grado_Nombre, Grado_Categoria } = req.body;
    console.log(req.body);
    const newCampus = await Campus.create({
      Title,
      Description,
      Link,
      Tipo,
      Grado_ID,
      Grado_Nombre,
      Grado_Categoria,
    });

    return res.status(201).json(newCampus);
  } catch (error) {
    console.error("Error al crear el campus:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateCampus = async (req, res) => {
  try {
    const { ID } = req.params;
    const { Title, description, Link, Tipo, Grado_ID } = req.body;

    const updatedCampus = await Campus.update(
      {
        Title,
        description,
        Link,
        Tipo,
        Grado_ID,
      },
      {
        where: { ID },
        returning: true,
      }
    );

    return res.status(200).json(updatedCampus[1][0]);
  } catch (error) {
    console.error("Error al actualizar el campus:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllCampus,
  createCampus,
  updateCampus,
  getAllCampusByGradoID,
};
