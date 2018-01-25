import { Action } from "@ngrx/store";
import { Committee } from "../models/Committee";


export const LOAD = "[Committee] Load";
export const LOAD_SUCCESS = "[Committee] Load Success";
export const FILTER_COMMITTEES = "[Committee] Filter";
export const RESET_FILTER = "[Committee] Reset Filter";


export class FilterCommittees implements Action {
  readonly type = FILTER_COMMITTEES;
  constructor(public payload: string) {}
}

export class ResetFilter implements Action {
  readonly type = RESET_FILTER;
  constructor() {}
}

export class LoadCommittees implements Action {
  readonly type = LOAD;
  constructor() {}
}

export class LoadCommitteesSuccess implements Action {
  readonly type = LOAD_SUCCESS;
  constructor(public payload: {committees: Committee[], tags: string[]}) {}
}

export type CommitteeActions = LoadCommittees
  | LoadCommitteesSuccess
  | ResetFilter
  | FilterCommittees
