"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var router_1 = require('@angular/router');
var core_2 = require('@angular/core');
var router_2 = require('@angular/router');
var app_config_1 = require('../app.config');
var ConfigLoadRouter = (function (_super) {
    __extends(ConfigLoadRouter, _super);
    function ConfigLoadRouter(parentOutletMap, location, resolver, name, _config) {
        _super.call(this, parentOutletMap, location, resolver, name);
        this._config = _config;
    }
    ConfigLoadRouter.prototype.activate = function (activatedRoute, resolver, injector, providers, outletMap) {
        var _this = this;
        return this._config.load().then(function () { return _super.prototype.activate.call(_this, activatedRoute, resolver, injector, providers, outletMap); });
    };
    ConfigLoadRouter = __decorate([
        core_1.Directive({
            selector: 'config-load-router'
        }), 
        __metadata('design:paramtypes', [router_2.RouterOutletMap, core_2.ViewContainerRef, core_2.ComponentFactoryResolver, String, app_config_1.AppConfig])
    ], ConfigLoadRouter);
    return ConfigLoadRouter;
}(router_1.RouterOutlet));
exports.ConfigLoadRouter = ConfigLoadRouter;
//# sourceMappingURL=config-load-router.js.map