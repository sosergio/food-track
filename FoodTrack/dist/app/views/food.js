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
var FoodView = (function () {
    function FoodView() {
    }
    FoodView = __decorate([
        core_1.Component({
            template: "\n    <md-menu #appMenu=\"mdMenu\">\n  <button md-menu-item> Settings </button>\n  <button md-menu-item> Help </button>\n</md-menu>\n\n<button md-icon-button [mdMenuTriggerFor]=\"appMenu\">\n   <md-icon>more_vert</md-icon>\n</button>\n<br/>\n<h2>\nTEST\n</h2>\n   \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoodView);
    return FoodView;
}());
exports.FoodView = FoodView;
//# sourceMappingURL=food.js.map