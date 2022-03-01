const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
 
const app = express();
 
require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// API routes, must before "catch all" route
app.use('/api/users', require('./routes/api/users'));


// "Catch all" route
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});