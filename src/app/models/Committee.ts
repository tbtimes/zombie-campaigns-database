import { Criteria } from "./Criteria";


export interface Committee {
  date_notes: string;
  date_left_office: string;
  date_dead: string;
  date_last_election: string;
  template_sentence: string;
  reax: string;
  state_full: string;
  office_state: string;
  candidate_name: string;
  committee_name: string;
  committee_id: string;
  criteria: Criteria[];
  expanded: boolean;
  tags: string[];
  bio: string;
  mugshot: string;
}