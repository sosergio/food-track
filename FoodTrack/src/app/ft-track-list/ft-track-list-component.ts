import { Component, Input } from '@angular/core';
import { FoodTrackService} from '../services/food-track-service';
import { FoodTrack} from '../services/food-track';

@Component({
  selector: 'ft-track-list',
  template: 
  `<h2>{{selectedDate | date}}</h2> 
   <table>
   <tr *ngFor="let track of tracks">
    <td>{{track.id}}</td>
    <td>{{track.food.name}}</td>
    <td>{{track.date | date}}<td>
    <td>{{track.quantityValue}}{{track.unityOfMeasure}}<td>
  </table>
  `,
})
export class FtTrackListComponent  {
  @Input('date')
  selectedDate:Date;

  tracks:Array<FoodTrack>;
  foodTrackService:FoodTrackService;
  
  constructor(_foodTrackService:FoodTrackService){
    this.foodTrackService = _foodTrackService; 
  }

  ngOnInit(){
    this.updateList();
  }

  updateList = function(){
    this.tracks = this.foodTrackService.getFoodTrackByDay(this.selectedDate);
  }
}
