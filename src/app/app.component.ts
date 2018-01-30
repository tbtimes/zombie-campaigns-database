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

    <p>Reporters for the Tampa Bay Times and WTSP NewsChannel 10 used <a href="https://api.open.fec.gov/developers/" target="_blank">data from the Federal Election Commission</a> to build a database of 102 zombie campaigns — federal campaign accounts that were still spending money years after their candidate left office, stopped campaigning, or in some cases, died.</p>
    <p>You can <a href="assets/all_tagged_disbursements.csv">download all of the data</a> or use this app to browse the zombie campaigns we identified. You’ll find examples of former politicians using campaign funds to pay their family, to finance their upscale lifestyles and social events and to boost their post-political careers.</p>
    <p>In the interest of fairness, our database does not include spending within two years of a politician’s last election or retirement from elected office.  This was to give campaigns ample time to pay off debts, get out of leases and end other contracts. It also does not include spending after Sept. 30, 2017. As a result, the totals listed here may be lower than the sums described in other parts of our coverage. We categorized payments according to the campaign’s listed disbursement description. <a href="">Click here for more notes on our methodology.</a></p>

    <div class="content-well">
      <router-outlet></router-outlet>
    </div>
    <footer>
      <p style="font-size: .8em"><em>Politician mugshots in the database were sourced from the <a href="http://bioguide.congress.gov/biosearch/biosearch.asp">Biographical Directory of the United States of Congress</a>.</em></p>
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
