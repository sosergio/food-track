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
var food_track_1 = require('../services/food-track');
var FtTrackInputComponent = (function () {
    function FtTrackInputComponent(_foodTrackService, _foodService) {
        var _this = this;
        this.filterFood = function (name) {
            var result = name ? this.foodService.findByName(name) : null;
            if (result == null || result.length == 0)
                this.foodSearchSelect.reset();
            return result;
        };
        this.submitNewFoodTrack = function () {
            var foodId;
            foodId = this.foodSearchSelect.value;
            this.foodTrackService.addFoodTrack(this.editing);
            this.updateList();
        };
        this.foodService = _foodService;
        this.foodTrackService = _foodTrackService;
        this.foodSearchCtrl = new forms_1.FormControl();
        this.foodSearchSelect = new forms_1.FormControl();
        this.foodTrackQuantity = new forms_1.FormControl();
        this.foodSearchCtrl.valueChanges
            .subscribe(function (data) {
            _this.filteredFood = _this.filterFood(data);
        });
    }
    FtTrackInputComponent.prototype.ngOnInit = function () {
        this.track = new food_track_1.FoodTrack(this.selectedDate);
    };
    __decorate([
        core_2.Input('date'), 
        __metadata('design:type', Date)
    ], FtTrackInputComponent.prototype, "selectedDate", void 0);
    FtTrackInputComponent = __decorate([
        core_1.Component({
            selector: 'ft-track-input',
            template: "\n  <md-menu #appMenu=\"mdMenu\">\n  <button md-menu-item> Settings </button>\n  <button md-menu-item> Help </button>\n</md-menu>\n\n<button md-icon-button [mdMenuTriggerFor]=\"appMenu\">\n   <md-icon>more_vert</md-icon>\n</button>\n\n  <form (ngSubmit)='submitNewFoodTrack()'>  \n      <md-input-container>\n        <input mdInput placeholder=\"Food search\" type='text' [formControl]=\"foodSearchCtrl\" name=\"foodSearchCtrl\" />\n      </md-input-container>\n      <md-select placeholder=\"choose food\" [hidden]=\"!filteredFood || filteredFood.length == 0\" [formControl]=\"foodSearchSelect\">\n        <md-option *ngFor=\"let food of filteredFood\" [value]=\"food.id\">{{ food.name }}</md-option>\n      </md-select>\n      <md-input-container>\n        <input mdInput placeholder=\"Quantity\" type='text' [(ngModel)]=\"track.quantity\" name=\"foodTrackQuantity\" />\n      </md-input-container>\n      <md-select placeholder=\"Type\" [(ngModel)]=\"track.unityOfMeasure\" name=\"foodTrackUnityOfMeasure\">\n        <md-option value=\"gr\" selected=\"selected\">gr.</md-option>\n        <md-option value=\"unit\">units</md-option>\n      </md-select>\n      <button type='submit' md-raised-button>Add Track</button>\n   </form>{{filteredFood ? filteredFood.length : 'NO'}}",
        }), 
        __metadata('design:paramtypes', [food_track_service_1.FoodTrackService, food_service_1.FoodService])
    ], FtTrackInputComponent);
    return FtTrackInputComponent;
}());
exports.FtTrackInputComponent = FtTrackInputComponent;
//# sourceMappingURL=ft-track-input-component.js.map