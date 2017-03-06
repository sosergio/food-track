import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { FtHeaderComponent }  from './ft-header/ft-header-component';
import { FtTrackInputComponent }  from './ft-track-input/ft-track-input-component';
import { FtTrackListComponent }  from './ft-track-list/ft-track-list-component';
import { FtFoodInputComponent }  from './ft-food-input/ft-food-input-component';
import { FtTrackTotalListComponent }  from './ft-track-total-list/ft-track-total-list-component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, 
      FtHeaderComponent,
      FtTrackInputComponent,
      FtTrackListComponent,
      FtFoodInputComponent,
      FtTrackTotalListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
