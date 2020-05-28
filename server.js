const express = require("express");
const ejs = require("ejs");
const logger = require("morgan");
const bodyParser = require("body-parser");

const router = require("./routes");

const server = express();

server.engine("ejs", ejs.renderFile);
server.use("/assets", express.static("assets"));

server.use(bodyParser.urlencoded({ extended: true }))

server.use(logger("dev"));
server.use(router);

server.listen(8080, () => {
  console.log("Server running at port 8080");
});
