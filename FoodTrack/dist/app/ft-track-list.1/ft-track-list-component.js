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
var food_track_service_1 = require('../services/food-track-service');
var FtTrackListComponent = (function () {
    function FtTrackListComponent(foodTrackService) {
        this.totals = foodTrackService.getFoodTrackTotals(null, null);
    }
    FtTrackListComponent = __decorate([
        core_1.Component({
            selector: 'ft-track-list',
            template: "<h2>Last 6 days</h2>\n   <table>\n   <tr *ngFor=\"let total of totals\">\n    <td>{{total.id}}</td>\n    <td>{{total.date | date}}<td>\n    <td>{{total.calories}}<td>\n  </table>\n  ",
        }), 
        __metadata('design:paramtypes', [food_track_service_1.FoodTrackService])
    ], FtTrackListComponent);
    return FtTrackListComponent;
}());
exports.FtTrackListComponent = FtTrackListComponent;
//# sourceMappingURL=ft-track-list-component.js.map