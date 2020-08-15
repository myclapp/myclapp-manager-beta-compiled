function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/helpers/base-config.component.ts":
  /*!**********************************************!*\
    !*** ./src/helpers/base-config.component.ts ***!
    \**********************************************/

  /*! exports provided: BaseConfigComponent */

  /***/
  function srcHelpersBaseConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseConfigComponent", function () {
      return BaseConfigComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _upe_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @upe/logger */
    "./node_modules/@upe/logger/index.js");
    /* harmony import */


    var _upe_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_upe_logger__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BaseConfigComponent = /*#__PURE__*/function () {
      function BaseConfigComponent(name) {
        _classCallCheck(this, BaseConfigComponent);

        this._initialStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          status: 'idle'
        });
        this._submitStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
          status: 'idle'
        });
        this._logger = new _upe_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]({
          name: name,
          flags: ["component"]
        });
      }

      _createClass(BaseConfigComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          this._logger.debug('Initializing submit');

          this._submitStatus$.next({
            status: 'pending'
          });

          this._submitData();
        }
      }, {
        key: "form",
        get: function get() {
          return this._form.controls;
        }
      }]);

      return BaseConfigComponent;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map