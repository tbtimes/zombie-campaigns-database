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
      <span class="byline1">By ELI MURRAY AND CONNIE HUMBURG</span>
      <br>
      <span class="byline1">Design by NEIL BEDI</span>
      <br>
      <span class="byline2">Times Staff</span>
    </p>

    <p>Reporters for the <em>Tampa Bay Times</em> and <em>WTSP NewsChannel 10</em> used <a href="https://api.open.fec.gov/developers/" target="_blank">data from the Federal Election Commission</a> to build a database of 102 zombie campaigns — federal campaigns that were still spending money years after their candidate left office, stopped campaigning, or in some cases, died.</p>
    <p>You can <a href="assets/all_tagged_disbursements.csv">download all of the data</a> or use this app to browse the zombie campaigns we identified.</p>
    <p>Our database does not include spending within two years of a politician’s last election or retirement from elected office, assuming the politician is alive. It also does not include spending after Sept. 30, 2017. As a result, the totals listed here may be lower than the sums described in other parts of our coverage.</p>
    <p><a href="..">Click here</a> to read the story, and <a href="../#methodology"> here for more notes on our methodology.</a></p>


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
              color: #373a3c;
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

  constructor(private store: Store<reducers.State>) {
  }

  ngOnInit() {}
}
