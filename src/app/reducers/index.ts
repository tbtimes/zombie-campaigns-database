import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { RouterStateUrl } from "../utils";

import * as fromRouter from "@ngrx/router-store";
import * as fromComm from "./committee";


export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  committees: fromComm.State;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  committees: fromComm.reducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log("state", state);
    console.log("action", action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

// Router selectors
export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>("routerReducer");
export const getRouterParams = createSelector(getRouterState, (state) => state.state.queryParams);
export const getRouterSearchParam = createSelector(getRouterParams, (state) => state.search);

// Committee selectors
export const getCommitteesState = createFeatureSelector<fromComm.State>("committees");
export const getCommittees = createSelector(getCommitteesState, fromComm.getCommittees);
export const getCommitteesLoading = createSelector(getCommitteesState, fromComm.getCommitteesLoading);
export const getFilteredCommittees = createSelector(getCommitteesState, fromComm.getFilteredCommittees);
export const getTags = createSelector(getCommitteesState, fromComm.getTags);