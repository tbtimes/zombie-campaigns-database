import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from "@ngrx/store";
import * as CommActions from "../actions/committee";
import * as reducers from "../reducers";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/debounceTime";


@Component({
  selector: 'zc-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-form-field class="fullwidth">
      <input (keyup)="keyup(searchVal)" matInput type="text" placeholder="Search" [(ngModel)]="searchVal" />
      <button mat-button *ngIf="searchVal" matSuffix mat-icon-button aria-label="Clear" (click)="searchVal='';reset()">
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
export class SearchComponent implements OnDestroy {
  debouncer: Subject<string> = new Subject();

  constructor(private store: Store<reducers.State>) {
    this.debouncer.debounceTime(300)
      .subscribe(val => this.store.dispatch(new CommActions.FilterCommittees(val)))
  }

  ngOnDestroy() {
    this.debouncer.unsubscribe();
  }

  keyup(val) {
    this.debouncer.next(val);
  }

  reset() {
    this.store.dispatch(new CommActions.ResetFilter());
  }
}
