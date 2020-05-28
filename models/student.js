const db = require("../db");

class Student {
  constructor(props) {
    const { first_name, last_name, email } = props;

    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }

  static create(newStudent, callback) {
    db.query("INSERT INTO students SET ?", newStudent, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      console.log("Ouais ! Apprenant créé !");
      callback(null, {
        id: result.insertId,
        ...newStudent,
      });
    });
  }

  static getAll(callback) {
    db.query("SELECT * FROM students", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      console.log("Les apprenants: ", result);
      callback(null, result);
    });
  }
}

module.exports = Student;
