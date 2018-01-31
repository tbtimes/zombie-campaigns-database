webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/actions/committee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FILTER_COMMITTEES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RESET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FilterCommittees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ResetFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadCommittees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadCommitteesSuccess; });
var LOAD = "[Committee] Load";
var LOAD_SUCCESS = "[Committee] Load Success";
var FILTER_COMMITTEES = "[Committee] Filter";
var RESET_FILTER = "[Committee] Reset Filter";
var FilterCommittees = (function () {
    function FilterCommittees(payload) {
        this.payload = payload;
        this.type = FILTER_COMMITTEES;
    }
    return FilterCommittees;
}());

var ResetFilter = (function () {
    function ResetFilter() {
        this.type = RESET_FILTER;
    }
    return ResetFilter;
}());

var LoadCommittees = (function () {
    function LoadCommittees() {
        this.type = LOAD;
    }
    return LoadCommittees;
}());

var LoadCommitteesSuccess = (function () {
    function LoadCommitteesSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadCommitteesSuccess;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zc-root',
            template: "\n    <mat-toolbar [color]=\"'primary'\">\n      <a class=\"header-logo-link\" href=\"http://tampabay.com\">\n        <img class=\"header-logo hidden-sm-down\" src=\"http://tampabay.com/projects/assets/tampabaytimes_white.svg\" alt=\"Tampa Bay Times\">\n        <img class=\"header-logo hidden-md-up\" src=\"http://tampabay.com/projects/assets/logo-t.svg\" alt=\"Tampa Bay Times\">\n      </a>\n\n      <a class=\"header-logo-link wtsp\" href=\"http://www.tegna.com/\">\n        <img class=\"header-logo hidden-sm-down\" src=\"assets/tegna-inc-logo.png\" alt=\"Tegna\">\n        <img class=\"header-logo hidden-md-up\" src=\"assets/tegna-inc-logo.png\" alt=\"Tegna\">\n      </a>\n\n      <a class=\"header-logo-link\" href=\"http://www.wtsp.com/\">\n        <img class=\"header-logo hidden-sm-down\" src=\"assets/site-nav-logo@2x.png\" alt=\"WTSP\">\n        <img class=\"header-logo hidden-md-up\" src=\"assets/site-nav-logo@2x.png\" alt=\"WTSP\">\n      </a>\n\n      <!-- This fills the remaining space of the current row -->\n      <span class=\"example-fill-remaining-space\"></span>\n\n      <a style=\"color: inherit\" href=\"..\"><span class=\"link-to-story\"><span class=\"zombie\">Zombie</span> Campaigns</span></a>\n    </mat-toolbar>\n    <label>Interactive database</label>\n    <h1>See how the<br>102 <span class=\"zombie\">\u2018zombie\u2019</span> politicians<br>spent their money</h1>\n    <p class=\"byline\">\n      <span class=\"dateline\">Jan. 31, 2018</span>\n      <span class=\"byline1\">By ELI MURRAY AND CONNIE HUMBURG</span>\n      <br>\n      <span class=\"byline1\">Design by NEIL BEDI</span>\n      <br>\n      <span class=\"byline2\">Times Staff</span>\n    </p>\n\n    <p>Reporters for the <em>Tampa Bay Times</em> and <em>WTSP NewsChannel 10</em> used <a href=\"https://api.open.fec.gov/developers/\" target=\"_blank\">data from the Federal Election Commission</a> to build a database of 102 zombie campaigns \u2014 federal campaigns that were still spending money years after their candidate left office, stopped campaigning, or in some cases, died.</p>\n    <p>You can <a href=\"assets/all_tagged_disbursements.csv\">download all of the data</a> or use this app to browse the zombie campaigns we identified.</p>\n    <p>Our database does not include spending within two years of a politician\u2019s last election or retirement from elected office, assuming the politician is alive. It also does not include spending after Sept. 30, 2017. As a result, the totals listed here may be lower than the sums described in other parts of our coverage.</p>\n    <p><a href=\"..\">Click here</a> to read the story,</p> and <a href=\"../#methodology\"> here for more notes on our methodology.</a></p>\n\n\n    <div class=\"content-well\">\n      <router-outlet></router-outlet>\n    </div>\n    <footer>\n      <p style=\"font-size: .8em\"><em>Politician mugshots in the database were sourced from the <a href=\"http://bioguide.congress.gov/biosearch/biosearch.asp\">Biographical Directory of the United States of Congress</a>.</em></p>\n      <div class=\"copyright\">\n        \u00A92018 All Rights Reserved | <a href=\"//www.tampabay.com\">Tampa&nbsp;Bay&nbsp;Times</a>\n      </div>\n    </footer>\n  ",
            styles: ["\n           .zombie {\n              font-family: Nosifer;\n           }\n           .mat-toolbar {\n              background: url('assets/charcoal2.jpg');\n              overflow: hidden;\n           }\n           .mat-toolbar a {\n              text-decoration: none;\n           }\n           .mat-toolbar img {\n              height: 28px;\n              margin-right: 0.5rem;\n           }\n           .mat-toolbar .hidden-md-up {\n              display: none;\n            }\n            .mat-toolbar .hidden-sm-down {\n              display: inline-block;\n            }\n           @media(max-width: 650px) {\n              .mat-toolbar .hidden-md-up {\n                display: inline-block;\n              }\n              .mat-toolbar .hidden-sm-down {\n                display: none;\n              }\n              .mat-toolbar img {\n                height: 20px;\n              }\n              .link-to-story {\n                font-size: 14px;\n              }\n           }\n           @media(max-width: 430px) {\n              .link-to-story {\n                display: none;\n              }\n           }\n           .content-well {\n               max-width: 700px;\n               margin: 0 auto;\n               margin-top: 4rem;\n           }\n           .example-fill-remaining-space {\n              /* This fills the remaining space, by using flexbox. \n                 Every toolbar row uses a flexbox row layout. */\n              flex: 1 1 auto;\n           }\n           .link-to-story {\n               //font-weight: 300;\n               cursor: pointer;\n               float: right;\n               font-weight: bold;\n               text-transform: uppercase;\n           }\n           label {\n              color: darkgoldenrod;\n              display: block;\n              margin-top: 2rem;\n              font-size: 1.75em;\n              text-align: center;\n              font-family: \"Open Sans Condensed\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n           }\n           h1 {\n              font-family: \"Merriweather\", serif;\n              font-size: calc(2.8vw * (1) + 20px);\n              text-align: center;\n              letter-spacing: -2.2px;\n              max-width: 1000px;\n              margin-top: 0.5rem;\n              margin-left: auto;\n              margin-right: auto;\n              line-height: 1.3;\n            }\n            h1 .zombie {\n              color: darkgoldenrod;\n              text-transform: uppercase;\n            }\n            p {\n              font-family: 'Merriweather', serif;\n              font-weight: normal;\n              font-size: 1.1em;\n              line-height: 1.7;\n              margin: auto;\n              margin-bottom: 1em;\n              max-width: 690px;\n              padding: 0 1rem;\n              color: #373a3c;\n            }\n            .dateline {\n              font-weight: normal;\n              float: right;\n              color: #222;\n              margin-bottom: 0;\n            }\n            .dateline {\n              font-family: 'Open Sans Condensed', sans-serif;\n            }\n            .byline {\n              color: #777;\n              font-family: 'Open Sans Condensed', sans-serif;\n              font-size: 1em;\n              font-weight: bold;\n            }\n            .byline1, .byline2 {\n              clear: both;\n              display: inline-block;\n            }\n            footer {\n              text-align: center;\n              font-family: Merriweather,Georgia,\"Times New Roman\",Times,serif;\n              color: gray;\n              margin: 3rem 1rem 3rem;\n              padding-top: 2rem;\n              border-top: thin solid lightgray;\n            }\n           "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils__ = __webpack_require__("../../../../../src/app/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__effects_committee__ = __webpack_require__("../../../../../src/app/effects/committee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__committees_page_committees_page_component__ = __webpack_require__("../../../../../src/app/committees-page/committees-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__committee_service__ = __webpack_require__("../../../../../src/app/committee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__committee_list_committee_list_component__ = __webpack_require__("../../../../../src/app/committee-list/committee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__committee_card_committee_card_component__ = __webpack_require__("../../../../../src/app/committee-card/committee-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// app plumbing imports




// components/services imports






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__committees_page_committees_page_component__["a" /* CommitteesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__committee_list_committee_list_component__["a" /* CommitteeListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__committee_card_committee_card_component__["a" /* CommitteeCardComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["i" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["c" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__reducers__["f" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_14__reducers__["e" /* metaReducers */] }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__["b" /* StoreRouterConnectingModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_15__effects_committee__["a" /* CommitteeEffects */]])
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_8__ngrx_router_store__["a" /* RouterStateSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_13__utils__["a" /* CustomRouterStateSerializer */] },
                __WEBPACK_IMPORTED_MODULE_18__committee_service__["a" /* CommitteeService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/committee-card/committee-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteeCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommitteeCardComponent = (function () {
    function CommitteeCardComponent() {
    }
    CommitteeCardComponent.prototype.ngOnInit = function () {
        this.redCats = this.committee.criteria.filter(function (x) { return x.color === 'red'; }).sort(function (a, b) { return a.sum > b.sum ? -1 : 1; });
        this.tableData = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatTableDataSource */]();
        this.tableData.data = this.committee.criteria.sort(function (a, b) { return a.sum > b.sum ? -1 : 1; }).slice(0, 3);
    };
    CommitteeCardComponent.prototype.ngOnExpand = function () {
        if (this.committee.expanded) {
            this.tableData.data = this.committee.criteria.sort(function (a, b) { return a.sum > b.sum ? -1 : 1; }).slice(0, 3);
        }
        else {
            this.tableData.data = this.committee.criteria.sort(function (a, b) { return a.sum > b.sum ? -1 : 1; });
        }
        this.committee.expanded = !this.committee.expanded;
    };
    CommitteeCardComponent.prototype.ngOnCollapse = function () {
        this.tableData.data = this.committee.criteria.sort(function (a, b) { return a.sum > b.sum ? -1 : 1; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], CommitteeCardComponent.prototype, "committee", void 0);
    CommitteeCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zc-committee-card',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            //language=Angular2HTML
            template: "\n    <mat-card class=\"committee-card\">\n      <div class=\"mobile-header\">\n          <mat-card-title>{{ committee.candidate_name }}</mat-card-title>\n          <mat-card-subtitle><span class=\"sub\">{{ committee.committee_name }}</span> <span class=\"sf sf-{{ committee.state_full.replace(' ', '-') | lowercase }}\">{{ committee.state_full }}</span></mat-card-subtitle>\n      </div>\n      <div class=\"mat-card-side\">\n        <svg *ngIf=\"committee.mugshot === 'anonymous.png'\" x=\"0px\" y=\"0px\" width=\"175px\" height=\"175px\"\n           viewBox=\"0 0 48 48\" style=\"enable-background:new 0 0 48 48;\" xml:space=\"preserve\">\n        <style type=\"text/css\">\n          .st0{fill:#333333;}\n          .st1{fill:none;}\n        </style>\n        <path style=\"opacity: .7;\" class=\"st0\" d=\"M0,5.3v37.3C0,45.6,2.4,48,5.3,48h37.3c2.9,0,5.3-2.4,5.3-5.3V5.3C48,2.4,45.6,0,42.7,0H5.3C2.4,0,0,2.4,0,5.3z\n           M32,16c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S32,11.6,32,16z M8,37.3c0-5.3,10.7-8.3,16-8.3s16,2.9,16,8.3V40H8V37.3z\"/>\n        <path class=\"st1\" d=\"M0,0h48v48H0V0z\"/>\n        </svg>\n\n        <img class=\"pol-mug\" src=\"assets/mugs/{{committee.mugshot}}\" *ngIf=\"committee.mugshot !== 'anonymous.png'\">\n        <div class=\"dates\">\n          <div *ngIf=\"committee.date_left_office\">\n            <div>Left office: <span class=\"date-span\">{{committee.date_left_office | date : 'MM/dd/yyyy'}}</span></div>\n          </div>\n          <div *ngIf=\"committee.date_last_election\">\n            <div>Last election: <span class=\"date-span\">{{committee.date_last_election | date : 'MM/dd/yyyy'}}</span></div>\n          </div>\n          <div *ngIf=\"committee.date_dead\">\n            <div>Died: <span class=\"date-span\">{{committee.date_dead | date : 'MM/dd/yyyy'}}</span></div>\n          </div>\n        </div>\n      </div>\n      \n      \n      <mat-card-content>\n        <mat-card-title-group style=\"width: 100%;\">\n          <mat-card-title>{{ committee.candidate_name }}</mat-card-title>\n          <mat-card-subtitle><span class=\"sub\">{{ committee.committee_name }}</span> <span class=\"sf sf-{{ committee.state_full.replace(' ', '-') | lowercase }}\">{{ committee.state_full }}</span></mat-card-subtitle>\n          \n        </mat-card-title-group>\n        <div class=\"bio\">\n          <p>{{ committee.bio }}</p>\n          <p>{{ committee.template_sentence }}</p>\n        </div>\n        <div class=\"pol-reax\" *ngIf=\"committee.reax\">\n          <h2>In response to findings:</h2>\n          {{ committee.reax }}\n        </div>\n        \n        <!--<ul class=\"toplines\">-->\n          <!--<li *ngFor=\"let crit of redCats\">Spent {{ crit.sum | currency : 'USD'}} on {{ crit.category }}</li>-->\n        <!--</ul>-->\n        \n        <div class=\"data-table-expansion\">\n          <mat-table [dataSource]=\"tableData\">\n            <ng-container matColumnDef=\"category\">\n              <mat-header-cell *matHeaderCellDef>Type of spending</mat-header-cell>\n              <mat-cell *matCellDef=\"let crit\">{{ crit.category }}</mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"sum\">\n              <mat-header-cell *matHeaderCellDef>Total spent</mat-header-cell>\n              <mat-cell *matCellDef=\"let crit\">{{ crit.sum | currency : 'USD' : 'symbol' : '1.0-0' }}</mat-cell>\n            </ng-container>\n            <mat-header-row *matHeaderRowDef=\"['category', 'sum']\"></mat-header-row>\n            <mat-row [ngClass]=\"{'highlight': crit.color === 'red'}\" *matRowDef=\"let crit; columns: ['category', 'sum']\"></mat-row>\n          </mat-table>\n\n          <button *ngIf=\"committee.criteria.length > 3\" [color]=\"'primary'\" class=\"card-action\" mat-button (click)=\"ngOnExpand()\">\n            Expand to see all spending\n            <mat-icon *ngIf=\"committee.expanded\">expand_less</mat-icon>\n            <mat-icon *ngIf=\"!committee.expanded\">expand_more</mat-icon>\n          </button>\n          \n          <a style=\"text-decoration: none;\" href=\"assets/disbursements/{{committee.committee_id}}.csv\" download>\n            <button style=\"margin-top:1rem;\" [color]=\"'primary'\" mat-button class=\"download-button\">\n              Download all disbursements <mat-icon>file_download</mat-icon>\n            </button>\n          </a>\n        </div>\n        \n        \n        \n      </mat-card-content>\n    </mat-card>\n  ",
            styles: ["\n           .highlight {\n               background-color: wheat;\n           }\n           .committee-card, .mat-form-field {\n              margin: 0 0.5rem;\n              margin-bottom: 1em;\n           }\n           .mobile-header {\n              display: none;\n           }\n           .mat-card-side, mat-card-content {\n              vertical-align: top;\n              line-height: 1.5;\n           }\n           .mat-card-title-group {\n              margin: 0;\n              display: block;\n           }\n           .mat-card-subtitle span.sub {\n              margin-right: 0.5rem;\n           }\n           .mat-card-subtitle span.sf{\n              border-radius: 3px;\n              background-color: darkgoldenrod;\n              color: white;\n              padding: 0.1rem 0.3rem;\n              white-space: nowrap;\n           }\n           .dates {\n              font-size: 0.95rem;\n           }\n           .dates div {\n              margin-top: 0.5rem;\n           }\n           .mat-card-side {\n              display: inline-block;\n              width: 200px;\n           }\n           .mat-card-side img {\n              width: 175px;\n              height: auto;\n              text-align: center;\n           }\n           mat-card-content {\n              display: inline-block;\n              width: 430px;\n           }\n           .pol-reax h2 {\n              font-size: 1.2rem;\n              font-style: italic;\n              margin-bottom: 0.5rem;\n           }\n           @media (max-width: 720px) {\n              .mat-card-subtitle span.sub {\n                  display: block;\n                  margin-bottom: 1rem;\n              }\n              .mat-card-subtitle span.sf {\n                  padding: 0.3rem 0.5rem;\n              }\n              .mobile-header {\n                  display: block;\n                  text-align: center;\n              }\n              mat-card-content mat-card-title-group {\n                  display: none;\n              }\n              mat-card-content {\n                  display: block;\n                  width: 100%;\n              }\n              .mat-card-side {\n                  display: block;\n                  width: 100%;\n                  text-align: center;\n              }\n           }\n           .card-action {\n               margin: 0 auto; \n               display: block;\n           }\n           .download-button {\n               display: block;\n               margin: 5px auto;\n           }\n           .pol-mug {\n               height: 200px;\n               width: auto;\n           }\n           "]
        }),
        __metadata("design:paramtypes", [])
    ], CommitteeCardComponent);
    return CommitteeCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/committee-list/committee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommitteeListComponent = (function () {
    function CommitteeListComponent() {
    }
    CommitteeListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CommitteeListComponent.prototype, "committees", void 0);
    CommitteeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zc-committee-list',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <zc-committee-card *ngFor=\"let committee of committees\" [committee]=\"committee\"></zc-committee-card>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], CommitteeListComponent);
    return CommitteeListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/committee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitteeService = (function () {
    function CommitteeService(http) {
        this.http = http;
    }
    CommitteeService.prototype.getCommittees = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["a" /* forkJoin */])([
            this.http.get("assets/all_tags.json"),
            this.http.get("assets/tags_by_comm.json")
        ])
            .map(function (data) {
            return {
                committees: data[1],
                tags: data[0]
            };
        });
    };
    CommitteeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CommitteeService);
    return CommitteeService;
}());



