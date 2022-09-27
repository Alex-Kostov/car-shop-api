const express = require('express');
const router = express.Router();
const { create, getAll, getCarById } = require("../controllers/cars.controller");

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getCarById);

module.exports = router;