const express = require("express");

const studentsController = require("../controllers/students");

const studentsRouter = express.Router();

studentsRouter.get("/", studentsController.findAll);
studentsRouter.post("/", studentsController.add);

module.exports = studentsRouter;
