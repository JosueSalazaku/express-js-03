const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ code: 200, msg: "OK" });
});

app.get("/profile", (req, res) => {
  res.status(403).send();
});

app.listen(3000, () => {
  console.log("Running on http://127.0.0.1:3000");
});
