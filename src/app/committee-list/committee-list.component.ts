import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Committee } from "../models/Committee";

@Component({
  selector: 'zc-committee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <zc-committee-card *ngFor="let committee of committees" [committee]="committee"></zc-committee-card>
  `,
  styles: []
})
export class CommitteeListComponent implements OnInit {
  @Input() committees: Committee[];

  constructor() { }

  ngOnInit() {
  }

}
