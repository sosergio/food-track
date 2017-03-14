import { Component } from '@angular/core';

@Component({
  selector: 'ft-header',
  template: 
  `<header>
      <h1>Food Tracker</h1>
      <nav>
          <a routerLink="/tracks" routerLinkActive="active">Tracks</a>
          <a routerLink="/food" routerLinkActive="active">Food</a>
          <a routerLink="/settings" routerLinkActive="active">Food</a>
      </nav>
      <div style="clear:both;"></div>
  </header>
  `
})
export class FtHeaderComponent{

}
