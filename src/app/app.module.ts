import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterStateSerializer, StoreRouterConnectingModule } from "@ngrx/router-store";
import {
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTableModule,
  MatAutocompleteModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import "hammerjs";


// app plumbing imports
import { routes } from "./routes";
import { CustomRouterStateSerializer } from "./utils";
import { reducers, metaReducers } from "./reducers";
import { CommitteeEffects } from "./effects/committee";


// components/services imports
import { AppComponent } from './app.component';
import { CommitteesPageComponent } from './committees-page/committees-page.component';
import { CommitteeService } from "./committee.service";
import { CommitteeListComponent } from './committee-list/committee-list.component';
import { CommitteeCardComponent } from './committee-card/committee-card.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    CommitteesPageComponent,
    CommitteeListComponent,
    CommitteeCardComponent,
    SearchComponent
  ],
  imports: [
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,

    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    RouterModule.forRoot(routes, {useHash: true}),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([CommitteeEffects])
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    CommitteeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
