const express = require('express');
const app = express();
// Get the data from .env file (not in the repo).
require('dotenv').config();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World');
});

const carsRoutes = require('./api/routes/cars.router');

app.use('/api/cars', carsRoutes);

// Listen for Request
app.listen(port, () => {
	console.log('Server is up on port ' + port);
});
