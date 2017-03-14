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
var food_service_1 = require('./food-service');
var http_1 = require('@angular/http');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var app_config_1 = require('../app.config');
var http_proxy_1 = require('./http-proxy');
var FoodTrackService = (function () {
    function FoodTrackService(http, config, _foodService) {
        this.http = http;
        this.config = config;
        this._http = new http_proxy_1.HttpProxy(http, config);
        this.foodService = _foodService;
    }
    FoodTrackService.prototype.getFoodTrackByDay = function (day) {
        return this._http.getAsync("/FoodTracks");
    };
    FoodTrackService.prototype.addFoodTrack = function (foodTrack) {
        return this._http.postAsync("/FoodTracks", foodTrack);
    };
    FoodTrackService.prototype.updateFoodTrack = function (foodTrack) {
        return this._http.putAsync("/FoodTracks/" + foodTrack.id, foodTrack);
    };
    FoodTrackService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig, food_service_1.FoodService])
    ], FoodTrackService);
    return FoodTrackService;
}());
exports.FoodTrackService = FoodTrackService;
//# sourceMappingURL=food-track-service.js.map