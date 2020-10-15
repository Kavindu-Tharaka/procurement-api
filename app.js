const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const resourcePrefix = '/api/v1';

// Importing routes from the routes folder
const orderRoute = require('./routes/orderRoute');
const supplierRoute = require('./routes/supplierRoute');
const storeKeeperRoute = require('./routes/storeKeeperRoutes');


// Creating a Express application
const app = express();

// CORS support
app.use(cors());

// Setting body parser to get access of request.body
app.use(bodyParser.json());

// Logging all the requests to the console in development environment
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Setting the routes to the app as middlewares
app.use(`${resourcePrefix}/order`, orderRoute);
app.use(`${resourcePrefix}/supplier`, supplierRoute);
app.use(`${resourcePrefix}/store`, storeKeeperRoute);

// Setting static webpage
app.use(express.static('./client'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

module.exports = app;
