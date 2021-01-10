"use strict";

var model = require("../models/model");

exports.sayhello = (req, res) => {
  let name = req.params.name;

  res.send(`Hello i am ${name}`);
};