/***/ }),

/***/ "../../../../../src/app/committees-page/committees-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteesPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_committee__ = __webpack_require__("../../../../../src/app/actions/committee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommitteesPageComponent = (function () {
    function CommitteesPageComponent(store) {
        this.store = store;
        this.isLoading$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getCommitteesLoading */]);
        this.filteredCommittees$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getFilteredCommittees */]);
        this.tagOptions$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["d" /* getTags */]);
    }
    CommitteesPageComponent.prototype.ngOnInit = function () {
        // Hydrate page
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_committee__["e" /* LoadCommittees */]());
    };
    CommitteesPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zc-committees-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "\n    <mat-progress-spinner style=\"margin: 0 auto;\" mode=\"indeterminate\" *ngIf=\"(isLoading$ | async); else gizmos\"></mat-progress-spinner>\n    <ng-template #gizmos>\n      <zc-search [options]=\"tagOptions$ | async\"></zc-search>\n      <zc-committee-list *ngIf=\"(filteredCommittees$ | async)?.length > 0\" [committees]=\"filteredCommittees$ | async\"></zc-committee-list>\n    </ng-template>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]])
    ], CommitteesPageComponent);
    return CommitteesPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/effects/committee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommitteeEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_committee__ = __webpack_require__("../../../../../src/app/actions/committee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__committee_service__ = __webpack_require__("../../../../../src/app/committee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CommitteeEffects = (function () {
    function CommitteeEffects(actions$, committeeService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.committeeService = committeeService;
        this.store = store;
        this.loadCommittees$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_8__actions_committee__["c" /* LOAD */])
            .switchMap(function (_) {
            return _this.committeeService.getCommittees()
                .map(function (_a) {
                var committees = _a.committees, tags = _a.tags;
                return new __WEBPACK_IMPORTED_MODULE_8__actions_committee__["f" /* LoadCommitteesSuccess */]({ committees: committees, tags: tags });
            })
                .catch(function () { return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_of__["a" /* of */])(new __WEBPACK_IMPORTED_MODULE_8__actions_committee__["f" /* LoadCommitteesSuccess */]({ committees: [], tags: [] })); });
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */])
    ], CommitteeEffects.prototype, "loadCommittees$", void 0);
    CommitteeEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_9__committee_service__["a" /* CommitteeService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]])
    ], CommitteeEffects);
    return CommitteeEffects;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/committee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["e"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommittees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCommitteesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFilteredCommittees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_committee__ = __webpack_require__("../../../../../src/app/actions/committee.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    committees: [],
    filteredCommittees: [],
    isLoading: false,
    tags: []
};
function stateNameSort(a, b) {
    var aState = a.state_full.toUpperCase();
    var bState = b.state_full.toUpperCase();
    var aName = a.candidate_name.toUpperCase();
    var bName = b.candidate_name.toUpperCase();
    if (aState < bState)
        return -1;
    if (bState < aState)
        return 1;
    if (aState === bState) {
        if (aName < bName)
            return -1;
        if (bName < aName)
            return 1;
        return 0;
    }
}
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_committee__["c" /* LOAD */]: {
            return __assign({}, state, { isLoading: true });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_committee__["d" /* LOAD_SUCCESS */]: {
            return __assign({}, state, { isLoading: false, committees: action.payload.committees.sort(stateNameSort), filteredCommittees: action.payload.committees.sort(stateNameSort), tags: action.payload.tags });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_committee__["a" /* FILTER_COMMITTEES */]: {
            var filterTerm_1 = action.payload;
            return __assign({}, state, { filteredCommittees: state.committees.filter(function (comm) {
                    for (var _i = 0, _a = comm.tags; _i < _a.length; _i++) {
                        var tag = _a[_i];
                        if (tag.toLowerCase().includes(filterTerm_1.toLowerCase()))
                            return true;
                    }
                    return false;
                }).sort(stateNameSort) });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_committee__["g" /* RESET_FILTER */]: {
            return __assign({}, state, { filteredCommittees: state.committees.sort(stateNameSort) });
        }
        default: {
            return state;
        }
    }
}
var getCommittees = function (state) { return state.committees; };
var getCommitteesLoading = function (state) { return state.isLoading; };
var getFilteredCommittees = function (state) { return state.filteredCommittees; };
var getTags = function (state) { return state.tags; };


/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return metaReducers; });
/* unused harmony export getRouterState */
/* unused harmony export getRouterParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRouterSearchParam; });
/* unused harmony export getCommitteesState */
/* unused harmony export getCommittees */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCommitteesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFilteredCommittees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getTags; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__committee__ = __webpack_require__("../../../../../src/app/reducers/committee.ts");




