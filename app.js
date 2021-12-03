const express = require("express");

const app = express();

app.get("/current-time", function (req, res) {
  res.send("<h1>" + new Date().toDateString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name </label><input type="text" name="username"><button>Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const username = req.body.username;
  console.log(username);
  res.send("<h1>Username stored!</h1>");
});

app.listen(3000);
