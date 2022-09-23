const dbConn = require('../config/db-config');

// Constructor
const Cars = function (car) {
	this.make = car.make;
	this.model = car.make;
	this.year = car.year;
	this.price = car.price;
	this.transmission = car.transmission;
	this.engineType = car.engineType;
	this.type = car.type;
}

Cars.create = (car, result) => {
  dbConn.query("Insert into cars set ?", car, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

Cars.getAll = (result) => {
	dbConn.query("Select * From cars", (error, results, fields) => {
		if (error) {
			result(error);
		} else {
			result(null, results);
		}
	});
}

module.exports = Cars;