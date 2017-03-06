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
var core_2 = require('@angular/core');
var forms_1 = require('@angular/forms');
var food_track_service_1 = require('../services/food-track-service');
var food_service_1 = require('../services/food-service');
var food_1 = require('../services/food');
var FtTrackInputComponent = (function () {
    function FtTrackInputComponent(_foodTrackService, _foodService) {
        var _this = this;
        this.filterFood = function (name) {
            var result = name ? this.foodService.findByName(name) : null;
            if (result == null || result.length == 0)
                this.selectCtrl.reset();
            return result;
        };
        this.updateList = function () {
            this.tracks = this.foodTrackService.getFoodTrackByDay(this.selectedDate);
        };
        this.toggleNewFoodFormIsHidden = function () {
            this.newFoodFormIsHidden = !this.newFoodFormIsHidden;
        };
        this.submitNewFoodTrack = function () {
            var foodId;
            if (this.selectCtrl.value) {
                foodId = this.selectCtrl.value;
            }
            else {
                var food = new food_1.Food();
                food.name = this.newFoodNameCtrl.value;
                food.caloriesPer100gr = this.newFoodCaloriesCtrl.value;
                foodId = this.foodService.addFood(food);
            }
            this.editing.foodId = foodId;
            this.foodTrackService.addFoodTrack(this.editing);
            this.updateList();
        };
        this.newFoodFormIsHidden = true;
        this.foodTrackService = _foodTrackService;
        this.foodService = _foodService;
        this.foodSearchCtrl = new forms_1.FormControl();
        this.foodSearchCtrl.valueChanges
            .subscribe(function (data) {
            _this.filteredFood = _this.filterFood(data);
        });
    }
    FtTrackInputComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    __decorate([
        core_2.Input('date'), 
        __metadata('design:type', Date)
    ], FtTrackInputComponent.prototype, "selectedDate", void 0);
    FtTrackInputComponent = __decorate([
        core_1.Component({
            selector: 'ft-track-input',
            template: "<h2>{{selectedDate | date}}</h2>\n  <table>\n  <tr *ngFor=\"let track of tracks\">\n    <td>{{track.id}}</td>\n    <td>{{track.food.name}}</td>\n    <td>{{track.date | date}}<td>\n    <td>{{track.quantityValue}}{{track.unityOfMeasure}}<td>\n  </table>\n\n   <form (ngSubmit)='submitNewFoodTrack()'>  \n      <input type='text' [formControl]=\"foodSearchCtrl\" name=\"foodSearchCtrl\"/>\n      <select [hidden]=\"!filteredFood || filteredFood.length == 0\" [formControl]=\"foodTrackSelect\">\n        <option *ngFor=\"let food of filteredFood\" value='{{food.id}}'>{{ food.name }}</option>\n      </select>\n      <input type='text' [formControl]=\"foodTrackQuantity\" name=\"foodTrackQuantity\"/>\n      <input type='submit' />\n   </form>\n   <button (click)=\"toggleNewFoodFormIsHidden\">Add new</button>\n   <form [hidden]=\"newFoodFormIsHidden\" (ngSubmit)='submitNewFood()'>\n      <input type='text' [formControl]=\"newFoodNameCtrl\" name=\"newFoodName\"/>\n      <input type='text' [formControl]=\"newFoodCaloriesCtrl\" name=\"newFoodCalories\"/>\n      <select [formControl]=\"newFoodType\" >\n        <option value=\"gr\">per 100 gr</option>\n        <option vakye=\"units\">per unit</option>\n      </select>\n      <input type='submit' />\n   </form>\n  ",
        }), 
        __metadata('design:paramtypes', [food_track_service_1.FoodTrackService, food_service_1.FoodService])
    ], FtTrackInputComponent);
    return FtTrackInputComponent;
}());
exports.FtTrackInputComponent = FtTrackInputComponent;
//# sourceMappingURL=ft-track-input-component.js.map