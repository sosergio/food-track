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
  `<form (ngSubmit)='submitNewFoodTrack()'>  
      <input type='text' [formControl]="foodSearchCtrl" name="foodSearchCtrl"/>
      <select [hidden]="!filteredFood || filteredFood.length == 0" [formControl]="foodTrackSelect">
        <option *ngFor="let food of filteredFood" value='{{food.id}}'>{{ food.name }}</option>
      </select>
      <input type='text' [formControl]="foodTrackQuantity" name="foodTrackQuantity"/>
      <input type='submit' />
   </form>`,
})
export class FtTrackInputComponent  {
  @Input('date')
  selectedDate:Date;
  
  //add FoodTrack formControls
  foodSearchCtrl:FormControl;
  foodTrackSelect:FormControl;
  foodTrackQuantity:FormControl;

  filteredFood:any;
  foodTrackService:FoodTrackService;
  
  constructor(_foodTrackService:FoodTrackService){
    this.foodTrackService = _foodTrackService; 
    this.foodSearchCtrl = new FormControl();
    this.foodTrackSelect = new FormControl();
    this.foodTrackQuantity = new FormControl();
    this.foodSearchCtrl.valueChanges
      .subscribe(data => {
        this.filteredFood = this.filterFood(data);
      })
  }

  filterFood = function(name:string):Array<Food>{
    var result = name ? this.foodService.findByName(name) : null;
    if(result == null || result.length == 0) this.selectCtrl.reset();
    return result;
  }

  submitNewFoodTrack = function(){
    var foodId:number;
    foodId = this.selectCtrl.value;
    this.foodTrackService.addFoodTrack(this.editing);
    this.updateList();
  }

}
