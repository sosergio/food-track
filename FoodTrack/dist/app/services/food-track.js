"use strict";
var food_1 = require('./food');
var FoodTrack = (function () {
    function FoodTrack(_date) {
        this.unityOfMeasure = "gr";
        this.food = new food_1.Food();
        this.date = _date;
    }
    return FoodTrack;
}());
exports.FoodTrack = FoodTrack;
//# sourceMappingURL=food-track.js.map