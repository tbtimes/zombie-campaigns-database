import { Component, OnInit } from '@angular/core';
import * as reducers from "./reducers";
import { Store } from "@ngrx/store";



@Component({
  selector: 'zc-root',
  template: `
    <mat-toolbar [color]="'primary'">
      <img src="http://tampabay.com/projects/assets/tampabaytimes_white.svg"/>

      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>

      <span class="link-to-story"><span class="zombie">Zombie</span> Campaigns</span>
    </mat-toolbar>
    <label>Interactive database</label>
    <h1>See how the 102 "zombie" politicians spent their money</h1>
    <p class="byline">
      <span class="dateline">Jan. 31, 2018</span>
      <span class="byline1">By TKTKTKTKTK, TKTKTKTKTK AND TKTKTKTKTK</span>
      <br>
      <span class="byline2">Times/TKTKTK Staff</span>
    </p>
    <p>Let's describe this amazing database. It has a search bar and a list of all of these people and all of their disbursements. Check out the highlighted rows.Let's describe this amazing database. It has a search bar and a list of all of these people and all of their disbursements. </p>
    <div class="content-well">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
           .zombie {
              font-family: Nosifer;
           }
           .mat-toolbar {
              background: url('assets/charcoal2.jpg');
              overflow: hidden;
           }
           .mat-toolbar img {
              height: 28px;
           }
           @media(max-width: 450px) {
              .mat-toolbar img {
                height: 20px;
              }
              .link-to-story {
                font-size: 14px;
              }
           }
           .content-well {
               max-width: 700px;
               margin: 0 auto;
               margin-top: 4rem;
           }
           .example-fill-remaining-space {
              /* This fills the remaining space, by using flexbox. 
                 Every toolbar row uses a flexbox row layout. */
              flex: 1 1 auto;
           }
           .link-to-story {
               //font-weight: 300;
               cursor: pointer;
               float: right;
           }
           label {
              color: darkgoldenrod;
              display: block;
              margin-top: 2rem;
              font-size: 1.75em;
              text-align: center;
              font-family: "Open Sans Condensed", "Helvetica Neue", Helvetica, Arial, sans-serif;
           }
           h1 {
              font-family: "Open Sans Condensed", "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: calc(3vw * (1) + 27px);
              text-align: center;
              letter-spacing: -2.2px;
              max-width: 1000px;
              margin-top: 0.5rem;
              margin-left: auto;
              margin-right: auto;
            }
            p {
              font-family: 'Merriweather', serif;
              font-weight: normal;
              font-size: 1.1em;
              line-height: 1.7;
              margin: auto;
              margin-bottom: 1em;
              max-width: 690px;
              padding: 0 1rem;
            }
            .dateline {
              font-weight: normal;
              float: right;
              color: #222;
              margin-bottom: 0;
            }
            .dateline {
              font-family: 'Open Sans Condensed', sans-serif;
            }
            .byline {
              color: #777;
              font-family: 'Open Sans Condensed', sans-serif;
              font-size: 1em;
              font-weight: bold;
            }
            .byline1, .byline2 {
              clear: both;
              display: inline-block;
            }
           `]
})
export class AppComponent implements OnInit {

  constructor(private store: Store<reducers.State>) {}

  ngOnInit() {}
}
