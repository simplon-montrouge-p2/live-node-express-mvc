const Student = require("../models/student");

exports.add = (request, response) => {
  const newStudent = new Student(request.body);

  Student.create(newStudent, (error, data) => {
    if (error) {
      response.status(500).send(error.message);
    }

    response.redirect("/students");
  });
};

exports.findAll = (request, response) => {
  Student.getAll((error, students) => {
    if (error) {
      response.status(500).send(error.message);
    }

    response.render("students.ejs", { students });
  });
};
