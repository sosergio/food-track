import { Component, Input } from '@angular/core';
import { FoodService} from '../services/food-service';
import { Food} from '../services/food';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'ft-food-list',
  template: 
  `<table cellspacing="0">
      <thead>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Calories in gr</th>
              <th>Calories in 1 unit</th>
          </tr>
      </thead>
      <tbody>
          <tr *ngFor="let f of food | async">
            <td>{{f.identifier}}</td>
            <td>{{f.name}}</td>
            <td>{{f.caloriesPer100gr}}</td>
            <td>{{f.caloriesPerUnit}}</td>
          </tr>
      </tbody>
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
    this.food = this.foodService.getAllFood();
  }
}
