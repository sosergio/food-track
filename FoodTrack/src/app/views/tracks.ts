import { Component } from '@angular/core';

@Component({
  template: `
   <ft-track-list [date]="trackInputDate"></ft-track-list>
   <ft-track-input [date]="trackInputDate"></ft-track-input>
   <button (click)="toggleNewFoodFormIsHidden()">Add new</button>
   <ft-food-input [hidden]="newFoodFormIsHidden"></ft-food-input>
   <ft-track-total-list></ft-track-total-list>
  `
})
export class TracksView  { 
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
