const express = require("express");
const connectDB = require("./config/db_config");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

// DB coonection

connectDB();

// Body Parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    msg: "WELCOME!!!",
  });
});

// todo routes

app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`running at : ${PORT}`);
});
