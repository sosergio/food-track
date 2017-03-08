import { Injectable } from '@angular/core';
import { Food }     from './food';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FoodService {

    food:Array<Food>;
    _http:Http;
    constructor(private http:Http){
        this._http = http;
        this.food = [
            {id:1,name:"banana",caloriesPer100gr:0,caloriesPerUnit:100},
            {id:2,name:"seasoning",caloriesPer100gr:290,caloriesPerUnit:0},
            {id:3,name:"blueberry",caloriesPer100gr:90,caloriesPerUnit:100},
            {id:4,name:"almond",caloriesPer100gr:450,caloriesPerUnit:100}

        ];
    }

    getAsync(): Observable<Food[]>{
        //let bodyString = JSON.stringify(body); // Stringify payload
        let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options  = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.get("http://localhost:5000/api/Food")
                         .map(
                             response => response.json() as Food[])
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getAllFood() {
        return this.food; 
    }
    getById(id:number):Food {
        var array = this.food.filter(x => x.id === id); 
        if(array.length == 1)
            return array[0];
        
        return null;
    }
    findByName(name:string){
        return this.food.filter((s) => new RegExp(name, 'gi').test(s.name));
    }
    addFood(food:Food) :number{
       var id = this.food.length;
       food.id = id;
       this.food.push(food);
       return id;
       
    }
}