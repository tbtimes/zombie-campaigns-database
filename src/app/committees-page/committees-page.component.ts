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
    <mat-progress-spinner *ngIf="(isLoading$ | async); else gizmos"></mat-progress-spinner>
    <ng-template #gizmos>
      <zc-search></zc-search>
      <zc-committee-list *ngIf="(filteredCommittees$ | async)?.length > 0" [committees]="filteredCommittees$ | async"></zc-committee-list>
    </ng-template>
  `,
  styles: []
})
export class CommitteesPageComponent implements OnInit {
  isLoading$: Observable<boolean>;
  filteredCommittees$: Observable<Committee[]>;

  constructor(private store: Store<reducers.State>) {
    this.isLoading$ = store.select(reducers.getCommitteesLoading);
    this.filteredCommittees$ = store.select(reducers.getFilteredCommittees);
  }

  ngOnInit() {
    // Hydrate page
    this.store.dispatch(new CommActions.LoadCommittees())
  }

}
