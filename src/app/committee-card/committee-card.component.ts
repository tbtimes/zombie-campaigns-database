import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Committee } from "../models/Committee";


@Component({
  selector: 'zc-committee-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card style="margin-bottom: 1em;">
      <mat-card-header>{{ committee.candidate_name }}</mat-card-header>
    </mat-card>
  `,
  styles: []
})
export class CommitteeCardComponent implements OnInit {
  @Input() committee: Committee;

  constructor() { }

  ngOnInit() {
  }

}
