import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

export const getTasks = async () => {
  const data = await axios
    .get("http://localhost:3000/tasks", options)
    .then((res) => res.data)
    .catch((err) => console.error("Error fetching genres:", err));

  return data;
};

export const addTask = async (title) => {
  await axios
    .post("http://localhost:3000/tasks/add", title, options)
    .catch((err) => console.error("Error adding task:", err));

  return getTasks();
};

export const deleteTask = async (id) => {
  await axios
    .delete("http://localhost:3000/tasks/delete/" + id, options)
    .catch((err) => console.error("Error deleting task:", err));

  return getTasks();
};

export const completeTask = async (id) => {
  await axios
    .put("http://localhost:3000/tasks/completed/" + id, options)
    .catch((err) => console.error("Error completing task:", err));
}