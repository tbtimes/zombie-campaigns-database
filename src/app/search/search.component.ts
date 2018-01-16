import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as CommActions from "../actions/committee";
import * as reducers from "../reducers";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { startWith } from "rxjs/operators/startWith";
import { map } from "rxjs/operators/map";


@Component({
  selector: 'zc-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `    
    <mat-form-field class="fullwidth">
      <input type="text" placeholder="search" matInput [formControl]="searchControl" [matAutocomplete]="auto">
      <button [color]="'warn'" *ngIf="searchControl.value" matSuffix mat-icon-button aria-label="Clear" (click)="reset()">
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
    
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{ option }}
      </mat-option>
    </mat-autocomplete>
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

  @Input() options: string[];
  filteredOptions: Observable<string[]>;
  searchControl: FormControl = new FormControl();

  constructor(private store: Store<reducers.State>, private router: Router) {
    this.debouncer.debounceTime(300)
      .subscribe(val => {
        this.store.dispatch(new CommActions.FilterCommittees(val));
        this.router.navigate(["."], {queryParams: {search: val || undefined}});
      });
    // this.searchControl.valueChanges.subscribe(this.debouncer);
  }

  ngOnDestroy() {
    this.debouncer.unsubscribe();
  }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(this.debouncer);
    this.store.select(reducers.getRouterSearchParam).subscribe(term => {
      this.searchVal = term;
      if (term) {
        this.searchControl.setValue(term, {emitEvent: true});
      }
    }).unsubscribe();
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(""),
        map(val => this.filter(val))
      );

  }

  keyup(val) {
    this.debouncer.next(val);
  }

  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) > -1)
  }

  reset() {
    this.searchControl.reset("");
    this.store.dispatch(new CommActions.ResetFilter());
    this.router.navigate(['.'], {queryParams: {search: undefined}})
  }
}
