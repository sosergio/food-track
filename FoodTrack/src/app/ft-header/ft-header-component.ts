import { Component } from '@angular/core';

@Component({
  selector: 'ft-header',
  template: 
  `<h1>FootTracker</h1>
   <div id="menu">
    <a href="#">Food List</a>
    <a href="#">Settings</a>
   </div>
  `,
  styleUrls:["/dist/css/ft-header-style.css"]
})
export class FtHeaderComponent  {

 }
