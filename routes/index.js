const express = require("express");

const studentsRouter = require("./students");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home.ejs");
});

router.use("/students", studentsRouter);

router.get("*", (request, response) => {
  response.status(404).render("404.ejs");
});

module.exports = router;
