import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food-service';
import { FoodTrackService } from './services/food-track-service';



@Component({
  selector: 'ft-app',
  template: `
  <div id="wrapper">
    <ft-header></ft-header>
    <router-outlet></router-outlet>    
  </div>
  <footer>no pixels were harmed in the making.</footer>
  `,
  providers: [
    FoodService,
    FoodTrackService
  ],
  
   
})
export class AppComponent{}