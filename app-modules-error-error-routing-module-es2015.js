(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-error-error-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-401/error-401.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-401/error-401.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">401</h1>\n                    <p class=\"lead\">Unauthorized</p>\n                    <p>Access to this resource is denied.</p>\n                    <a routerLink=\"/dashboard\">\n                        <fa-icon [icon]='[\"fas\", \"arrow-left\"]' class=\"mr-1\"></fa-icon>\n                        Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-error\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-404/error-404.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-404/error-404.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <img class=\"mb-4 img-error\" src=\"../../../../../assets/img/error-404-monochrome.svg\"/>\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\n                    <a routerLink=\"/dashboard\">\n                        <fa-icon [icon]='[\"fas\", \"arrow-left\"]' class=\"mr-1\"></fa-icon>\n                        Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-error\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-500/error-500.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-500/error-500.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\n>\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-lg-6\">\n                <div class=\"text-center mt-4\">\n                    <h1 class=\"display-1\">500</h1>\n                    <p class=\"lead\">Internal Server Error</p>\n                    <a routerLink=\"/dashboard\">\n                        <fa-icon [icon]='[\"fas\", \"arrow-left\"]' class=\"mr-1\"></fa-icon>\n                        Return to Dashboard</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</sb-layout-error\n>\n");

/***/ }),

/***/ "./src/app/modules/error/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/error/components/index.ts ***!
  \***************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/app/modules/error/containers/error-401/error-401.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-401/error-401.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3IvY29udGFpbmVycy9lcnJvci00MDEvZXJyb3ItNDAxLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/error/containers/error-401/error-401.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-401/error-401.component.ts ***!
  \***************************************************************************/
/*! exports provided: Error401Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return Error401Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error401Component = class Error401Component {
    constructor() {
    }
    ngOnInit() {
    }
};
Error401Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-401',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-401.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-401/error-401.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-401.component.scss */ "./src/app/modules/error/containers/error-401/error-401.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error401Component);



/***/ }),

/***/ "./src/app/modules/error/containers/error-404/error-404.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-404/error-404.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3IvY29udGFpbmVycy9lcnJvci00MDQvZXJyb3ItNDA0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/error/containers/error-404/error-404.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-404/error-404.component.ts ***!
  \***************************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() {
    }
    ngOnInit() {
    }
};
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-404',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-404/error-404.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-404.component.scss */ "./src/app/modules/error/containers/error-404/error-404.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error404Component);



/***/ }),

/***/ "./src/app/modules/error/containers/error-500/error-500.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-500/error-500.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXJyb3IvY29udGFpbmVycy9lcnJvci01MDAvZXJyb3ItNTAwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/error/containers/error-500/error-500.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/error/containers/error-500/error-500.component.ts ***!
  \***************************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error500Component = class Error500Component {
    constructor() {
    }
    ngOnInit() {
    }
};
Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-500',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-500.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/error/containers/error-500/error-500.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-500.component.scss */ "./src/app/modules/error/containers/error-500/error-500.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error500Component);



/***/ }),

/***/ "./src/app/modules/error/containers/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/error/containers/index.ts ***!
  \***************************************************/
/*! exports provided: containers, Error401Component, Error404Component, Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-401/error-401.component */ "./src/app/modules/error/containers/error-401/error-401.component.ts");
/* harmony import */ var _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404/error-404.component */ "./src/app/modules/error/containers/error-404/error-404.component.ts");
/* harmony import */ var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-500/error-500.component */ "./src/app/modules/error/containers/error-500/error-500.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]; });





const containers = [_error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"], _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]];





/***/ }),

/***/ "./src/app/modules/error/error-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/error/error-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES, ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/modules/error/containers/index.ts");
/* harmony import */ var _error_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error.module */ "./src/app/modules/error/error.module.ts");

/* tslint:disable: ordered-imports*/


/* Containers */

/* Module */

/* Guards */
/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404',
    },
    {
        path: '401',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["Error401Component"],
        data: {
            title: 'Error 401 - MyClapp Manager',
        },
    },
    {
        path: '404',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
        data: {
            title: 'Error 404 - MyClapp Manager',
        },
    },
    {
        path: '500',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["Error500Component"],
        data: {
            title: 'Error 500 - MyClapp Manager',
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["Error404Component"],
    },
];
let ErrorRoutingModule = class ErrorRoutingModule {
};
ErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_error_module__WEBPACK_IMPORTED_MODULE_4__["ErrorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorRoutingModule);



/***/ }),

/***/ "./src/app/modules/error/error.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/error/error.module.ts ***!
  \***********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_modules_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/app-common/app-common.module */ "./src/app/modules/app-common/app-common.module.ts");
/* harmony import */ var _app_modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/modules/navigation/navigation.module */ "./src/app/modules/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/modules/error/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/modules/error/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "./src/app/modules/error/guards/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

let ErrorModule = class ErrorModule {
};
ErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
], ErrorModule);



/***/ }),

/***/ "./src/app/modules/error/guards/error.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/error/guards/error.guard.ts ***!
  \*****************************************************/
/*! exports provided: ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return ErrorGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ErrorGuard = class ErrorGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ErrorGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorGuard);



/***/ }),

/***/ "./src/app/modules/error/guards/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/error/guards/index.ts ***!
  \***********************************************/
/*! exports provided: guards, ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.guard */ "./src/app/modules/error/guards/error.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return _error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"]; });



const guards = [_error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"]];



/***/ })

}]);
//# sourceMappingURL=app-modules-error-error-routing-module-es2015.js.map