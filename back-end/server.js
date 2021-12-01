const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/excercises");

const proxy = require("http-proxy-middleware");

const app = express();
// app.use(proxy.createProxyMiddleware("http://localhost:5000/exercises"));

app.use(cors());
app.use(express.json());

port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Db connected successfully.");
});

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

app.listen(port, () => {
  console.log(`Listening to port: ${port}`);
});
