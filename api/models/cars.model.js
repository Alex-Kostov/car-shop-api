const dbConn = require('../config/db-config');

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
  dbConn.query(`Insert into ${globalDbName}.${globalTableName} set ?`, car, (err, res) => {
    if (err) {
      result(err);
    } else {
      result(null, res);
    }
  });
};

Cars.getAll = (result) => {
	dbConn.query(`Select * From ${globalDbName}.${globalTableName}`, (error, results, fields) => {
		if (error) {
			result(error);
		} else {
			result(null, results);
		}
	});
}

module.exports = Cars;