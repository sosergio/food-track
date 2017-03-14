import { Component, Input } from '@angular/core';
import { FoodTrackService} from '../services/food-track-service';
import { FoodTrack} from '../services/food-track';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'ft-track-list',
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
      <tr *ngFor="let track of tracks | async">
        <td>{{track.id}}</td>
        <td>{{track.food.name}}</td>
        <td>{{track.date | date}}<td>
        <td>{{track.quantityValue}}{{track.unityOfMeasure}}<td>
      </tr>
  </tbody>
  </table>
  `,
})
export class FtTrackListComponent  {
  @Input('date')
  selectedDate:Date;

  tracks:Observable<FoodTrack[]>;
  foodTrackService:FoodTrackService;
  
  constructor(_foodTrackService:FoodTrackService){
    this.foodTrackService = _foodTrackService; 
  }

  ngOnInit(){
    this.updateList();
  }

  updateList = function(){
    this.foodTrackService.getFoodTrackByDay(this.selectedDate);
  }
}
