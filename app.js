const express = require("express");

const adminRouter = require("./routes/admin");
const projectRouter = require("./routes/project");
const errorRouter = require("./routes/error");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/admin", adminRouter);
app.use(projectRouter);
app.use(errorRouter);

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT} port !`);
});
