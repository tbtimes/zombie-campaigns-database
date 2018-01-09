import { Injectable } from '@angular/core';
import committees from "./dataStub";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { Committee } from "./models/Committee";


@Injectable()
export class CommitteeService {

  constructor() { }

  getCommittees(): Observable<Committee[]> {
    return of(<any>committees);
  }

}
