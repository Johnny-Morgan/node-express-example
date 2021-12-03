const fs = require("fs");
const path = require("path");

const express = require("express");
const { response } = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/current-time", function (req, res) {
  res.send("<h1>" + new Date().toDateString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name </label><input type="text" name="username"><button>Submit</button></form>'
  );
});

function getExistingUsers() {
  const filePath = path.join(__dirname, "data", "users.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  return existingUsers;
}

app.post("/store-user", function (req, res) {
  const userName = req.body.username;

  const existingUsers = getExistingUsers();

  existingUsers.push(userName);

  fs.writeFileSync(filePath, JSON.stringify(existingUsers));

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  const existingUsers = getExistingUsers();

  let responseData = "<ul>";
  for (const user of existingUsers) {
    responseData += `<li>${user}</li>`;
  }
  responseData += "</ul>";
  res.send(responseData);
});

app.listen(3000);
