"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var food_service_1 = require('./food-service');
var food_track_total_1 = require('./food-track-total');
var FoodTrackService = (function () {
    function FoodTrackService(_foodService) {
        this.foodService = _foodService;
        this.foodTracks = [
            { id: 1, date: new Date(2017, 1, 1), foodId: 1, quantityValue: 100, unityOfMeasure: "gr", food: null },
            { id: 2, date: new Date(2017, 1, 1), foodId: 2, quantityValue: 200, unityOfMeasure: "gr", food: null },
            { id: 3, date: new Date(2017, 1, 1), foodId: 3, quantityValue: 300, unityOfMeasure: "gr", food: null },
            { id: 4, date: new Date(2017, 1, 1), foodId: 1, quantityValue: 400, unityOfMeasure: "gr", food: null },
            { id: 5, date: new Date(2017, 1, 1), foodId: 2, quantityValue: 500, unityOfMeasure: "gr", food: null }
        ];
    }
    FoodTrackService.prototype.getFoodTrackByDay = function (day) {
        var self = this;
        var tracks = this.foodTracks.filter(function (f) {
            if (f.date.getTime() === day.getTime())
                return f;
        });
        tracks.map(function (f) {
            f.food = self.foodService.getById(f.foodId);
        });
        return tracks;
    };
    FoodTrackService.prototype.addFoodTrack = function (foodTrack) {
        this.foodTracks.push(foodTrack);
    };
    FoodTrackService.prototype.updateFoodTrack = function (foodTrack) {
        var elem = this.foodTracks.find(function (p) { return p.id == foodTrack.id; });
        if (elem != null) {
            elem.date = foodTrack.date;
            elem.foodId = foodTrack.foodId;
            elem.quantityValue = foodTrack.quantityValue;
            elem.unityOfMeasure = foodTrack.unityOfMeasure;
        }
    };
    FoodTrackService.prototype.getFoodTrackTotals = function (from, to) {
        var self = this;
        var tracks = this.foodTracks;
        //var tracks2 = this.foodTracks.filter(function(f){
        //    if(f.date.getTime() === day.getTime()) return f;
        //}); 
        // tracks : array of foodtracks
        // we need to create an array of FoodTrackTotal
        // group by track.date, sum -> track.calories
        var rs = tracks.reduce(function (result, food) {
            var searchTotal = result.filter(function (r) { return r.date.getTime() === food.date.getTime(); });
            if (searchTotal && searchTotal.length > 0) {
                searchTotal[0].calories += food.quantityValue;
            }
            else {
                var totalPerDay = new food_track_total_1.FoodTrackTotal();
                totalPerDay.calories = food.quantityValue;
                totalPerDay.date = food.date;
                result.push(totalPerDay);
            }
            return result;
        }, new Array());
        return rs;
    };
    FoodTrackService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [food_service_1.FoodService])
    ], FoodTrackService);
    return FoodTrackService;
}());
exports.FoodTrackService = FoodTrackService;
//# sourceMappingURL=food-track-service.js.map