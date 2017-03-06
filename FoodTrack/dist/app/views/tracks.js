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
var TracksView = (function () {
    function TracksView() {
        this.toggleNewFoodFormIsHidden = function () {
            this.newFoodFormIsHidden = !this.newFoodFormIsHidden;
        };
        this.trackInputDate = new Date(2017, 1, 1);
        this.newFoodFormIsHidden = true;
    }
    TracksView = __decorate([
        core_1.Component({
            template: "\n    <div class=\"area\">\n        <ft-track-input [date]=\"trackInputDate\"></ft-track-input>\n        <button (click)=\"toggleNewFoodFormIsHidden()\">Add new</button>\n        <ft-food-input [hidden]=\"newFoodFormIsHidden\"></ft-food-input>\n    </div>\n    <div class=\"two-cols-container\">\n        <ft-track-list class=\"two-cols-left area\" [date]=\"trackInputDate\"></ft-track-list>\n        <ft-track-total-list class=\"two-cols-right area\"></ft-track-total-list>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TracksView);
    return TracksView;
}());
exports.TracksView = TracksView;
//# sourceMappingURL=tracks.js.map