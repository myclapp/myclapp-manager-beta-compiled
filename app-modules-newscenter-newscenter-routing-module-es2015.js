(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-newscenter-newscenter-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head\n        [hideBreadcrumbs]=\"true\"\n        title=\"Newscenter\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie Ihre Social Media Daten pflegen. Die Daten werden dann von MyClapp in Content Felder der mobilen Applikation übersetzt\n            und sind somit für die Fans einfach über die App erreichbar.\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"col-12 card shadow\">\n            <div class=\"card-body\">\n                <sb-loading-indicator-overlay [_loadingStatus]=\"_initialStatus$\"></sb-loading-indicator-overlay>\n                <div>\n                    <h4><b> Socialmedia Daten von {{this.userService.club_name}}</b></h4>\n                </div>\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"_form\">\n                    <div *ngFor=\"let formEl of formLayout\" class=\"form-group\">\n                        <label class=\"small mb-1\" for=\"{{formEl.id}}\">{{formEl.label}}</label>\n                        <input [ngClass]=\"{ 'is-invalid': _form.controls[formEl.name].touched && _form.controls[formEl.name].errors}\"\n                               class=\"form-control py-4\"\n                               formControlName=\"{{formEl.name}}\"\n                               id=\"{{formEl.id}}\"\n                               name=\"{{formEl.name}}\"\n                               placeholder=\"{{formEl.placeholder}}\"\n                               type=\"{{formEl.type}}\"/>\n                        <div *ngIf=\"_form.controls[formEl.name].touched && _form.controls[formEl.name].errors\"\n                             class=\"invalid-feedback\">\n                            <div *ngIf=\"_form.controls[formEl.name].errors!.required\">\n                                {{formEl.errors.required}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"mt-3\" style=\"text-align: end;\">\n                        <button [disabled]=\"!_form.valid\" class=\"btn btn-primary\"\n                                type=\"submit\">\n                            Speichern\n                            <span *ngIf=\"(_submitStatus$ |async)?.status == 'pending'\"\n                                  aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                            <fa-icon *ngIf=\"(_submitStatus$ |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                                     class=\"ml-1\"></fa-icon>\n                        </button>\n\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\"id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/newscenter/containers/index.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/newscenter/containers/index.ts ***!
  \********************************************************/
/*! exports provided: containers, NewscenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newscenter/newscenter.component */ "./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewscenterComponent", function() { return _newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__["NewscenterComponent"]; });



const containers = [_newscenter_newscenter_component__WEBPACK_IMPORTED_MODULE_1__["NewscenterComponent"]];



/***/ }),

/***/ "./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmV3c2NlbnRlci9jb250YWluZXJzL25ld3NjZW50ZXIvbmV3c2NlbnRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/newscenter/containers/newscenter/newscenter.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewscenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewscenterComponent", function() { return NewscenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_modules_newscenter_newscenter_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/newscenter/newscenter.form */ "./src/app/modules/newscenter/newscenter.form.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/base-config.component */ "./src/helpers/base-config.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");
var NewscenterComponent_1;







let NewscenterComponent = NewscenterComponent_1 = class NewscenterComponent extends _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__["BaseConfigComponent"] {
    constructor(fb, newscenterService, userService) {
        super(NewscenterComponent_1.name);
        this.fb = fb;
        this.newscenterService = newscenterService;
        this.userService = userService;
        this._mappedModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            "sporttotal_url": "",
            "club_id": -1,
            "homepage_url": "",
            "fussballde_url": "",
            "id": -1,
            "twitter_id": "",
            "youtube_id": "",
            "facebook_id": "",
            "instagram_id": ""
        });
        this.formLayout = _app_modules_newscenter_newscenter_form__WEBPACK_IMPORTED_MODULE_3__["FORM"];
        this._logger.debug('Constructing component');
        this._form = this.fb.group({
            facebook_id: [''],
            twitter_id: [''],
            instagram_id: [''],
            homepage_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sporttotal_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fussballde_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            youtube_id: [''],
        });
        this._initialStatus$.next({ status: 'pending' });
        this.newscenterService.get().subscribe(data => {
            this._initialStatus$.next({ status: 'success' });
            this._mappedModel$.next(data);
            setTimeout(() => {
                this._initialStatus$.next({ status: 'idle' });
            }, 300);
        });
        this._mappedModel$.subscribe(data => {
            var _a;
            this._logger.debug('_mappedModel updated ', data);
            for (const [key, value] of Object.entries(data)) {
                (_a = this._form.controls[key]) === null || _a === void 0 ? void 0 : _a.setValue(value);
            }
        });
    }
    _submitData() {
        const data = Object.assign(Object.assign({}, this._form.value), { club_id: this.userService.club_id, id: this.userService.club_id });
        this.newscenterService.submit(data).subscribe(res => {
            this._logger.debug('Received sumbit result', res);
            this._submitStatus$.next({ status: 'success' });
            setTimeout(() => {
                this._initialStatus$.next({ status: 'idle' });
            }, 300);
            this._mappedModel$.next(res);
        });
    }
};
NewscenterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["NewscenterService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
NewscenterComponent = NewscenterComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-newscenter',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./newscenter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/newscenter/containers/newscenter/newscenter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./newscenter.component.scss */ "./src/app/modules/newscenter/containers/newscenter/newscenter.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_6__["NewscenterService"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], NewscenterComponent);



/***/ }),

