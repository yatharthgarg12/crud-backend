const Todo = require("../models/todomodel");

const getTodos = async (req, res) => {
  const todos = await Todo.find();

  if (!todos) {
    res.status(404);
    res.json({
      msg: "No Todos Found",
    });
  }
  res.status(200);
  res.json(todos);
};

const addTodo = async (req, res) => {
  const { title, description, isCompleted } = req.body;

  if (!title || !description) {
    res.status(400);
    res.json({
      error: "Please fill all details",
    });
  }
  const todo = await Todo.create({
    title,
    description,
    isCompleted,
  });

  if (!todo) {
    res.status(400);
    res.json({
      error: "Todo not created!!",
    });
  }

  res.status(201).json(todo);
};

const getTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    res.json({
      error: "Todo Not found",
    });
  }

  res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!updatedTodo) {
    res.status(400).json({
      error: "Todo not Updated",
    });
  }

  res.status(200).json(updatedTodo);
};

const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);

  res.status(200).json({
    msg: "Todo Deleted!!",
  });

};

module.exports = { getTodos, addTodo, updateTodo, deleteTodo, getTodo };
