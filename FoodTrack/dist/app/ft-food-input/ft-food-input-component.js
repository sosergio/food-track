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
var food_service_1 = require('../services/food-service');
var food_1 = require('../services/food');
var FtFoodInputComponent = (function () {
    function FtFoodInputComponent(_foodService) {
        this.submitNewFood = function () {
            this.foodService.addFood(this.food);
            this.food = new food_1.Food();
        };
        this.foodService = _foodService;
        this.food = new food_1.Food();
    }
    FtFoodInputComponent = __decorate([
        core_1.Component({
            selector: 'ft-food-input',
            template: "<form (ngSubmit)='submitNewFood()'>\n      <input mdInput placeholder=\"Name\" [(ngModel)]=\"food.name\" name=\"newFoodName\">\n      <input mdInput placeholder=\"kCal per 100gr\" [(ngModel)]=\"food.caloriesPer100gr\" name=\"newFoodCaloriesPer100Gr\">\n      <input mdInput placeholder=\"kCal per unit\" [(ngModel)]=\"food.caloriesPerUnit\" name=\"newFoodCaloriesPerUnit\">\n      <button type='submit'>Add</button>\n   </form>\n  ",
        }), 
        __metadata('design:paramtypes', [food_service_1.FoodService])
    ], FtFoodInputComponent);
    return FtFoodInputComponent;
}());
exports.FtFoodInputComponent = FtFoodInputComponent;
//# sourceMappingURL=ft-food-input-component.js.map