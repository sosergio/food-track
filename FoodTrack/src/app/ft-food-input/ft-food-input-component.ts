import { Component } from '@angular/core';
import {FoodService} from '../services/food-service';
import {Food} from '../services/food';

@Component({
  selector: 'ft-food-input',
  template: 
  `<form (ngSubmit)='submitNewFood()'>
      <input type='text' [(ngModel)]="food.name" name="newFoodName"/>
      <input type='text' [(ngModel)]="food.caloriesPer100gr" name="newFoodCaloriesPer100Gr"/>
      <input type='text' [(ngModel)]="food.caloriesPerUnit" name="newFoodCaloriesPerUnit"/>
      <input type='submit' />
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
