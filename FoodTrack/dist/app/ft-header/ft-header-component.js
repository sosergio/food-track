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
var FtHeaderComponent = (function () {
    function FtHeaderComponent() {
    }
    FtHeaderComponent = __decorate([
        core_1.Component({
            selector: 'ft-header',
            template: "<header>\n      <h1>Food Tracker</h1>\n      <nav>\n          <a routerLink=\"/tracks\" routerLinkActive=\"active\">Tracks</a>\n          <a routerLink=\"/food\" routerLinkActive=\"active\">Food</a>\n          <a routerLink=\"/settings\" routerLinkActive=\"active\">Food</a>\n      </nav>\n      <div style=\"clear:both;\"></div>\n  </header>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FtHeaderComponent);
    return FtHeaderComponent;
}());
exports.FtHeaderComponent = FtHeaderComponent;
//# sourceMappingURL=ft-header-component.js.map