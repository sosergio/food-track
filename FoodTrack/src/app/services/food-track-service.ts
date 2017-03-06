import { Injectable } from '@angular/core';
import { Food }     from './food';
import { FoodTrack }     from './food-track';
import { FoodService } from './food-service';
import { FoodTrackTotal } from './food-track-total';

@Injectable()
export class FoodTrackService {

    foodTracks:Array<FoodTrack>;
    foodService:FoodService;
    constructor(_foodService:FoodService){
        this.foodService = _foodService;
        this.foodTracks = [
            {id:1,date: new Date(2017,1,1),foodId:1,quantityValue:100,unityOfMeasure:"gr",food:null},
            {id:2,date: new Date(2017,1,1),foodId:2,quantityValue:200,unityOfMeasure:"gr",food:null},
            {id:3,date: new Date(2017,1,1),foodId:3,quantityValue:300,unityOfMeasure:"gr",food:null},
            {id:4,date: new Date(2017,1,1),foodId:1,quantityValue:400,unityOfMeasure:"gr",food:null},
            {id:5,date: new Date(2017,1,1),foodId:2,quantityValue:500,unityOfMeasure:"gr",food:null}
        ];
    }

    getFoodTrackByDay(day:Date) {
        var self  = this;
        var tracks = this.foodTracks.filter(function(f){
            if(f.date.getTime() === day.getTime()) return f;
        }); 

        tracks.map(function(f){
            f.food = self.foodService.getById(f.foodId);
        })
        return tracks;
    }
    addFoodTrack(foodTrack:FoodTrack){
       this.foodTracks.push(foodTrack);
    }
    updateFoodTrack(foodTrack:FoodTrack){
       var elem = this.foodTracks.find(p => p.id == foodTrack.id);
       if(elem != null){
           elem.date = foodTrack.date;
           elem.foodId = foodTrack.foodId;
           elem.quantityValue = foodTrack.quantityValue;
           elem.unityOfMeasure = foodTrack.unityOfMeasure;
       }
    }

    getFoodTrackTotals(from:Date, to:Date):Array<FoodTrackTotal> {
        var self  = this;
        var tracks = this.foodTracks;
        //var tracks2 = this.foodTracks.filter(function(f){
        //    if(f.date.getTime() === day.getTime()) return f;
        //}); 

        // tracks : array of foodtracks
        // we need to create an array of FoodTrackTotal
        // group by track.date, sum -> track.calories

        var rs = tracks.reduce(function(result,food){
            var searchTotal = result.filter(r => r.date.getTime() === food.date.getTime());
            if(searchTotal && searchTotal.length > 0){
                searchTotal[0].calories += food.quantityValue;
            }else{
                var totalPerDay = new FoodTrackTotal();
                totalPerDay.calories = food.quantityValue;
                totalPerDay.date = food.date;
                result.push(totalPerDay);
            }
            return result;
        },new Array<FoodTrackTotal>())
        return rs;
    }
}