var reducers = {
    routerReducer: __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["c" /* routerReducer */],
    committees: __WEBPACK_IMPORTED_MODULE_3__committee__["e" /* reducer */]
};
function logger(reducer) {
    return function (state, action) {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
    };
}
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production ? [logger] : [];
// Router selectors
var getRouterState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])("routerReducer");
var getRouterParams = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getRouterState, function (state) { return state.state.queryParams; });
var getRouterSearchParam = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getRouterParams, function (state) { return state.search; });
// Committee selectors
var getCommitteesState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["e" /* createFeatureSelector */])("committees");
var getCommittees = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCommitteesState, __WEBPACK_IMPORTED_MODULE_3__committee__["a" /* getCommittees */]);
var getCommitteesLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCommitteesState, __WEBPACK_IMPORTED_MODULE_3__committee__["b" /* getCommitteesLoading */]);
var getFilteredCommittees = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCommitteesState, __WEBPACK_IMPORTED_MODULE_3__committee__["c" /* getFilteredCommittees */]);
var getTags = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["f" /* createSelector */])(getCommitteesState, __WEBPACK_IMPORTED_MODULE_3__committee__["d" /* getTags */]);


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__committees_page_committees_page_component__ = __webpack_require__("../../../../../src/app/committees-page/committees-page.component.ts");

