import { Injectable } from '@angular/core';
import { Food }     from './food';

@Injectable()
export class FoodService {

    food:Array<Food>;
    constructor(){
        this.food = [
            {id:1,name:"banana",caloriesPer100gr:0,caloriesPerUnit:100},
            {id:2,name:"seasoning",caloriesPer100gr:290,caloriesPerUnit:0},
            {id:3,name:"blueberry",caloriesPer100gr:90,caloriesPerUnit:100},
            {id:4,name:"almond",caloriesPer100gr:450,caloriesPerUnit:100}

        ];
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