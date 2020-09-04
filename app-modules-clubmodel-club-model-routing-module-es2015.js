(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-clubmodel-club-model-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head\n        [hideBreadcrumbs]=\"true\"\n        title=\"Clubdaten\"\n    ></sb-dashboard-head>\n    <sb-view-information-card>\n        <div text>\n            Auf dieser Seite können Sie die Daten Ihres Vereins pflegen. Falls möglich geben Sie bitte alle vorhandenen\n            Verknüpfungen an. Relevante Verlinkungen wie\n            zum Beispiel Ihre direkten Social Media Auftritte werden direkt in der App angezeigt.\n        </div>\n    </sb-view-information-card>\n    <sb-view-content-card>\n        <div class=\"col-12 card shadow\">\n            <div class=\"card-body\">\n                <sb-loading-indicator-overlay [_loadingStatus]=\"_initialStatus$\"></sb-loading-indicator-overlay>\n                <div>\n                    <h4><b>Clubdaten von {{this.userService.club_name}}</b></h4>\n                </div>\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"_form\">\n                    <div *ngFor=\"let formEl of formLayout\" class=\"form-group\">\n                        <label class=\"small mb-1\" for={{formEl.id}}>{{formEl.label}}</label>\n                        <input\n                            [ngClass]=\"{\n                    'is-invalid':\n                    form[formEl.name].touched && form[formEl.name].errors\n                    }\"\n                            class=\"form-control\"\n                            formControlName=\"{{formEl.name}}\"\n                            id={{formEl.id}}\n                            name=\"{{formEl.name}}\"\n                            placeholder=\"{{formEl.placeholder}}\"\n                            type=\"{{formEl.type}}\"\n                        />\n                        <div\n                            *ngIf=\"form[formEl.name].touched && form[formEl.name].errors\"\n                            class=\"invalid-feedback\"\n                        >\n                            <div *ngIf=\"form[formEl.name].errors!.required\">\n                                {{formEl.errors.required}}\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"mt-3 mb-2\" style=\"text-align: end;\">\n                        <button [disabled]=\"!_form.valid\" class=\"btn btn-primary\"\n                                type=\"submit\">\n                            Speichern\n                            <span *ngIf=\"(_submitStatus$ |async)?.status == 'pending'\"\n                                  aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n                            <fa-icon *ngIf=\"(_submitStatus$ |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                                     class=\"ml-1\"></fa-icon>\n                        </button>\n\n                    </div>\n                </form>\n            </div>\n        </div>\n    </sb-view-content-card>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header border-0\">\n    <h4>{{title}}</h4>\n    <button (click)=\"ngbActiveModal.dismiss()\" aria-label=\"Close\" class=\"close\" type=\"button\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body border-0\">\n    <div class=\"col-10 m-auto\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n<div class=\"modal-footer border-0\">\n    <button (click)=\"close();\" class=\"btn btn-{{type}}\" type=\"button\"\n            [disabled]=\"buttonDisabled\">\n        {{closeText}}\n        <span *ngIf=\"(buttonLoadingIndicator |async)?.status == 'pending'\"\n              aria-hidden=\"true\" class=\"spinner-border spinner-border-sm\" role=\"status\"></span>\n        <fa-icon *ngIf=\"(buttonLoadingIndicator |async)?.status == 'success'\" [icon]=\"['fas', 'check']\"\n                 class=\"ml-1\"></fa-icon>\n    </button>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-row ml-1 card bg-secondary mr-1 content-card\" id=\"content-card\">\n    <div class=\"card-body col\">\n        <ng-content></ng-content>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/clubmodel/club-model-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/clubmodel/club-model-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ROUTES, ClubModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModelRoutingModule", function() { return ClubModelRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_clubmodel_club_model_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/clubmodel/club-model.module */ "./src/app/modules/clubmodel/club-model.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/app/modules/clubmodel/containers/index.ts");





/* Routes */
const ROUTES = [
    {
        path: '',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["ClubModelComponent"],
        data: {
            title: 'Club Daten - MyClapp Manager',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Clubdaten',
                    active: true,
                },
            ],
        },
    },
];
let ClubModelRoutingModule = class ClubModelRoutingModule {
};
ClubModelRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_app_modules_clubmodel_club_model_module__WEBPACK_IMPORTED_MODULE_3__["ClubModelModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClubModelRoutingModule);



/***/ }),

/***/ "./src/app/modules/clubmodel/club-model.form.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/clubmodel/club-model.form.ts ***!
  \******************************************************/
