const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectToDb = require("./db");

const tasksRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT;

connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
