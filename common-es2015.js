(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/helpers/base-config.component.ts":
/*!**********************************************!*\
  !*** ./src/helpers/base-config.component.ts ***!
  \**********************************************/
/*! exports provided: BaseConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseConfigComponent", function() { return BaseConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @upe/logger */ "./node_modules/@upe/logger/index.js");
/* harmony import */ var _upe_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class BaseConfigComponent {
    constructor(name) {
        this._initialStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ status: 'idle' });
        this._submitStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ status: 'idle' });
        this._logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]({ name: name, flags: ["component"] });
    }
    get form() {
        return this._form.controls;
    }
    onSubmit() {
        this._logger.debug('Initializing submit');
        this._submitStatus$.next({ status: 'pending' });
        this._submitData();
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map