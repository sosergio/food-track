import { Component } from '@angular/core';

@Component({
  selector: 'ft-header',
  template: 
  `<h1>FootTracker</h1>
   <div id="menu">
    <a routerLink="/tracks" routerLinkActive="active">Tracks</a>
    <a routerLink="/food" routerLinkActive="active">Food</a>
    <a routerLink="/settings" routerLinkActive="active">Food</a>
   </div>
  `,
  styleUrls:["/dist/css/ft-header-style.css"]
})
export class FtHeaderComponent{

}
