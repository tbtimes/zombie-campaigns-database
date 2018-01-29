import { Committee } from "../models/Committee";
import * as CommActions from "../actions/committee";


export interface State {
  committees: Committee[];
  filteredCommittees: Committee[];
  isLoading: boolean;
  tags: string[]
}

export const initialState: State = {
  committees: [],
  filteredCommittees: [],
  isLoading: false,
  tags: []
};

function stateNameSort(a, b) {
  const aState = a.state_full.toUpperCase();
  const bState = b.state_full.toUpperCase();
  const aName = a.candidate_name.toUpperCase();
  const bName = b.candidate_name.toUpperCase();

  if (aState < bState) return -1;
  if (bState < aState) return 1;
  if (aState === bState) {
    if (aName < bName) return -1;
    if (bName < aName) return 1;
    return 0;
  }
}

export function reducer(state = initialState, action: CommActions.CommitteeActions) {
  switch (action.type) {
    case CommActions.LOAD: {
      return {...state, isLoading: true};
    }
    case CommActions.LOAD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        committees: action.payload.committees.sort(stateNameSort),
        filteredCommittees: action.payload.committees.sort(stateNameSort),
        tags: action.payload.tags
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
        }).sort(stateNameSort)
      }
    }
    case CommActions.RESET_FILTER: {
      return {
        ...state,
        filteredCommittees: state.committees.sort(stateNameSort)
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
export const getTags = (state: State) => state.tags;
