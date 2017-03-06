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
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
//import 'hammerjs';
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var food_1 = require('./views/food');
var tracks_1 = require('./views/tracks');
var ft_header_component_1 = require('./ft-header/ft-header-component');
var ft_track_input_component_1 = require('./ft-track-input/ft-track-input-component');
var ft_track_list_component_1 = require('./ft-track-list/ft-track-list-component');
var ft_food_input_component_1 = require('./ft-food-input/ft-food-input-component');
var ft_track_total_list_component_1 = require('./ft-track-total-list/ft-track-total-list-component');
var ft_food_list_component_1 = require('./ft-food-list/ft-food-list-component');
var appRoutes = [
    { path: 'tracks', component: tracks_1.TracksView },
    { path: 'food', component: food_1.FoodView },
    { path: '',
        redirectTo: '/tracks',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            declarations: [
                app_component_1.AppComponent,
                ft_header_component_1.FtHeaderComponent,
                ft_track_input_component_1.FtTrackInputComponent,
                ft_track_list_component_1.FtTrackListComponent,
                ft_food_input_component_1.FtFoodInputComponent,
                ft_track_total_list_component_1.FtTrackTotalListComponent,
                ft_food_list_component_1.FtFoodListComponent,
                food_1.FoodView,
                tracks_1.TracksView],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map