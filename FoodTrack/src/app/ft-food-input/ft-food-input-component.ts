import { Component } from '@angular/core';
import {FoodService} from '../services/food-service';
import {Food} from '../services/food';

@Component({
  selector: 'ft-food-input',
  template: 
  `<form (ngSubmit)='submitNewFood()'>
      <md-input-container>
        <input mdInput placeholder="Name" [(ngModel)]="food.name" name="newFoodName">
      </md-input-container>
      <md-input-container>
        <input mdInput placeholder="kCal per 100gr" [(ngModel)]="food.caloriesPer100gr" name="newFoodCaloriesPer100Gr">
      </md-input-container>
      <md-input-container>
        <input mdInput placeholder="kCal per unit" [(ngModel)]="food.caloriesPerUnit" name="newFoodCaloriesPerUnit">
      </md-input-container>
      <button type='submit' md-raised-button>Add</button>
   </form>
  `,
})
export class FtFoodInputComponent {
  food:Food;
  foodService:FoodService;
  
  constructor( _foodService: FoodService){
    this.foodService = _foodService;
    this.food = new Food();
  }

  submitNewFood = function(){
    this.foodService.addFood(this.food);
    this.food = new Food();
  }

}
