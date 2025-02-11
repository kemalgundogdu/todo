const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  deleteTask,
  completedTask,
} = require("../controllers/taskController");

router.get("/", getAllTasks);
router.post("/add", createTask);
router.delete("/delete/:id", deleteTask);
router.put("/completed/:id", completedTask);

module.exports = router;