/***/ "./src/app/modules/newscenter/newscenter-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/newscenter/newscenter-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ROUTES, NewscenterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewscenterRoutingModule", function() { return NewscenterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_newscenter_newscenter_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/newscenter/newscenter.module */ "./src/app/modules/newscenter/newscenter.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/app/modules/newscenter/containers/index.ts");





/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["NewscenterComponent"],
        data: {
            title: 'Newcenter - MyClapp Manager',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Newscenter',
                    active: true,
                },
            ],
        },
    },
];
let NewscenterRoutingModule = class NewscenterRoutingModule {
};
NewscenterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_app_modules_newscenter_newscenter_module__WEBPACK_IMPORTED_MODULE_3__["NewscenterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewscenterRoutingModule);



/***/ }),

/***/ "./src/app/modules/newscenter/newscenter.form.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/newscenter/newscenter.form.ts ***!
  \*******************************************************/
/*! exports provided: FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const FORM = [
    {
        type: 'url',
        name: 'facebook_id',
        label: 'Facebook',
        id: 'inputFacebook',
        placeholder: 'www.facebook.de/...',
        errors: {
            required: 'Bitte gib hier den Link zu eurer Facebook Seite ein',
        },
    },
    {
        type: 'url',
        name: 'twitter_id',
        label: 'Twitter',
        id: 'inputTwitter',
        placeholder: 'www.twitter.de/...',
        errors: {
            required: 'Bitte gib hier den Link zu eurer Twitter Seite ein',
        },
    },
    {
        type: 'url',
        name: 'instagram_id',
        label: 'Instagram',
        id: 'inputInstagram',
        placeholder: 'www.instagram.de/...',
        errors: {
            required: 'Bitte gib hier den Link zu eurer Instagram Seite ein',
        },
    },
    {
        type: 'url',
        name: 'homepage_url',
        label: 'Homepage',
        id: 'inputHomepage',
        placeholder: 'www.meinverein.de/...',
        errors: {
            required: 'Bitte gib hier den Link zu eurer Homepage ein',
        },
    },
    {
        type: 'url',
        name: 'sporttotal_url',
        label: 'SportTotal.tv',
        id: 'inputSporttotal',
        placeholder: 'www.sporttotal.tv/...',
        errors: {
            required: 'Bitte gib hier den Link zu eurer SportTotal Seite ein',
        },
    },
    {
        type: 'url',
        name: 'fussballde_url',
        label: 'Fussball.de',
        id: 'inputFussballde',
        placeholder: 'http://www.fussball.de',
        errors: {
            required: 'Bitte gib hier den Link zu eurer Fußball.de Seite ein',
        },
    },
];


/***/ }),

/***/ "./src/app/modules/newscenter/newscenter.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/newscenter/newscenter.module.ts ***!
  \*********************************************************/
/*! exports provided: NewscenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewscenterModule", function() { return NewscenterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/page-layout/page-layouts.module */ "./src/app/modules/page-layout/page-layouts.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/modules/newscenter/containers/index.ts");









let NewscenterModule = class NewscenterModule {
};
NewscenterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__["PageLayoutsModule"],
        ],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"]],
    })
], NewscenterModule);



/***/ }),

/***/ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-card {\n  min-height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZtYXovd29ya3NwYWNlL1dvcmsvTXlDbGFwcC9teS1jbGFwcC1tYW5hZ2VyL3NyYy9hcHAvbW9kdWxlcy9wYWdlLWxheW91dC9sYXlvdXRzL3ZpZXctY29udGVudC1jYXJkL3ZpZXctY29udGVudC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jYXJke1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbn1cbiIsIi5jb250ZW50LWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ViewContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewContentCardComponent", function() { return ViewContentCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ViewContentCardComponent = class ViewContentCardComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViewContentCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-view-content-card',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-content-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-content-card.component.scss */ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ViewContentCardComponent);



/***/ }),

/***/ "./src/app/modules/page-layout/page-layouts.module.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/page-layout/page-layouts.module.ts ***!
  \************************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/view-content-card/view-content-card.component */ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");






let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        exports: [
            _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ViewContentCardComponent"]
        ],
        declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ViewContentCardComponent"]]
    })
], PageLayoutsModule);



/***/ })

}]);
//# sourceMappingURL=app-modules-newscenter-newscenter-routing-module-es2015.js.map