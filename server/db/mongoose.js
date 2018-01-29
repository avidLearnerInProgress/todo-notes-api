var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://chirag:chirag@ds117888.mlab.com:17888/node-api-db');

module.exports = {mongoose};

