"use strict";

//Imports
var express = require("express");
var controller = require("../controllers/controller");

var api = express.Router();

// Creamos una ruta para los métodos que tenemos en nuestros controladores
api.get("/hello/:name", controller.sayhello);

// Exportamos la configuración
module.exports = api;
