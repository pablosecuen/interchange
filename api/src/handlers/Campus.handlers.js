// En tu directorio de handlers (por ejemplo, src/handlers/campusHandlers.js)

const {
  getAllCampus,
  createCampus,
  updateCampus,
  getAllCampusByGradoID,
} = require("../controllers/Campus.controller");

const getAllCampusHandler = async (req, res) => {
  return await getAllCampus(req, res);
};

const getAllCampusByGradoIDHandler = async (req, res, next) => {
  return await getAllCampusByGradoID(req, res);
};

const createCampusHandler = async (req, res) => {
  return await createCampus(req, res);
};

const updateCampusHandler = async (req, res) => {
  return await updateCampus(req, res);
};

module.exports = {
  getAllCampusHandler,
  createCampusHandler,
  updateCampusHandler,
  getAllCampusByGradoIDHandler,
};
