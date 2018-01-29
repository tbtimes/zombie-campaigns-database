import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Committee } from "../models/Committee";
import { Criteria } from "../models/Criteria";
import { MatTableDataSource } from "@angular/material";


@Component({
  selector: 'zc-committee-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //language=Angular2HTML
  template: `
    <mat-card class="committee-card">
      <div class="mobile-header">
          <mat-card-title>{{ committee.candidate_name }}</mat-card-title>
          <mat-card-subtitle>{{ committee.committee_name }}</mat-card-subtitle>
      </div>
      <div class="mat-card-side">
        <h2>{{ committee.state_full }}</h2>
        <svg *ngIf="committee.mugshot === 'anonymous.png'" x="0px" y="0px" width="175px" height="175px"
           viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
        <style type="text/css">
          .st0{fill:#333333;}
          .st1{fill:none;}
        </style>
        <path style="opacity: .7;" class="st0" d="M0,5.3v37.3C0,45.6,2.4,48,5.3,48h37.3c2.9,0,5.3-2.4,5.3-5.3V5.3C48,2.4,45.6,0,42.7,0H5.3C2.4,0,0,2.4,0,5.3z
           M32,16c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S32,11.6,32,16z M8,37.3c0-5.3,10.7-8.3,16-8.3s16,2.9,16,8.3V40H8V37.3z"/>
        <path class="st1" d="M0,0h48v48H0V0z"/>
        </svg>

        <img class="pol-mug" src="assets/mugs/{{committee.mugshot}}" *ngIf="committee.mugshot !== 'anonymous.png'">
        <div class="dates">
          <div *ngIf="committee.date_left_office">
            <div>Left office: <span class="date-span">{{committee.date_left_office | date : 'MM/dd/yyyy'}}</span></div>
          </div>
          <div *ngIf="committee.date_last_election">
            <div>Last election: <span class="date-span">{{committee.date_last_election | date : 'MM/dd/yyyy'}}</span></div>
          </div>
          <div *ngIf="committee.date_dead">
            <div>Died: <span class="date-span">{{committee.date_dead | date : 'MM/dd/yyyy'}}</span></div>
          </div>
        </div>
      </div>
      
      
      <mat-card-content>
        <mat-card-title-group style="width: 100%;">
          <mat-card-title>{{ committee.candidate_name }}</mat-card-title>
          <mat-card-subtitle>{{ committee.committee_name }}</mat-card-subtitle>
        </mat-card-title-group>
        <div class="bio">
          <p>{{committee.bio}}</p>
        </div>
        <div class="pol-reax" *ngIf="committee.reax">
          {{ committee.reax }}
        </div>
        
        <!--<ul class="toplines">-->
          <!--<li *ngFor="let crit of redCats">Spent {{ crit.sum | currency : 'USD'}} on {{ crit.category }}</li>-->
        <!--</ul>-->
        
        <div class="data-table-expansion">
          <mat-table [dataSource]="tableData">
            <ng-container matColumnDef="category">
              <mat-header-cell *matHeaderCellDef>Type of spending</mat-header-cell>
              <mat-cell *matCellDef="let crit">{{ crit.category }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="sum">
              <mat-header-cell *matHeaderCellDef>Total spent</mat-header-cell>
              <mat-cell *matCellDef="let crit">{{ crit.sum | currency : 'USD' : 'symbol' : '2.0-0' }}</mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="['category', 'sum']"></mat-header-row>
            <mat-row [ngClass]="{'highlight': crit.color === 'red'}" *matRowDef="let crit; columns: ['category', 'sum']"></mat-row>
          </mat-table>

          <button *ngIf="committee.criteria.length > 3" [color]="'primary'" class="card-action" mat-button (click)="ngOnExpand()">
            Expand to see all spending
            <mat-icon *ngIf="committee.expanded">expand_less</mat-icon>
            <mat-icon *ngIf="!committee.expanded">expand_more</mat-icon>
          </button>
          
          <a style="text-decoration: none;" href="assets/disbursements/{{committee.committee_id}}.csv" download>
            <button style="margin-top:1rem;" [color]="'primary'" mat-button class="download-button">
              Download all disbursements <mat-icon>file_download</mat-icon>
            </button>
          </a>
        </div>
        
        
        
      </mat-card-content>
    </mat-card>
  `,
  styles: [`           
           .highlight {
               background-color: wheat;
           }
           .committee-card, .mat-form-field {
              margin: 0 0.5rem;
              margin-bottom: 1em;
           }
           .mobile-header {
              display: none;
           }
           .mat-card-side, mat-card-content {
              vertical-align: top;
              line-height: 1.5;
           }
           .mat-card-title-group {
              margin: 0;
           }
           .dates {
              font-size: 0.95rem;
           }
           .dates div {
              margin-top: 0.5rem;
           }
           .mat-card-side {
              display: inline-block;
              width: 200px;
           }
           .mat-card-side img {
              width: 175px;
              height: auto;
              text-align: center;
           }
           mat-card-content {
              display: inline-block;
              width: 430px;
           }
           @media (max-width: 720px) {
              .mobile-header {
                  display: block;
                  text-align: center;
              }
              mat-card-content mat-card-title-group {
                  display: none;
              }
              mat-card-content {
                  display: block;
                  width: 100%;
              }
              .mat-card-side {
                  display: block;
                  width: 100%;
                  text-align: center;
              }
           }
           .card-action {
               margin: 0 auto; 
               display: block;
           }
           .download-button {
               display: block;
               margin: 5px auto;
           }
           .pol-mug {
               height: 200px;
               width: auto;
           }
           `]
})
export class CommitteeCardComponent implements OnInit {
  @Input() committee: Committee;
  redCats: Criteria[];
  tableData: MatTableDataSource<Criteria>;

  constructor() { }

  ngOnInit() {
    this.redCats = this.committee.criteria.filter(x => x.color === 'red').sort((a, b) => a.sum > b.sum ? -1 : 1);
    this.tableData = new MatTableDataSource();
    this.tableData.data = this.committee.criteria.sort((a,b) => a.sum > b.sum ? -1 : 1).slice(0,3);
  }

  ngOnExpand() {
    if (this.committee.expanded)
      this.tableData.data = this.committee.criteria.sort((a,b) => a.sum > b.sum ? -1 : 1).slice(0,3);
    else
      this.tableData.data = this.committee.criteria.sort((a,b) => a.sum > b.sum ? -1 : 1);
    this.committee.expanded = !this.committee.expanded;
  }

  ngOnCollapse() {
    this.tableData.data = this.committee.criteria.sort((a,b) => a.sum > b.sum ? -1 : 1);
  }

}
