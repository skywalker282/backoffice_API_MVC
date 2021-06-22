const express = require("express");
const cors = require("cors");

const adminRouter = require("./routes/admin");
const projectRouter = require("./routes/project");
const errorRouter = require("./controllers/error");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/admin", adminRouter);
app.use(projectRouter);
app.use(errorRouter);

app.listen(PORT, () => {
  console.log(`Server listen on ${PORT} port !`);
});
