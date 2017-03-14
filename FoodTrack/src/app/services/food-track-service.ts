import { Injectable } from '@angular/core';
import { Food }     from './food';
import { FoodTrack }     from './food-track';
import { FoodService } from './food-service';
import { FoodTrackTotal } from './food-track-total';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AppConfig} from '../app.config';
import {HttpProxy} from './http-proxy';

@Injectable()
export class FoodTrackService {

    foodService:FoodService;
    _http:HttpProxy;
    constructor(private http:Http, private config:AppConfig, _foodService:FoodService){
        this._http = new HttpProxy(http, config);
        this.foodService = _foodService;
    }

    getFoodTrackByDay(day:Date):Observable<FoodTrack[]> {
        return this._http.getAsync<FoodTrack[]>("/FoodTracks");
    }
    addFoodTrack(foodTrack:FoodTrack):Observable<number>{
       return this._http.postAsync("/FoodTracks", foodTrack);
    }
    updateFoodTrack(foodTrack:FoodTrack):Observable<number>{
       return this._http.putAsync("/FoodTracks/"+foodTrack.id, foodTrack);
    }

   // getFoodTrackTotals(from:Date, to:Date):Array<FoodTrackTotal> {
       /* var self  = this;
        var tracks = this.foodTracks;
        //var tracks2 = this.foodTracks.filter(function(f){
        //    if(f.date.getTime() === day.getTime()) return f;
        //}); 

        // tracks : array of foodtracks
        // we need to create an array of FoodTrackTotal
        // group by track.date, sum -> track.calories
        return null;
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
        return rs;*/
   // }
}