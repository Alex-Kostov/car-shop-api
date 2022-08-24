const app = require('./app');
const port = process.env.PORT || 3000;

// Create connection
const db = mysql.createConnection();

app.listen(port, () => {
	console.log('Server is up on port ' + port);
});