/*! exports provided: FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM", function() { return FORM; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const FORM = [
    {
        type: 'text',
        name: 'name',
        label: 'Clubname',
        id: 'inputName',
        placeholder: 'Sportverein Soccer',
        errors: {
            required: 'Bitte gib hier den Vereinsnamen ein',
        },
    },
    {
        type: 'text',
        name: 'street',
        label: 'Straße',
        id: 'inputStreet',
        placeholder: 'Musterstraße 34',
        errors: {
            required: 'Bitte gib hier deine Adresse ein ',
        },
    },
    {
        type: 'text',
        name: 'postcode',
        label: 'Postleitzahl',
        id: 'inputZip',
        placeholder: '12345',
        errors: {
            required: 'Bitte gib hier die Postleitzahl ein',
        },
    },
    {
        type: 'text',
        name: 'city',
        label: 'Stadt',
        id: 'inputCity',
        placeholder: 'Musterstadt',
        errors: {
            required: 'Bitte gib hier die Stadt ein',
        },
    },
    {
        type: 'text',
        name: 'primary_color_hex',
        label: 'Primäre Farbe',
        id: 'inputPrimaryColor',
        placeholder: '#FFFFF',
    },
    {
        type: 'text',
        name: 'secondary_color_hex',
        label: 'Sekundäre Farbe',
        id: 'inputSecondaryColor',
        placeholder: '#FFFFF',
    },
];


/***/ }),

/***/ "./src/app/modules/clubmodel/club-model.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/clubmodel/club-model.module.ts ***!
  \********************************************************/
/*! exports provided: ClubModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModelModule", function() { return ClubModelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _app_modules_page_layout_page_layouts_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/modules/page-layout/page-layouts.module */ "./src/app/modules/page-layout/page-layouts.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/modules/clubmodel/containers/index.ts");









let ClubModelModule = class ClubModelModule {
};
ClubModelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], ClubModelModule);



/***/ }),

/***/ "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2x1Ym1vZGVsL2NvbnRhaW5lcnMvY2x1Ym1vZGVsL2NsdWItbW9kZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClubModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubModelComponent", function() { return ClubModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_modules_clubmodel_club_model_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/modules/clubmodel/club-model.form */ "./src/app/modules/clubmodel/club-model.form.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../helpers/base-config.component */ "./src/helpers/base-config.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services */ "./src/services/index.ts");
var ClubModelComponent_1;







let ClubModelComponent = ClubModelComponent_1 = class ClubModelComponent extends _helpers_base_config_component__WEBPACK_IMPORTED_MODULE_5__["BaseConfigComponent"] {
    constructor(fb, clubModelService, userService) {
        super(ClubModelComponent_1.name);
        this.fb = fb;
        this.clubModelService = clubModelService;
        this.userService = userService;
        this.formLayout = _app_modules_clubmodel_club_model_form__WEBPACK_IMPORTED_MODULE_3__["FORM"];
        this._mappedModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({
            secondary_color_hex: '',
            city: '',
            street: '',
            primary_color_hex: '',
            name: '',
            postcode: '',
        });
        this._logger.debug('Constructing component');
        this._form = this.fb.group({
            name: [''],
            street: [''],
            postcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            primary_color_hex: [''],
            secondary_color_hex: ['']
        });
        this._initialStatus$.next({ status: 'pending' });
        this.clubModelService.get().subscribe(data => {
            this._initialStatus$.next({ status: 'success' });
            this._mappedModel$.next(data);
            setTimeout(() => {
                this._initialStatus$.next({ status: 'idle' });
            }, 300);
        });
        this._mappedModel$.subscribe(data => {
            this._logger.debug('_mappedModel updated ', data);
            this._form.patchValue({
                name: data.name,
                street: data.street,
                postcode: data.postcode,
                city: data.city,
                primary_color_hex: data.primary_color_hex,
                secondary_color_hex: data.secondary_color_hex,
            });
        });
        this._form.controls.primary_color_hex.valueChanges.subscribe(value => {
            const inputField = document.getElementById('inputPrimaryColor');
            const colorTrans = ClubModelComponent_1._hexToRGB(value, 0);
            const colorFull = ClubModelComponent_1._hexToRGB(value, 1);
            if (inputField != null && colorFull !== '' && colorTrans !== '') {
                this._logger.info('entered if', [colorFull, colorTrans]);
                inputField.style.background = 'linear-gradient(to right, ' + colorTrans + ', ' + colorFull + ')';
            }
        });
        this._form.controls.secondary_color_hex.valueChanges.subscribe(value => {
            const inputField = document.getElementById('inputSecondaryColor');
            const colorTrans = ClubModelComponent_1._hexToRGB(value, 0);
            const colorFull = ClubModelComponent_1._hexToRGB(value, 1);
            if (inputField != null && colorFull !== '' && colorTrans !== '') {
                inputField.style.background = 'linear-gradient(to right, ' + colorTrans + ', ' + colorFull + ')';
            }
        });
    }
    static _hexToRGB(hex, alpha) {
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            if (alpha) {
                return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
            }
            else {
                return 'rgba(' + r + ', ' + g + ', ' + b + ',0)';
            }
        }
        else
            return '';
    }
    _submitData() {
        const data = Object.assign({}, this._form.value);
        this.clubModelService.submit(data).subscribe(res => {
            this._logger.debug('Received submit result', res);
            this._submitStatus$.next({ status: 'success' });
            setTimeout(() => {
                this._submitStatus$.next({ status: 'idle' });
            }, 300);
            this._mappedModel$.next(res);
        });
    }
};
ClubModelComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["ClubModelService"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
ClubModelComponent = ClubModelComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-clubdata',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./club-model.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/clubmodel/containers/clubmodel/club-model.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./club-model.component.scss */ "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_6__["ClubModelService"], _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
], ClubModelComponent);



