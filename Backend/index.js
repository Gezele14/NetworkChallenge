"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

//Routes path
let user_routes = require("./routes/routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", user_routes);

app.listen(port, () => {
  console.log("servidor corriendo en http://localhost:3800");
});
