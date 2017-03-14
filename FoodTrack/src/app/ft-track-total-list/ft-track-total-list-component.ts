import { Component } from '@angular/core';
import { FoodTrackService} from '../services/food-track-service';
import { FoodTrackTotal} from '../services/food-track-total';

@Component({
  selector: 'ft-track-total-list',
  template: 
  `<h2>Last 6 days</h2>
   <table cellspacing="0">
   <tr *ngFor="let total of totals">
    <td>{{total.id}}</td>
    <td>{{total.date | date}}<td>
    <td>{{total.calories}}<td>
  </table>
  `,
})
export class FtTrackTotalListComponent  {
  totals:Array<FoodTrackTotal>;
  constructor(foodTrackService:FoodTrackService){
    //this.totals = foodTrackService.getFoodTrackTotals(null,null);
  }
}
