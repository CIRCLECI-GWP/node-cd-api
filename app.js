const express = require("express");
const routes = require("./routes");

// App
const app = express();

app.get("/", (req, res) => {
  res.send("App is up and running!");
});

app.use("/", routes);

module.exports = app;
