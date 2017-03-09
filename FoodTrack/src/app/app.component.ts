import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food-service';
import { FoodTrackService } from './services/food-track-service';



@Component({
  selector: 'ft-app',
  template: `
  <ft-header></ft-header>
  <main class="flex-container">
  <router-outlet></router-outlet>
  </main>
  `,
  providers: [
    FoodService,
    FoodTrackService
  ],
  
   
})
export class AppComponent{}