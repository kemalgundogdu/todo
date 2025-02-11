const express = require("express");
const cors = require("cors");
// db connected
const connectDB = require("./config/db");
connectDB();
const app = express();
app.use(express.json());
// routes
const taskRoutes = require("./routes/tasks");

app.use(cors());

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({message: "CatDo API is running 🚀"});
});

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
