import { Component } from '@angular/core';
@Component({
  template: `
    <md-menu #appMenu="mdMenu">
  <button md-menu-item> Settings </button>
  <button md-menu-item> Help </button>
</md-menu>

<button md-icon-button [mdMenuTriggerFor]="appMenu">
   <md-icon>more_vert</md-icon>
</button>
<br/>
<h2>
TEST
</h2>
   
  `
})
export class FoodView{}
