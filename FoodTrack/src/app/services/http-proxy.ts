import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {AppConfig} from '../app.config';

@Injectable()
export class HttpProxy {

    _http:Http;
    _config:AppConfig;
    constructor(http:Http, config:AppConfig){
        this._http = http;
        this._config = config;
    }

    getAsync<T>(resource:string): Observable<T>{
        //let bodyString = JSON.stringify(body); // Stringify payload
        let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options  = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.get(this._config.apiBaseUrl() + resource, options)
                         .map(response => response.json() as T)
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

    postAsync<T>(resource:string, item:any): Observable<number>{
        //let bodyString = JSON.stringify(body); // Stringify payload
        let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options  = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.post(this._config.apiBaseUrl() + resource, item, options)
                         .map(response => response.json() as Observable<number>)
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   

     putAsync<T>(resource:string, item:any): Observable<number>{
        //let bodyString = JSON.stringify(body); // Stringify payload
        let headers  = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options  = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.put(this._config.apiBaseUrl() + resource, item, options)
                         .map(response => response.json() as Observable<number>)
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }   
}