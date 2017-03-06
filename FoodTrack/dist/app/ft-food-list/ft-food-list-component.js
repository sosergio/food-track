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
var FtFoodListComponent = (function () {
    function FtFoodListComponent(_foodService) {
        this.updateList = function () {
            this.food = this.foodService.getAllFood();
        };
        this.foodService = _foodService;
        this.updateList();
    }
    FtFoodListComponent = __decorate([
        core_1.Component({
            selector: 'ft-food-list',
            template: "<h2>All</h2> \n   <table>\n   <tr *ngFor=\"let f of food\">\n    <td>{{f.id}}</td>\n    <td>{{f.name}}</td>\n    <td>{{f.caloriesPer100gr}}<td>\n    <td>{{f.caloriesPerUnit}}<td>\n  </table>\n  ",
        }), 
        __metadata('design:paramtypes', [food_service_1.FoodService])
    ], FtFoodListComponent);
    return FtFoodListComponent;
}());
exports.FtFoodListComponent = FtFoodListComponent;
//# sourceMappingURL=ft-food-list-component.js.map