import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormControl }   from '@angular/forms';
import {FoodTrackService} from '../services/food-track-service';
import {FoodService} from '../services/food-service';
import {FoodTrack} from '../services/food-track';
import {Food} from '../services/food';

@Component({
  selector: 'ft-track-input',
  template: 
  `
  <md-menu #appMenu="mdMenu">
  <button md-menu-item> Settings </button>
  <button md-menu-item> Help </button>
</md-menu>

<button md-icon-button [mdMenuTriggerFor]="appMenu">
   <md-icon>more_vert</md-icon>
</button>

  <form (ngSubmit)='submitNewFoodTrack()'>  
      <md-input-container>
        <input mdInput placeholder="Food search" type='text' [formControl]="foodSearchCtrl" name="foodSearchCtrl" />
      </md-input-container>
      <md-select placeholder="choose food" [hidden]="!filteredFood || filteredFood.length == 0" [formControl]="foodSearchSelect">
        <md-option *ngFor="let food of filteredFood" [value]="food.id">{{ food.name }}</md-option>
      </md-select>
      <md-input-container>
        <input mdInput placeholder="Quantity" type='text' [(ngModel)]="track.quantity" name="foodTrackQuantity" />
      </md-input-container>
      <md-select placeholder="Type" [(ngModel)]="track.unityOfMeasure" name="foodTrackUnityOfMeasure">
        <md-option value="gr" selected="selected">gr.</md-option>
        <md-option value="unit">units</md-option>
      </md-select>
      <button type='submit' md-raised-button>Add Track</button>
   </form>{{filteredFood ? filteredFood.length : 'NO'}}`,
})
export class FtTrackInputComponent implements OnInit  {
  @Input('date')
  selectedDate:Date;
  
  //add FoodTrack formControls
  foodSearchCtrl:FormControl;
  foodSearchSelect:FormControl;
  foodTrackQuantity:FormControl;

  filteredFood:any;
  foodService:FoodService;
  foodTrackService:FoodTrackService;
  track:FoodTrack;
  
  constructor(_foodTrackService:FoodTrackService, _foodService:FoodService){
    this.foodService = _foodService;
    this.foodTrackService = _foodTrackService; 
    this.foodSearchCtrl = new FormControl();
    this.foodSearchSelect = new FormControl();
    this.foodTrackQuantity = new FormControl();
    this.foodSearchCtrl.valueChanges
      .subscribe(data => {
        this.filteredFood = this.filterFood(data);
      })
  }

  ngOnInit(){
    this.track = new FoodTrack(this.selectedDate);
  }


  filterFood = function(name:string):Array<Food>{
    var result = name ? this.foodService.findByName(name) : null;
    if(result == null || result.length == 0) this.foodSearchSelect.reset();
    return result;
  }

  submitNewFoodTrack = function(){
    var foodId:number;
    foodId = this.foodSearchSelect.value;
    this.foodTrackService.addFoodTrack(this.editing);


    this.updateList();
  }

}
