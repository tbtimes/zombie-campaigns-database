import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action, Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import * as CommitteeActions from "../actions/committee";
import * as rootReducer from "../reducers";
import { Committee } from "../models/Committee";
import { CommitteeService } from "../committee.service";


@Injectable()
export class CommitteeEffects {
  constructor(private actions$: Actions, private committeeService: CommitteeService, private store: Store<rootReducer.State>) {}

  @Effect()
  loadCommittees$: Observable<Action> = this.actions$
    .ofType<CommitteeActions.LoadCommittees>(CommitteeActions.LOAD)
    .switchMap(_ => {
      return this.committeeService.getCommittees()
        .map(({committees, tags})=> new CommitteeActions.LoadCommitteesSuccess({committees, tags}))
        .catch(() => of(new CommitteeActions.LoadCommitteesSuccess({committees: [], tags: []})))
    })
}
