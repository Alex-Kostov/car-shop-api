const express = require('express');
const router = express.Router();
const { create, getAll, getCarById, deleteById } = require("../controllers/cars.controller");

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getCarById);

router.delete("/:id", deleteById);

module.exports = router;