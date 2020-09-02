(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-intro-intro-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/intro/containers/intro/intro.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/intro/containers/intro/intro.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth\n>\n    <div class=\"container-fluid d-flex \">\n        <div class=\"row justify-content-center flex-grow-1\">\n            <div class=\"col-12 d-flex\">\n                <div class=\"card shadow-lg border-0 rounded-lg my-5 flex-grow-1 p-5\">\n                    <ngb-carousel #onboardingCarousel [interval]=\"0\" [showNavigationArrows]=\"false\"\n                                  [showNavigationIndicators]=\"true\" class=\"flex-grow-1\">\n                        <ng-template ngbSlide>\n                            <div class=\"card-body\">\n                                <div class=\"container\" style=\"max-width: 600px;\">\n                                    <h1>Hallo!</h1>\n                                    <p class=\"font-weight-normal\" style=\"font-size: 30px\">Für das bestmögliche\n                                        Erlebnis, beantworte uns ein paar Fragen zu deinem Verein. So können wir dich\n                                        und deine Bedürfnisse besser verstehen.</p>\n                                    <span (click)=\"next()\"\n                                          class=\"btn btn-lg btn-primary\">Starten</span>\n                                </div>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <div class=\"card-body\">\n                                <div class=\"container\">\n                                    <form class=\"form-inline\">\n                                        <span class=\"text-break col-form-label font-weight-normal\"\n                                              style=\"font-size: 30px; line-height: 2.5\">Unser\n                                            Verein heißt <input\n                                                (ngModelChange)=\"updateName()\"\n                                                [(ngModel)]=\"model.name\"\n                                                [ngbTypeahead]=\"search\" autofocus=\"autofocus\"\n                                                class=\"d-inline form-control mx-1 py-0 h-auto\"\n                                                id=\"typeahead-basic\"\n                                                name=\"clubname\"\n                                                placeholder=\"Namen eingeben\"\n                                                style=\"font-size: 30px; max-width: 250px; margin-top: -5px\"\n                                                type=\"text\"/>.\n                                            <br>\n                                            Wir spielen <select\n                                                [(ngModel)]=\"model.category\" class=\"p-1 form-control btn btn-outline-primary\"\n                                                name=\"category\"\n                                                style=\"font-size: 30px;\">\n                                                <option value=\"\">Bitte wählen</option>\n                                                <option value=\"football\">Fußball</option>\n                                                <option value=\"handball\">Handball</option>\n                                                <option value=\"basketball\">Basketball</option>\n                                                <option value=\"ice-hockey\">Ice-Hockey</option>\n                                                <option value=\"hockey\">Hockey</option>\n                                                <option value=\"volleyball\">Volleyball</option>\n                                                <option value=\"other\">Anderes</option>\n                                            </select> in der <select [(ngModel)]=\"model.ligue\" class=\"p-1 form-control btn btn-outline-primary\"\n                                                                     name=\"ligue\"\n                                                                     style=\"font-size: 30px;\">\n                                                <option value=\"\">Bitte wählen</option>\n                                                <option value=\"1\">1. Liga</option>\n                                                <option value=\"2\">2. Liga</option>\n                                                <option value=\"3\">3. Liga</option>\n                                                <option value=\"4\">4. Liga</option>\n                                                <option value=\"5\">5. Liga</option>\n                                                <option value=\"-1\">Anderes</option>\n                                            </select><br>\n                                            Wir verkaufen:\n                                        </span>\n                                    </form>\n                                    <div class=\"ml-3 mb-4\" style=\"font-size: 30px\">\n                                        <div class=\"form-group\">\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input class=\"custom-control-input\" id=\"customCheck1\" type=\"checkbox\">\n                                                <label class=\"custom-control-label\" for=\"customCheck1\">Tickets</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input class=\"custom-control-input\" id=\"customCheck2\" type=\"checkbox\">\n                                                <label class=\"custom-control-label\"\n                                                       for=\"customCheck2\">Merchandise</label>\n                                            </div>\n                                        </div>\n                                        <div class=\"form-group\">\n\n                                            <div class=\"custom-control custom-checkbox\">\n                                                <input class=\"custom-control-input\" id=\"customCheck3\" type=\"checkbox\">\n                                                <label class=\"custom-control-label\" for=\"customCheck3\">Catering</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <span (click)=\"next()\"\n                                          class=\"btn btn-lg btn-primary\">Weiter</span>\n                                </div>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <div class=\"card-body\">\n                                <div class=\"container\">\n                                    <span style=\"font-size: 30px; line-height: 2.5\">\n                                        Man erreicht uns hier:\n                                    </span>\n                                    <form>\n                                        <div class=\"form-group\">\n                                            <div class=\"input-group mb-3\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">Website</span>\n                                                </div>\n                                                <input [(ngModel)]=\"model.homepage\" aria-describedby=\"basic-addon1\" aria-label=\"Username\"\n                                                       class=\"form-control\" name=\"website\"\n                                                       placeholder=\"https://example.de\" type=\"text\">\n                                            </div>\n                                            <div class=\"input-group mb-3\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">Facebook</span>\n                                                </div>\n                                                <input [(ngModel)]=\"model.facebook\" aria-describedby=\"basic-addon1\"\n                                                       aria-label=\"Username\" class=\"form-control\"\n                                                       name=\"facebook\"\n                                                       placeholder=\"Facebook-Link oder Name\" type=\"text\">\n                                            </div>\n                                            <div class=\"input-group mb-3\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">Instagram</span>\n                                                </div>\n                                                <input [(ngModel)]=\"model.instagram\" aria-describedby=\"basic-addon1\"\n                                                       aria-label=\"Username\" class=\"form-control\"\n                                                       name=\"instagram\"\n                                                       placeholder=\"Instagram-Link oder Name\" type=\"text\">\n                                            </div>\n                                            <div class=\"input-group mb-3\">\n                                                <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">Twitter</span>\n                                                </div>\n                                                <input [(ngModel)]=\"model.twitter\" aria-describedby=\"basic-addon1\"\n                                                       aria-label=\"Username\" class=\"form-control\"\n                                                       name=\"twitter\"\n                                                       placeholder=\"Twitter-Link oder Name\" type=\"text\">\n                                            </div>\n                                        </div>\n                                    </form>\n                                    <a class=\"btn btn-block btn-primary\" routerLink=\"/account/login\">Registrierung\n                                        abschließen</a>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-auth\n>\n");

