const express = require("express");

const app = express();

app.get("/current-time", function (req, res) {
  res.send("<h1>" + new Date().toDateString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(3000);
