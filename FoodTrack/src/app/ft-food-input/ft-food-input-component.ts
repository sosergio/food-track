import { Component } from '@angular/core';
import {FoodService} from '../services/food-service';
import {Food} from '../services/food';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'ft-food-input',
  template: 
  `<form (ngSubmit)='submitNewFood()'>
      <div class="input-container">
          <div class="input-group">
              <input placeholder="new food" [(ngModel)]="food.name" name="newFoodName" />
          </div>
          <div class="input-group">
              <input placeholder="cal 100gr" [(ngModel)]="food.caloriesPer100gr" name="newFoodCaloriesPer100Gr"/>
              <input placeholder="cal in 1" [(ngModel)]="food.caloriesPerUnit" name="newFoodCaloriesPerUnit"/>
          </div>
      </div>
      <button type="submit">Submit</button>
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
    this.foodService.addFood(this.food)
                    .subscribe((res:number)=> console.log(res));
    this.food = new Food();
  }

}
