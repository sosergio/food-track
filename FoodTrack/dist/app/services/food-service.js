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
var http_1 = require('@angular/http');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var app_config_1 = require('../app.config');
var http_proxy_1 = require('./http-proxy');
var FoodService = (function () {
    function FoodService(http, config) {
        this.http = http;
        this.config = config;
        this._http = new http_proxy_1.HttpProxy(http, config);
    }
    FoodService.prototype.getAllFood = function () {
        return this._http.getAsync("/Food");
    };
    FoodService.prototype.getById = function (id) {
        return this._http.getAsync("/Food/" + id);
    };
    FoodService.prototype.addFood = function (food) {
        return this._http.postAsync("/Food", food);
    };
    FoodService.prototype.findByName = function (name) {
        return this.getAllFood()
            .map(function (all) { return all.filter(function (s) { return new RegExp(name, 'gi').test(s.name); }); });
    };
    FoodService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, app_config_1.AppConfig])
    ], FoodService);
    return FoodService;
}());
exports.FoodService = FoodService;
//# sourceMappingURL=food-service.js.map