/***/ }),

/***/ "./src/app/modules/clubmodel/containers/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/clubmodel/containers/index.ts ***!
  \*******************************************************/
/*! exports provided: containers, ClubModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clubmodel/club-model.component */ "./src/app/modules/clubmodel/containers/clubmodel/club-model.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClubModelComponent", function() { return _clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__["ClubModelComponent"]; });



const containers = [_clubmodel_club_model_component__WEBPACK_IMPORTED_MODULE_1__["ClubModelComponent"]];



/***/ }),

/***/ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy9zdGFuZGFyZC1tb2RhbC9zdGFuZGFyZC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StandardModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardModalComponent", function() { return StandardModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let StandardModalComponent = class StandardModalComponent {
    // @Input() form!: FormGroup
    constructor(ngbActiveModal) {
        this.ngbActiveModal = ngbActiveModal;
        this.closeFunction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.closeText = 'Schließen';
        this.buttonDisabled = false;
        this.type = 'primary';
        this.buttonLoadingIndicator = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ status: 'idle' });
        this.dismissOnClose = true;
    }
    ngOnInit() {
    }
    close() {
        this.closeFunction.emit();
        if (this.dismissOnClose)
            this.ngbActiveModal.close(true);
    }
};
StandardModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], StandardModalComponent.prototype, "closeFunction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "closeText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], StandardModalComponent.prototype, "buttonDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], StandardModalComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])
], StandardModalComponent.prototype, "buttonLoadingIndicator", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], StandardModalComponent.prototype, "dismissOnClose", void 0);
StandardModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-standard-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./standard-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./standard-modal.component.scss */ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
], StandardModalComponent);



/***/ }),

/***/ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-card {\n  min-height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL215Y2xhcHAtbWFuYWdlci9teWNsYXBwLW1hbmFnZXIvc3JjL2FwcC9tb2R1bGVzL3BhZ2UtbGF5b3V0L2xheW91dHMvdmlldy1jb250ZW50LWNhcmQvdmlldy1jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZS1sYXlvdXQvbGF5b3V0cy92aWV3LWNvbnRlbnQtY2FyZC92aWV3LWNvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNhcmQge1xuICAgIG1pbi1oZWlnaHQ6IDYwJTtcbn1cbiIsIi5jb250ZW50LWNhcmQge1xuICBtaW4taGVpZ2h0OiA2MCU7XG59Il19 */");

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
    constructor() {
    }
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/standard-modal/standard-modal.component */ "./src/app/modules/page-layout/layouts/standard-modal/standard-modal.component.ts");
/* harmony import */ var _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/view-content-card/view-content-card.component */ "./src/app/modules/page-layout/layouts/view-content-card/view-content-card.component.ts");








let PageLayoutsModule = class PageLayoutsModule {
};
PageLayoutsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        exports: [
            _layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"],
            _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]
        ],
        providers: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
        ],
        declarations: [_layouts_view_content_card_view_content_card_component__WEBPACK_IMPORTED_MODULE_7__["ViewContentCardComponent"], _layouts_standard_modal_standard_modal_component__WEBPACK_IMPORTED_MODULE_6__["StandardModalComponent"]]
    })
], PageLayoutsModule);



/***/ })

}]);
//# sourceMappingURL=app-modules-clubmodel-club-model-routing-module-es2015.js.map