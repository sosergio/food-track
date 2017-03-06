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
var food_service_1 = require('./services/food-service');
var food_track_service_1 = require('./services/food-track-service');
var AppComponent = (function () {
    function AppComponent() {
        this.toggleNewFoodFormIsHidden = function () {
            this.newFoodFormIsHidden = !this.newFoodFormIsHidden;
        };
        this.trackInputDate = new Date(2017, 1, 1);
        this.newFoodFormIsHidden = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ft-app',
            template: "\n  <ft-header></ft-header>\n  <main>\n   <ft-track-list [date]=\"trackInputDate\"></ft-track-list>\n   <ft-track-input [date]=\"trackInputDate\"></ft-track-input>\n   <button (click)=\"toggleNewFoodFormIsHidden()\">Add new</button>\n   <ft-food-input [hidden]=\"newFoodFormIsHidden\"></ft-food-input>\n   <ft-track-total-list></ft-track-total-list>\n  </main>\n  ",
            styleUrls: ["/dist/css/app.style.css"],
            providers: [
                food_service_1.FoodService,
                food_track_service_1.FoodTrackService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map