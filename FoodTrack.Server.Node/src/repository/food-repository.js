var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FoodSchema   = new Schema({
    name: String,
    identifier:Number,
    caloriesPer100gr:Number,
    caloriesPerUnit:Number,
});

module.exports = mongoose.model('Food', FoodSchema);