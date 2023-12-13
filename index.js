const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ code: 200, msg: "OK" });
});

app.listen(3000, () => {
  console.log("Running on htthttp://127.0.0.1:3000");
});
