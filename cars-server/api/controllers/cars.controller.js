const { response } = require('express');
const Cars = require('../models/cars.model');

/**
 * Creates new Car.
 */
exports.create = (req, res) => {
	console.log('body', req.body);
	const newCar = new Cars({
		make: req.body.make,
		model: req.body.model,
		year: req.body.year,
		price: req.body.price,
		transmission: req.body.transmission,
		engine_type: req.body.engine_type,
		type: req.body.type
	});

	Cars.create(newCar, (err, response) => {
		if (err) {
			res.send(err);
		}

		res.json({
			error: false,
			message: 'Car added Successfully.',
			data: response
		})
	});
};

/**
 * Returns All the published cars.
 */
exports.getAll = (req, res) => {
	Cars.getAll((err, response) => {
		if (err) {
			res.send(err);
		}

		res.json({
			error: false,
			data: response
		});
	});
};


/**
 * Returns Car by passed id.
 */
exports.getCarById = (req, res) => {
	const { id } = req.params;
	Cars.getCarById(id, (err, response) => {
		if (err) {
			res.send(err);
		}

		res.json({
			error: false,
			date: response
		})
	});
};

/**
 * Delete car by passed id.
 */
exports.deleteById = (req, res) => {
	const { id } = req.params;
	Cars.deleteById(id, (err, response) => {
		if (err) {
			res.send(err);
		}

		res.json({
			error: false,
			message: 'Car Deleted Successfully',
			data: response
		});
	});
};

/**
 * Update car by id.
 */
exports.update = (req, res) => {
	const { id } = req.params;
	const updatedCarData = new Cars({
		make: req.body.make,
		model: req.body.model,
		year: req.body.year,
		price: req.body.price,
		transmission: req.body.transmission,
		engine_type: req.body.engine_type,
		type: req.body.type
	});
	Cars.update(id, updatedCarData, (err, response) => {
		if (err) {
			res.send(err);
		}
		res.json({
			error: false,
			message: 'Car updated successfully.',
			data: response
		});
	});
};