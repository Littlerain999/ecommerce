const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/user.router");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Welcome to homepage"));

app.use(router);

module.exports = app;