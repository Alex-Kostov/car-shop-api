const db = require('../config/db-config');

// Constructor
const Cars = function (car) {
	this.make = car.make;
	this.model = car.model;
	this.year = car.year;
	this.price = car.price;
	this.transmission = car.transmission;
	this.engine_type = car.engine_type;
	this.type = car.type;
}

Cars.create = (car, result) => {
	db.query('Insert into cars set ?', car, (err, res) => {
		if (err) {
			result(err);
		} else {
			result(null, res);
		}
	});
};

Cars.getAll = (result) => {
	db.query('Select * From cars', (error, res, fields) => {
		if (error) {
			result(error);
		} else {
			result(null, res);
		}
	});
};

Cars.getCarById = (id, result) => {
	db.query('SELECT * FROM cars WHERE id=?', id, (error, res, fields) => {
		if (error) {
			result(error);
		} else {
			result(null, res);
		}
	});
};

Cars.deleteById = (id, result) => {
	db.query('DELETE FROM cars WHERE id=?', id, (error, res, fields) => {
		if (error) {
			result(error);
		} else {
			result(null, res);
		}
	});
};

Cars.update = (id, car, result) => {
	const { make, model, year, price, transmission, engine_type, type } = car;
	db.query(
		'UPDATE cars SET make=?, model=?, year=?, price=?, transmission=?, engine_type=?, type=? WHERE id=?',
		[ make, model, year, price, transmission, engine_type, type, id],
		(err, res) => {
			if (err) {
				result(err);
			} else {
				result(null, res);
			}
		}
	)
};

module.exports = Cars;