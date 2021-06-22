const ProjectHelper = require("../models/project");

exports.getAllProjects = (req, res) => {
  ProjectHelper.getAllProject((result) => {
    res.json(result);
  });
};

exports.addProject = (req, res) => {
  console.log(req.body);
  const newProject = new ProjectHelper(
    req.body.projectTitle,
    req.body.projectDescription,
    req.body.projectLink,
    req.body.projectImageURI
  );

  newProject.save((result) => {
    res.json(result);
  });
};

exports.removeProject = (req, res) => {
  ProjectHelper.remove(req.params.projectID, (result) => {
    res.json(result);
  });
};
