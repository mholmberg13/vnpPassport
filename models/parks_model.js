const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parkSchema = Schema({
    name: String,
    state: String,
    dov: String,
    img: String
});

const Parks = mongoose.model('Park', parkSchema);

module.exports = Parks;