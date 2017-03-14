import { Component } from '@angular/core';
@Component({
  template: `
    <main>
        <div class="column">
            <div class="edit-area">
                <ft-food-input class="area"></ft-food-input>
            </div>
            <div class="list-area">
                <ft-food-list class="area"></ft-food-list>
            </div>
        </div>
        <aside class="column">
            <ft-track-total-list class="two-cols-right area"></ft-track-total-list>
        </aside>
    <main>
  `
})
export class FoodView{}
