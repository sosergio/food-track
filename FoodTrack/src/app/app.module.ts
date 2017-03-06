import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
//import 'hammerjs';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { FoodView } from './views/food';
import { TracksView } from './views/tracks';
import { FtHeaderComponent }  from './ft-header/ft-header-component';
import { FtTrackInputComponent }  from './ft-track-input/ft-track-input-component';
import { FtTrackListComponent }  from './ft-track-list/ft-track-list-component';
import { FtFoodInputComponent }  from './ft-food-input/ft-food-input-component';
import { FtTrackTotalListComponent }  from './ft-track-total-list/ft-track-total-list-component';
import { FtFoodListComponent }  from './ft-food-list/ft-food-list-component';

const appRoutes: Routes = [
  { path: 'tracks', component: TracksView },
  { path: 'food',      component: FoodView },
  { path: '',
    redirectTo: '/tracks',
    pathMatch: 'full'
  }
];


@NgModule({
  imports:      [ 
      BrowserModule, 
      MaterialModule.forRoot(), 
      FormsModule, 
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
      ],
  declarations: [ 
      AppComponent, 
      FtHeaderComponent,
      FtTrackInputComponent,
      FtTrackListComponent,
      FtFoodInputComponent,
      FtTrackTotalListComponent,
      FtFoodListComponent,
      FoodView,
      TracksView ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