/***/ }),

/***/ "./src/app/modules/intro/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/intro/components/index.ts ***!
  \***************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/app/modules/intro/containers/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/intro/containers/index.ts ***!
  \***************************************************/
/*! exports provided: containers, IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/modules/intro/containers/intro/intro.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return _intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"]; });



const containers = [_intro_intro_component__WEBPACK_IMPORTED_MODULE_1__["IntroComponent"]];



/***/ }),

/***/ "./src/app/modules/intro/containers/intro/intro.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/modules/intro/containers/intro/intro.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\ninput.d-inline {\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #6c757d;\n  box-shadow: none;\n  border-radius: 0;\n}\n\ninput[type=text]:focus,\nselect.form-control:focus {\n  box-shadow: none;\n}\n\ninput[type=checkbox] {\n  margin-top: 12px;\n  height: 40px;\n  width: 40px;\n}\n\n.custom-control-label::before {\n  height: 40px;\n  width: 40px;\n}\n\n.custom-control-label {\n  padding-left: 40px;\n}\n\n.custom-control-label::after {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL2ludHJvL2NvbnRhaW5lcnMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvaW50cm8vY29udGFpbmVycy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7O0VBR0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaW50cm8vY29udGFpbmVycy9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMnO1xuXG5zZWxlY3Qge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQuZC1pbmxpbmUge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlY29uZGFyeTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbnNlbGVjdC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xufVxuXG4iLCJzZWxlY3Qge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuaW5wdXQuZC1pbmxpbmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzZjNzU3ZDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxuc2VsZWN0LmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/intro/containers/intro/intro.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/intro/containers/intro/intro.component.ts ***!
  \*******************************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



let IntroComponent = class IntroComponent {
    constructor() {
        this.clubs = [{
                name: 'Bonner SC',
                category: 'football',
                ligue: 4,
                spectators: null,
                homepage: 'https://www.bonner-sc.de/',
                facebook: 'https://www.facebook.com/BonnerSC',
                instagram: 'https://www.instagram.com/bonner__sc/',
                twitter: 'https://twitter.com/bonner_sc/',
            }];
        this.model = {
            name: '',
            category: '',
            ligue: '',
            spectators: 0,
            homepage: '',
            facebook: '',
            instagram: '',
            twitter: '',
        };
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(term => {
            return term.length < 1 ? []
                : (this.clubs.map(c => c.name)).filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10);
        }));
        this.imgCarousel = null;
    }
    updateName() {
        const clubCandidate = this.clubs.find(x => x.name === this.model.name);
        if (clubCandidate) {
            this.model = clubCandidate;
        }
    }
    next() {
        var _a;
        (_a = this.imgCarousel) === null || _a === void 0 ? void 0 : _a.next();
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('onboardingCarousel'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IntroComponent.prototype, "imgCarousel", void 0);
IntroComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-intro',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./intro.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/intro/containers/intro/intro.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./intro.component.scss */ "./src/app/modules/intro/containers/intro/intro.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IntroComponent);



/***/ }),

/***/ "./src/app/modules/intro/guards/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/intro/guards/index.ts ***!
  \***********************************************/
/*! exports provided: guards, IntroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _intro_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intro.guard */ "./src/app/modules/intro/guards/intro.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntroGuard", function() { return _intro_guard__WEBPACK_IMPORTED_MODULE_1__["IntroGuard"]; });



const guards = [_intro_guard__WEBPACK_IMPORTED_MODULE_1__["IntroGuard"]];



/***/ }),

/***/ "./src/app/modules/intro/guards/intro.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/intro/guards/intro.guard.ts ***!
  \*****************************************************/
/*! exports provided: IntroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroGuard", function() { return IntroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let IntroGuard = class IntroGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
IntroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IntroGuard);



/***/ }),

/***/ "./src/app/modules/intro/intro-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/intro/intro-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, IntroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroRoutingModule", function() { return IntroRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/modules/intro/containers/index.ts");
/* harmony import */ var _intro_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./intro.module */ "./src/app/modules/intro/intro.module.ts");





/* Module */
/* Containers */
/* Guards */
/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"],
        data: {
            title: 'Registrieren - MyClapp Manager',
        },
    },
];
let IntroRoutingModule = class IntroRoutingModule {
};
IntroRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_intro_module__WEBPACK_IMPORTED_MODULE_4__["IntroModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroRoutingModule);



/***/ }),

/***/ "./src/app/modules/intro/intro.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/intro/intro.module.ts ***!
  \***********************************************/
/*! exports provided: IntroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/modules/intro/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/modules/intro/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "./src/app/modules/intro/guards/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

let IntroModule = class IntroModule {
};
IntroModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._guards__WEBPACK_IMPORTED_MODULE_9__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], IntroModule);



/***/ })

}]);
//# sourceMappingURL=app-modules-intro-intro-routing-module-es2015.js.map