import { Component } from '@angular/core';
import { Input, OnInit } from '@angular/core';
import { FormControl }   from '@angular/forms';
import {FoodTrackService} from '../services/food-track-service';
import {FoodService} from '../services/food-service';
import {FoodTrack} from '../services/food-track';
import {Food} from '../services/food';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'ft-track-input',
  template: 
  `
  <form (ngSubmit)='submitNewFoodTrack()'>  
      <div class="input-container">
          <div class="input-group">
              <input placeholder="Food search" type='text' [formControl]="foodSearchCtrl" name="foodSearchCtrl" />     
              <select placeholder="choose food" [hidden]="!filteredFood || filteredFood.length == 0" [formControl]="foodSearchSelect">
                <option *ngFor="let food of filteredFood | async" [value]="food.id">{{ food.name }}</option>
              </select>
          </div>
          <div class="input-group">
              <input  placeholder="Quantity" type='text' [(ngModel)]="track.quantityValue" name="foodTrackQuantity" />
              <select placeholder="Type" [(ngModel)]="track.unityOfMeasure" name="foodTrackUnityOfMeasure">
                <option value="gr" selected="selected">gr.</option>
                <option value="unit">units</option>
              </select>
          </div>
      </div>
      <button type='submit'>Add Track</button>
   </form>{{filteredFood ? filteredFood.length : 'NO'}}
   `,
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


  filterFood = function(name:string):Observable<Food[]>{
    return this.foodService.findByName(name)
                    .subscribe((result:Food[]) => { 
                        if(result == null || result.length == 0) this.foodSearchSelect.reset();
                    })
  }

  submitNewFoodTrack = function(){
    this.track.foodId = this.foodSearchSelect.value;
    this.foodTrackService.addFoodTrack(this.editing).subscribe();
  }

}
