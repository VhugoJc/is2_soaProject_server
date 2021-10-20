const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelPackageSchema = Schema({
    shortcut:String,
    name: String,
    date: Date,
    price: Number,
    totalPlaces:Number,
})

module.exports = mongoose.model("travelPackage",travelPackageSchema);