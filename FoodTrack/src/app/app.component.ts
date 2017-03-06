import { Component } from '@angular/core';
import { FoodService } from './services/food-service';
import { FoodTrackService } from './services/food-track-service';

@Component({
  selector: 'ft-app',
  template: `
  <ft-header></ft-header>
  <main>
   <ft-track-list [date]="trackInputDate"></ft-track-list>
   <ft-track-input [date]="trackInputDate"></ft-track-input>
   <button (click)="toggleNewFoodFormIsHidden()">Add new</button>
   <ft-food-input [hidden]="newFoodFormIsHidden"></ft-food-input>
   <ft-track-total-list></ft-track-total-list>
  </main>
  `,
  styleUrls:["/dist/css/app.style.css"],
  providers: [
    FoodService,
    FoodTrackService
  ],
})
export class AppComponent  { 
  trackInputDate:Date;
  newFoodFormIsHidden:Boolean;

  constructor(){
    this.trackInputDate = new Date(2017,1,1);
    this.newFoodFormIsHidden = true;

  }
  toggleNewFoodFormIsHidden = function(){
    this.newFoodFormIsHidden = !this.newFoodFormIsHidden;
  }
}
