const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.render("home.ejs");
});

router.get("*", (request, response) => {
  response.status(404).render("404.ejs");
});

module.exports = router;
