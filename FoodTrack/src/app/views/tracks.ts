import { Component } from '@angular/core';

@Component({
  template: `
    <main>
        <div class="column">
            <div class="edit-area">
                <ft-track-input [date]="trackInputDate"></ft-track-input>
                <button (click)="toggleNewFoodFormIsHidden()">Add new</button>
                <ft-food-input [hidden]="newFoodFormIsHidden"></ft-food-input>
            </div>
            <div class="list-area">
                <ft-track-list class="two-cols-left area" [date]="trackInputDate"></ft-track-list>
            </div>
        </div>
        <aside class="column">
            <ft-track-total-list class="two-cols-right area"></ft-track-total-list>
        </aside>
    </main>
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
