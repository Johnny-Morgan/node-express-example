const express = require("express");

const app = express();

app.get("/current-time", function (req, res) {
  res.send("<h1>" + new Date().toDateString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name </label><input type="text"><button>Submit</button></form>'
  );
});

app.listen(3000);
