const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "sandro",
  password: "password",
  database: "live_node_express_mvc",
  port: 3306,
});

db.connect((error) => {
  if (error) throw error;
  console.log("Wesh ! Je suis co à la base de données gros !");
});

module.exports = db;
