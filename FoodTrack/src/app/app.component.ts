import { Component } from '@angular/core';
import { FoodService } from './services/food-service';
import { FoodTrackService } from './services/food-track-service';

@Component({
  selector: 'ft-app',
  template: `
  <md-toolbar color="primary">
    <span>GameViewer</span>
  </md-toolbar>
  <ft-header></ft-header>
  <main>
   <router-outlet></router-outlet>
  </main>
  `,
  styleUrls:["/dist/css/app.style.css"],
  providers: [
    FoodService,
    FoodTrackService
  ],
})
export class AppComponent {}