var routes = [
    {
        path: "", component: __WEBPACK_IMPORTED_MODULE_0__committees_page_committees_page_component__["a" /* CommitteesPageComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_committee__ = __webpack_require__("../../../../../src/app/actions/committee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__ = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__ = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchComponent = (function () {
    function SearchComponent(store, router) {
        var _this = this;
        this.store = store;
        this.router = router;
        this.debouncer = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormControl */]();
        this.debouncer.debounceTime(300)
            .subscribe(function (val) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_committee__["b" /* FilterCommittees */](val));
            _this.router.navigate(["."], { queryParams: { search: val || undefined } });
        });
        // this.searchControl.valueChanges.subscribe(this.debouncer);
    }
    SearchComponent.prototype.ngOnDestroy = function () {
        this.debouncer.unsubscribe();
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges.subscribe(this.debouncer);
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["c" /* getRouterSearchParam */]).subscribe(function (term) {
            _this.searchVal = term;
            if (term) {
                _this.searchControl.setValue(term, { emitEvent: true });
            }
        }).unsubscribe();
        this.filteredOptions = this.searchControl.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_operators_startWith__["a" /* startWith */])(""), Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_map__["a" /* map */])(function (val) { return _this.filter(val); }));
    };
    SearchComponent.prototype.keyup = function (val) {
        this.debouncer.next(val);
    };
    SearchComponent.prototype.filter = function (val) {
        return this.options.filter(function (option) { return option.toLowerCase().indexOf(val.toLowerCase()) > -1; });
    };
    SearchComponent.prototype.reset = function () {
        this.searchControl.reset("");
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_committee__["h" /* ResetFilter */]());
        this.router.navigate(['.'], { queryParams: { search: undefined } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], SearchComponent.prototype, "options", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zc-search',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: "    \n    <mat-form-field class=\"fullwidth\">\n      <input type=\"text\" placeholder=\"Search by state, name, or spending category\" matInput [formControl]=\"searchControl\" [matAutocomplete]=\"auto\">\n      <button [color]=\"'warn'\" *ngIf=\"searchControl.value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"reset()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </mat-form-field>\n    \n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{ option }}\n      </mat-option>\n    </mat-autocomplete>\n  ",
            styles: ["\n           .fullwidth {\n               display: block;\n               margin: 1em 0.5rem;\n           }\n           .mat-form-field-infix {\n              max-width: 100%;\n           }\n           "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRouterStateSerializer; });
var CustomRouterStateSerializer = (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var url = routerState.url;
        var queryParams = routerState.root.queryParams;
        var params = routerState.root.firstChild.params;
        return { url: url, queryParams: queryParams, params: params };
    };
    return CustomRouterStateSerializer;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map