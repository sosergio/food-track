import {Food} from './food';

export class FoodTrack {
  id: number;
  date:Date;
  foodId: number;
  quantityValue: number;
  unityOfMeasure:string = "gr";
  food:Food = new Food();

  constructor(_date:Date){
    this.date = _date;
  }
  
}