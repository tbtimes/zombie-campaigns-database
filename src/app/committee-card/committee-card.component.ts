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
      <mat-card-header>
        
        <mat-card-title-group style="width: 100%;">
          <mat-card-title>{{ committee.candidate_name }}</mat-card-title>
          <mat-card-subtitle>{{ committee.committee_name }}</mat-card-subtitle>
        </mat-card-title-group>

        <svg *ngIf="committee.mugshot === 'anonymous.png'" fill="#000000" height="200" viewBox="0 0 24 24" width="200" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
        <img class="pol-mug" src="assets/mugs/{{committee.mugshot}}" *ngIf="committee.mugshot !== 'anonymous.png'">

        
        
      </mat-card-header>
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
      
      
      <mat-card-content>
        
        <div class="bio">
          <p>{{committee.bio}}</p>
        </div>
        
        <ul class="toplines">
          <li *ngFor="let crit of redCats">Spent {{ crit.sum | currency : 'USD'}} on {{ crit.category }}</li>
        </ul>
        
        <div *ngIf="committee.expanded" class="data-table-expansion">
          <mat-table [dataSource]="tableData">
            <ng-container matColumnDef="category">
              <mat-header-cell *matHeaderCellDef>Purpose</mat-header-cell>
              <mat-cell *matCellDef="let crit">{{ crit.category }}</mat-cell>
            </ng-container>
            <ng-container matColumnDef="sum">
              <mat-header-cell *matHeaderCellDef>Total spent</mat-header-cell>
              <mat-cell *matCellDef="let crit">{{ crit.sum | currency : 'USD'}}</mat-cell>
            </ng-container>
            <mat-header-row *matHeaderRowDef="['category', 'sum']"></mat-header-row>
            <mat-row *matRowDef="let crit; columns: ['category', 'sum']"></mat-row>
          </mat-table>
          
          <a style="text-decoration: none;" href="assets/disbursements/{{committee.committee_id}}.csv" download>
            <button [color]="'primary'" mat-button class="download-button">
              <mat-icon>file_download</mat-icon>Download all disbursements
            </button>
          </a>
        </div>
        
        <button [color]="'primary'" class="card-action" mat-button (click)="committee.expanded = !committee.expanded">
          <mat-icon *ngIf="committee.expanded">expand_less</mat-icon>
          <mat-icon *ngIf="!committee.expanded">expand_more</mat-icon>
        </button>
        
      </mat-card-content>
    </mat-card>
  `,
  styles: [`           
           .committee-card {
               margin-bottom: 1em;
           }
           .dates {
               max-width: 300px;
               margin-top: -100px !important;
               margin-bottom: 100px !important;
               font-size: 1em;
           }
           .date-span {
               float: right;
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
    this.tableData.data = this.committee.criteria;
  }

}
