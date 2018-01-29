import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { forkJoin } from "rxjs/observable/forkJoin";
import { Committee } from "./models/Committee";


@Injectable()
export class CommitteeService {

  constructor(private http: HttpClient) { }

  getCommittees(): Observable<{committees: Committee[], tags: string[]}> {
    return forkJoin([
      this.http.get("assets/all_tags.json"),
      this.http.get("assets/tags_by_comm.json")
    ])
      .map((data: any[])=> {
        return {
          committees: data[1],
          tags: data[0]
        }
      });
  }

}
