import { Committee } from "../models/Committee";
import * as CommActions from "../actions/committee";


export interface State {
  committees: Committee[];
  filteredCommittees: Committee[];
  isLoading: boolean;
}

export const initialState: State = {
  committees: [],
  filteredCommittees: [],
  isLoading: false
};

export function reducer(state = initialState, action: CommActions.CommitteeActions) {
  switch (action.type) {
    case CommActions.LOAD: {
      return {...state, isLoading: true};
    }
    case CommActions.LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        committees: action.payload,
        filteredCommittees: action.payload
      }
    }
    case CommActions.FILTER_COMMITTEES: {
      const filterTerm = action.payload;
      return {
        ...state,
        filteredCommittees: state.committees.filter(comm => {
          for (let tag of comm.tags) {
            if (tag.toLowerCase().includes(filterTerm.toLowerCase())) return true;
          }
          return false
        })
      }
    }
    case CommActions.RESET_FILTER: {
      console.log("Resetting filter");
      return {
        ...state,
        filteredCommittees: state.committees
      }
    }
    default: {
      return state;
    }
  }
}

export const getCommittees = (state: State) => state.committees;
export const getCommitteesLoading = (state: State) => state.isLoading;
export const getFilteredCommittees = (state: State) => state.filteredCommittees;
