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
    const DBresult = "";
    await DBdriver.query(query, (error, result) => {
      if (error) {
        DBresult = false;
        throw error;
      }
      console.log(result);
      DBresult = result;
    });
    cb(DBresult);
  }

  async save(cb) {
    const query =
      "INSERT INTO project (project_title, project_description, project_link, project_image_link) VALUES (?, ?, ?, ?)";
    const DBresult = "";
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
          DBresult = false;
          throw error;
        }
        console.log(result);
        DBresult = true;
      }
    );
    cb(DBresult);
  }

  static async remove(projectID, cb) {
    const query = `DELETE FROM project WHERE id = ${projectID}`;
    const DBresult = "";
    await DBdriver.query(query, (err, result) => {
      if (err) {
        DBresult = false;
        throw err;
      }
      DBresult = true;
      console.log(result);
    });
    cb(DBresult);
  }
};
