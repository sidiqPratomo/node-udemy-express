const express = require("express");

const app = express();

app.use("/product", (req, res, next) => {
  console.log("prodct request");
  res.send("<h1>Assignment for product express</h1>");
});

app.use("/", (req, res, next) => {
  console.log("first request");
  res.send("<h2>first middleware</h2>");
});

app.listen(3000);
