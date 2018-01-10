import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as CommActions from "../actions/committee";
import * as reducers from "../reducers";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";
import { Router } from "@angular/router";


@Component({
  selector: 'zc-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-form-field class="fullwidth">
      <input (keyup)="keyup(searchVal)" matInput type="text" placeholder="Search" [(ngModel)]="searchVal" />
      <button [color]="'accent'" *ngIf="searchVal" matSuffix mat-icon-button aria-label="Clear" (click)="searchVal='';reset()">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styles: [`
           .fullwidth {
               width: 100%;
           }
           `]
})
export class SearchComponent implements OnDestroy, OnInit {
  searchVal: string;
  debouncer: Subject<string> = new Subject();

  constructor(private store: Store<reducers.State>, private router: Router) {
    this.debouncer.debounceTime(300)
      .subscribe(val => {
        this.store.dispatch(new CommActions.FilterCommittees(val));
        this.router.navigate(["."], {queryParams: {search: val || undefined}});
      })
  }

  ngOnDestroy() {
    this.debouncer.unsubscribe();
  }

  ngOnInit() {
    this.store.select(reducers.getRouterSearchParam).subscribe(term => {
      this.searchVal = term;
      if (term) {
        this.keyup(term);
      }
    }).unsubscribe()
  }

  keyup(val) {
    this.debouncer.next(val);
  }

  reset() {
    this.store.dispatch(new CommActions.ResetFilter());
    this.router.navigate(['.'], {queryParams: {search: undefined}})
  }
}
