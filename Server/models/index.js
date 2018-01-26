const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/node-api');
mongoose.Promise = Promise;

module.exports.User = require('./user');
