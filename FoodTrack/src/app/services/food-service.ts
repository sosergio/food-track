import { Injectable } from '@angular/core';
import { Food }     from './food';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AppConfig} from '../app.config';
import {HttpProxy} from './http-proxy';

@Injectable()
export class FoodService {

    _http:HttpProxy;
    constructor(private http:Http, private config:AppConfig){
        this._http = new HttpProxy(http, config);
    }

    getAllFood(): Observable<Food[]>{
        return this._http.getAsync<Food[]>("/Food");
    }

    getById(id:number): Observable<Food>{
        return this._http.getAsync<Food>("/Food/" + id);
    }

    addFood(food:Food) : Observable<number>{
        return this._http.postAsync("/Food", food);
    }
    
   
    findByName(name:string){
        this.getAllFood()
            .filter(s => new RegExp(name, 'gi').test(s.name))
        
    }
    
   
}