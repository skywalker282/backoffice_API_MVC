const express = require("express");
const mysql = require("mysql");
const PORT = process.env.PORT || 3000;
const app = express();

const db = mysql.createConnection({
  host: "remotemysql.com",
  user: "yuIDJpOrnP",
  password: "5caUWIGqBd",
  database: "yuIDJpOrnP",
  port: 3306,
});
db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Database connected ...");
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "database yet connected" });
});

app.get("/lists/projects", (req, res) => {
  const query = "SELECT * FROM project";
  db.query(query, (error, result) => {
    if (error) throw error;
    console.log(result);
    res.json(result);
  });
});

app.post("/post/project", (req, res) => {
  const query =
    "INSERT INTO project (project_title, project_description, project_link, project_image_link) VALUES (?, ?, ?, ?)";
  const {
    project_title,
    project_description,
    project_link,
    project_image_link,
  } = req.body;
  db.query(
    query,
    [project_title, project_description, project_link, project_image_link],
    (error, result) => {
      if (error) throw error;
      console.log(result);
      res.json({ message: "new project added with success" });
    }
  );
});
app.delete("/delete/projects/:title", (req, res) => {
  const query = `DELETE FROM project WHERE id = ${req.params.title}`;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({
      message: `project ${req.params.title} deletion has been done successfully`,
    });
  });
});

app.listen(PORT, () => {
  console.log("server listens on port", PORT);
});
