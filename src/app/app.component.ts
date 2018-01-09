import { Component, OnInit } from '@angular/core';
import * as reducers from "./reducers";
import { Store } from "@ngrx/store";



@Component({
  selector: 'zc-root',
  template: `
    <mat-toolbar></mat-toolbar>
    <div class="content-well">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
           .content-well {
               max-width: 700px;
               margin: 0 auto;
           }
           `]
})
export class AppComponent implements OnInit {

  constructor(private store: Store<reducers.State>) {}

  ngOnInit() {}
}
