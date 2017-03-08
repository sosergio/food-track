import { Component, Input } from '@angular/core';
import { FoodService} from '../services/food-service';
import { Food} from '../services/food';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'ft-food-list',
  template: 
  `<h2>All</h2> 
   <table>
   <tr *ngFor="let f of food | async">
    <td>{{f.identifier}}</td>
    <td>{{f.name}}</td>
    <td>{{f.caloriesPer100gr}}<td>
    <td>{{f.caloriesPerUnit}}<td>
  </table>
  `,
})
export class FtFoodListComponent  {
  food:Observable<Food[]>;
  foodService:FoodService;
  
  constructor(_foodService:FoodService){
    this.foodService = _foodService; 
    this.updateList();
  }

  updateList = function(){
    //this.food = this.foodService.getAllFood();
    this.food = this.foodService.getAsync();
          /*.subscribe(food => {
            this.food = food;
          }, 
          err => {
            // Log errors if any
            console.log(err);
          });*/
                    
  }
}
