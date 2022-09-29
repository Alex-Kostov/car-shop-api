const express = require('express');
const router = express.Router();
const { create, getAll, getCarById, deleteById, update } = require("../controllers/cars.controller");

router.post("/", create);

router.get("/", getAll);

router.get("/:id", getCarById);

router.delete("/:id", deleteById);

router.put("/:id", update);

module.exports = router;