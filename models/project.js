const DBdriver = require("../data/DBConnexion");

module.exports = class Project {
  constructor(projectTitle, projectDescription, projectLink, projectImageUri) {
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.projectLink = projectLink;
    this.projectImageUri = projectImageUri;
  }

  static async getAllProject(cb) {
    const query = "SELECT * FROM project";
    let DBresult = "";
    await DBdriver.query(query, (error, result) => {
      if (error) {
        DBresult = { error: "The specified project doesn't exist yet" };
        cb(DBresult);
        throw error;
      }
      DBresult = result;
      cb(DBresult);
    });
  }

  async save(cb) {
    const query =
      "INSERT INTO project (project_title, project_description, project_link, project_image_link) VALUES (?, ?, ?, ?)";
    let DBresult = "";
    await DBdriver.query(
      query,
      [
        this.projectTitle,
        this.projectDescription,
        this.projectLink,
        this.projectImageUri,
      ],
      (error, result) => {
        if (error) {
          DBresult = { error: "The specified project doesn't exist yet" };
          cb(DBresult);
          throw error;
        }
        DBresult = {
          message: "The project has been successfully added to the list !",
        };
        cb(DBresult);
      }
    );
  }

  static async remove(projectID, cb) {
    const query = `DELETE FROM project WHERE id = ${projectID}`;
    let DBresult = "";
    await DBdriver.query(query, (err, result) => {
      if (err) {
        DBresult = { error: "The specified project doesn't exist yet" };
        cb(DBresult);
        throw err;
      }
      DBresult = {
        message: "The project specified has been removed with success !",
      };
      cb(DBresult);
    });
  }
};
