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
var FtTrackInputComponent = (function () {
    function FtTrackInputComponent(_foodTrackService) {
        var _this = this;
        this.filterFood = function (name) {
            var result = name ? this.foodService.findByName(name) : null;
            if (result == null || result.length == 0)
                this.selectCtrl.reset();
            return result;
        };
        this.submitNewFoodTrack = function () {
            var foodId;
            foodId = this.selectCtrl.value;
            this.foodTrackService.addFoodTrack(this.editing);
            this.updateList();
        };
        this.foodTrackService = _foodTrackService;
        this.foodSearchCtrl = new forms_1.FormControl();
        this.foodTrackSelect = new forms_1.FormControl();
        this.foodTrackQuantity = new forms_1.FormControl();
        this.foodSearchCtrl.valueChanges
            .subscribe(function (data) {
            _this.filteredFood = _this.filterFood(data);
        });
    }
    __decorate([
        core_2.Input('date'), 
        __metadata('design:type', Date)
    ], FtTrackInputComponent.prototype, "selectedDate", void 0);
    FtTrackInputComponent = __decorate([
        core_1.Component({
            selector: 'ft-track-input',
            template: "<form (ngSubmit)='submitNewFoodTrack()'>  \n      <input type='text' [formControl]=\"foodSearchCtrl\" name=\"foodSearchCtrl\"/>\n      <select [hidden]=\"!filteredFood || filteredFood.length == 0\" [formControl]=\"foodTrackSelect\">\n        <option *ngFor=\"let food of filteredFood\" value='{{food.id}}'>{{ food.name }}</option>\n      </select>\n      <input type='text' [formControl]=\"foodTrackQuantity\" name=\"foodTrackQuantity\"/>\n      <input type='submit' />\n   </form>",
        }), 
        __metadata('design:paramtypes', [food_track_service_1.FoodTrackService])
    ], FtTrackInputComponent);
    return FtTrackInputComponent;
}());
exports.FtTrackInputComponent = FtTrackInputComponent;
//# sourceMappingURL=ft-track-input-component.js.map