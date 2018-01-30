import { Component, OnInit } from '@angular/core';
import * as reducers from "./reducers";
import { Store } from "@ngrx/store";



@Component({
  selector: 'zc-root',
  template: `
    <mat-toolbar [color]="'primary'">
      <a class="header-logo-link" href="http://tampabay.com">
        <img class="header-logo hidden-sm-down" src="http://tampabay.com/projects/assets/tampabaytimes_white.svg" alt="Tampa Bay Times">
        <img class="header-logo hidden-md-up" src="http://tampabay.com/projects/assets/logo-t.svg" alt="Tampa Bay Times">
      </a>

      <a class="header-logo-link wtsp" href="http://www.tegna.com/">
        <img class="header-logo hidden-sm-down" src="assets/tegna-inc-logo.png" alt="Tegna">
        <img class="header-logo hidden-md-up" src="assets/tegna-inc-logo.png" alt="Tegna">
      </a>

      <a class="header-logo-link" href="http://www.wtsp.com/">
        <img class="header-logo hidden-sm-down" src="assets/site-nav-logo@2x.png" alt="WTSP">
        <img class="header-logo hidden-md-up" src="assets/site-nav-logo@2x.png" alt="WTSP">
      </a>

      <!-- This fills the remaining space of the current row -->
      <span class="example-fill-remaining-space"></span>

      <a style="color: inherit" href=".."><span class="link-to-story"><span class="zombie">Zombie</span> Campaigns</span></a>
    </mat-toolbar>
    <label>Interactive database</label>
    <h1>See how the<br>102 <span class="zombie">‘zombie’</span> politicians<br>spent their money</h1>
    <p class="byline">
      <span class="dateline">Jan. 31, 2018</span>
      <span class="byline1">By Eli Murray and Connie Humburg</span>
      <br>
      <span class="byline1">Design by Neil Bedi</span>
      <br>
      <span class="byline2">Times Staff</span>
    </p>
    <p>Reporters for the Tampa Bay Times and WTSP NewsChannel 10 used <a href="https://api.open.fec.gov/developers/">data from the Federal Election Commission</a> to build a database of 102 zombie campaigns — federal campaign accounts that were still spending money after their candidate left office, stopped campaigning, or in some cases, died.</p>
    <p>You can <a download href="assets/all_tagged_disbursements.csv">download all of the data</a> or use this app to browse the zombie campaigns we've identified. You'll find examples of former politicians using campaign funds to pay their family, to finance their upscale lifestyles and social events, and to further their post-political careers –– whether they were formally registered as a lobbyist or not.</p>
    <p>Read the full story <a href="..">here</a>.</p>
    <p style="font-size: .9em;margin-top: 2rem;"><em>In the interest of fairness, we did not include data within two years of a campaign's last election or the last time a politician held office. This was to give campaigns ample time to pay off debts, get out of leases, and end other contracts. We removed records that did not have a date, and did not tag tax payments, refunds, negative amounts, or disgorgements. We categorized payments according what the campaign listed as the disbursement description.</em></p>
    <div class="content-well">
      <router-outlet></router-outlet>
    </div>
    <footer>
      <div class="copyright">
        ©2018 All Rights Reserved | <a href="//www.tampabay.com">Tampa&nbsp;Bay&nbsp;Times</a>
      </div>
    </footer>
  `,
  styles: [`
           .zombie {
              font-family: Nosifer;
           }
           .mat-toolbar {
              background: url('assets/charcoal2.jpg');
              overflow: hidden;
           }
           .mat-toolbar a {
              text-decoration: none;
           }
           .mat-toolbar img {
              height: 28px;
              margin-right: 0.5rem;
           }
           .mat-toolbar .hidden-md-up {
              display: none;
            }
            .mat-toolbar .hidden-sm-down {
              display: inline-block;
            }
           @media(max-width: 650px) {
              .mat-toolbar .hidden-md-up {
                display: inline-block;
              }
              .mat-toolbar .hidden-sm-down {
                display: none;
              }
              .mat-toolbar img {
                height: 20px;
              }
              .link-to-story {
                font-size: 14px;
              }
           }
           @media(max-width: 430px) {
              .link-to-story {
                display: none;
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
               font-weight: bold;
               text-transform: uppercase;
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
              font-family: "Merriweather", serif;
              font-size: calc(2.8vw * (1) + 20px);
              text-align: center;
              letter-spacing: -2.2px;
              max-width: 1000px;
              margin-top: 0.5rem;
              margin-left: auto;
              margin-right: auto;
              line-height: 1.3;
            }
            h1 .zombie {
              color: darkgoldenrod;
              text-transform: uppercase;
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
            footer {
              text-align: center;
              font-family: Merriweather,Georgia,"Times New Roman",Times,serif;
              color: gray;
              margin: 3rem 1rem 3rem;
              padding-top: 2rem;
              border-top: thin solid lightgray;
            }
           `]
})
export class AppComponent implements OnInit {

  constructor(private store: Store<reducers.State>) {}

  ngOnInit() {}
}
