const mongoose = require('mongoose');
const config = require('../config/db');

const CarsCapab = mongoose.Schema({
    cap: {
        type: String
    }
});

const Capab = module.exports = mongoose.model('Capab', CarsCapab);

module.exports.addCapab = function(newCapab, callback) {
    
    newCapab.save(callback);
}