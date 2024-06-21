const express = require("express");
const { getTodos, addTodo, getTodo, updateTodo, deleteTodo } = require("../controller/todoController");

const router = express.Router();

router.get("/" , getTodos);

router.post("/", addTodo);

router.get("/:id", getTodo);

router.put("/:id", updateTodo);

router.delete("/:id",deleteTodo );

module.exports = router;
