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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
        this._http = http;
        this.food = [
            { id: 1, name: "banana", caloriesPer100gr: 0, caloriesPerUnit: 100 },
            { id: 2, name: "seasoning", caloriesPer100gr: 290, caloriesPerUnit: 0 },
            { id: 3, name: "blueberry", caloriesPer100gr: 90, caloriesPerUnit: 100 },
            { id: 4, name: "almond", caloriesPer100gr: 450, caloriesPerUnit: 100 }
        ];
    }
    FoodService.prototype.getAsync = function () {
        //let bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this._http.get("http://localhost:5000/api/Food")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    FoodService.prototype.getAllFood = function () {
        return this.food;
    };
    FoodService.prototype.getById = function (id) {
        var array = this.food.filter(function (x) { return x.id === id; });
        if (array.length == 1)
            return array[0];
        return null;
    };
    FoodService.prototype.findByName = function (name) {
        return this.food.filter(function (s) { return new RegExp(name, 'gi').test(s.name); });
    };
    FoodService.prototype.addFood = function (food) {
        var id = this.food.length;
        food.id = id;
        this.food.push(food);
        return id;
    };
    FoodService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FoodService);
    return FoodService;
}());
exports.FoodService = FoodService;
//# sourceMappingURL=food-service.js.map