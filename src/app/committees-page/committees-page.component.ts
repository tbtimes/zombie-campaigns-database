import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as reducers from "../reducers";
import { Observable } from "rxjs/Observable";
import * as CommActions from "../actions/committee";
import { Committee } from "../models/Committee";


@Component({
  selector: 'zc-committees-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-progress-spinner style="margin: 0 auto;" mode="indeterminate" *ngIf="(isLoading$ | async); else gizmos"></mat-progress-spinner>
    <ng-template #gizmos>
      <zc-search [options]="tagOptions$ | async"></zc-search>
      <zc-committee-list *ngIf="(filteredCommittees$ | async)?.length > 0" [committees]="filteredCommittees$ | async"></zc-committee-list>
    </ng-template>
  `,
  styles: []
})
export class CommitteesPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  filteredCommittees$: Observable<Committee[]>;
  tagOptions$: Observable<string[]>;

  constructor(private store: Store<reducers.State>) {
    this.isLoading$ = store.select(reducers.getCommitteesLoading);
    this.filteredCommittees$ = store.select(reducers.getFilteredCommittees);
    this.tagOptions$ = store.select(reducers.getTags);
  }

  ngOnInit() {
    // Hydrate page
    this.store.dispatch(new CommActions.LoadCommittees())
  }

}
