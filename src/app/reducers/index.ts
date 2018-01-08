import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { RouterStateUrl } from "../utils";

import * as fromRouter from "@ngrx/router-store";


export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer
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
export const getRouterParams = createSelector(getRouterState, (state) => state.state.params);
