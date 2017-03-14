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
    function FtTrackListComponent(_foodTrackService) {
        this.updateList = function () {
            this.foodTrackService.getFoodTrackByDay(this.selectedDate);
        };
        this.foodTrackService = _foodTrackService;
    }
    FtTrackListComponent.prototype.ngOnInit = function () {
        this.updateList();
    };
    __decorate([
        core_1.Input('date'), 
        __metadata('design:type', Date)
    ], FtTrackListComponent.prototype, "selectedDate", void 0);
    FtTrackListComponent = __decorate([
        core_1.Component({
            selector: 'ft-track-list',
            template: "<table cellspacing=\"0\">\n   <thead>\n      <tr>\n          <th>Id</th>\n          <th>Name</th>\n          <th>Calories in gr</th>\n          <th>Calories in 1 unit</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr *ngFor=\"let track of tracks | async\">\n        <td>{{track.id}}</td>\n        <td>{{track.food.name}}</td>\n        <td>{{track.date | date}}<td>\n        <td>{{track.quantityValue}}{{track.unityOfMeasure}}<td>\n      </tr>\n  </tbody>\n  </table>\n  ",
        }), 
        __metadata('design:paramtypes', [food_track_service_1.FoodTrackService])
    ], FtTrackListComponent);
    return FtTrackListComponent;
}());
exports.FtTrackListComponent = FtTrackListComponent;
//# sourceMappingURL=ft-track-list-component.js.map