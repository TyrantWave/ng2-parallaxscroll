(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/ng2-parallaxscroll/fesm2015/ng2-parallaxscroll.js":
/*!*********************************************************************************************************!*\
  !*** C:/Users/tyran/Programs/ng2-parallaxscroll/dist/ng2-parallaxscroll/fesm2015/ng2-parallaxscroll.js ***!
  \*********************************************************************************************************/
/*! exports provided: ParallaxScrollComponent, ParallaxScrollModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxScrollComponent", function() { return ParallaxScrollComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxScrollModule", function() { return ParallaxScrollModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ParallaxScrollDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParallaxScrollComponent {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parallaxStyles = {
            'background-image': this.img ? 'url(' + this.img + ')' : '',
            height: '100%',
            width: '100%'
        };
    }
}
ParallaxScrollComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ng-parallax',
                template: `
    <div parallax [config]="config"
        [ngStyle]="parallaxStyles"
        [ngClass]="paraClass">
        <ng-content></ng-content>
    </div>
  `,
                styles: [`
        :host {
            display: block;
        }
    `]
            }] }
];
ParallaxScrollComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    img: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['img',] }],
    paraClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParallaxScrollDirective {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    constructor(element, platformId) {
        this.platformId = platformId;
        this.axis = 'Y';
        this.speed = -.7;
        this.initialValue = 0;
        this.cssUnit = 'px';
        this.parallaxPivot = '50%';
        this.cssProperty = 'backgroundPosition';
        this.onScroll = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            let result;
            /** @type {?} */
            let scrollPosition;
            // Read scroll position * speed + initial val
            if (this.testBrowser && this.scrollElement instanceof Window) {
                scrollPosition = this.scrollElement.scrollY * this.speed + this.initialValue;
            }
            else {
                scrollPosition = this.scrollElement.scrollTop * this.speed + this.initialValue;
            }
            // Set limits
            if (this.maxValue !== undefined && scrollPosition >= this.maxValue) {
                scrollPosition = this.maxValue;
            }
            else if (this.minValue !== undefined && scrollPosition <= this.minValue) {
                scrollPosition = this.minValue;
            }
            // Get output based on axis
            if (this.axis === 'X') {
                result = 'calc(' + this.parallaxPivot + ' + ' + scrollPosition + this.cssUnit + ') center';
            }
            else {
                result = 'center calc(' + this.parallaxPivot + ' + ' + scrollPosition + this.cssUnit + ')';
            }
            this.parallaxElement.style[(/** @type {?} */ (this.cssProperty))] = result;
        });
        this.hostElement = element.nativeElement;
        this.testBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
        // If the window exists, grab it, else set to hostElement to prevent errors
        this.backupElement = this.testBrowser ? window : this.hostElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Read config
        for (const prop in this.config) {
            if (this.config.hasOwnProperty(prop)) {
                ((/** @type {?} */ (this)))[prop] = ((/** @type {?} */ (this.config)))[prop];
            }
        }
        this.speed = +this.speed;
        this.initialValue = +this.initialValue;
        this.parallaxElement = this.parallaxElement || this.hostElement;
        // Grab scroll element
        if (this.scrollerId) {
            try {
                this.scrollElement = document.getElementById(this.scrollerId);
                if (!this.scrollElement) {
                    throw new Error((`ID ('${this.scrollerId}') does not exist! Using default`));
                }
            }
            catch (e) {
                this.scrollElement = this.backupElement;
            }
        }
        else {
            this.scrollElement = this.backupElement;
        }
        this.onScroll();
        this.scrollElement.addEventListener('scroll', this.onScroll.bind(this));
    }
}
ParallaxScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[parallax]'
            },] }
];
/** @nocollapse */
ParallaxScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
ParallaxScrollDirective.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    axis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    speed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    initialValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssUnit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    parallaxElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    parallaxPivot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ParallaxScrollModule {
}
ParallaxScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    ParallaxScrollComponent,
                    ParallaxScrollDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    ParallaxScrollComponent,
                    ParallaxScrollDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-parallaxscroll.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!*******************************************************************************************************!*\
  !*** C:/Users/tyran/Programs/ng2-parallaxscroll/node_modules/raw-loader!./src/app/app.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Parallax Scroll Examples</h1>\r\n\r\n<h3>Config used:</h3>\r\n<pre>\r\n  <code class=\"language-typescript\">\r\n    config: IParallaxScrollConfig = &#123;\r\n      axis: 'Y',\r\n      speed: -.5\r\n    &#125;\r\n  </code>\r\n</pre>\r\n\r\n<h3>CSS Used: </h3>\r\n<pre>\r\n  <code class=\"language-css\">\r\n    .parallax-container &#123;\r\n      height: 200px;\r\n      width: 1000px;\r\n      max-width: 100%;\r\n    &#125;\r\n  \r\n    .parallax-directive &#123;\r\n      background-image: url(../assets/background.JPG);\r\n      height: 200px;\r\n      width: 1000px;\r\n      max-width: 100%;\r\n    &#125;\r\n  </code>\r\n</pre>\r\n<h2>As a component: </h2>\r\n<pre>\r\n  <code class=\"language-markup\">\r\n    &lt;ng-parallax [config]=\"config\" img=\"assets/background.JPG\" class=\"parallax-container\"&gt;&lt;/ng-parallax&gt;\r\n  </code>\r\n</pre>\r\n<ng-parallax [config]=\"config\" img=\"assets/background.JPG\" class=\"parallax-container\"></ng-parallax>\r\n\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<h2>As a directive: </h2>\r\n<pre>\r\n  <code class=\"language-markup\">\r\n    &lt;div parallax [config]=\"config\" class=\"parallax-directive\"&gt;&lt;/div&gt;\r\n  </code>\r\n</pre>\r\n<div parallax [config]=\"config\" class=\"parallax-directive\"></div>\r\n\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n<p>...</p>\r\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax-container {\r\n  height: 200px;\r\n  width: 1000px;\r\n  max-width: 100%;\r\n}\r\n\r\n.parallax-directive {\r\n  background-image: url('background.JPG');\r\n  height: 200px;\r\n  width: 1000px;\r\n  max-width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nMi1wYXJhbGxheHNjcm9sbC10ZXN0ZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUErQztFQUMvQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLGVBQWU7QUFDakIiLCJmaWxlIjoicHJvamVjdHMvbmcyLXBhcmFsbGF4c2Nyb2xsLXRlc3Rlci9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmFsbGF4LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnBhcmFsbGF4LWRpcmVjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9iYWNrZ3JvdW5kLkpQRyk7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMTAwMHB4O1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng2-parallaxscroll-tester';
        this.config = {
            axis: 'Y',
            speed: -.5
        };
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_parallaxscroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-parallaxscroll */ "../../dist/ng2-parallaxscroll/fesm2015/ng2-parallaxscroll.js");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            ng2_parallaxscroll__WEBPACK_IMPORTED_MODULE_4__["ParallaxScrollModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tyran\Programs\ng2-parallaxscroll\projects\ng2-parallaxscroll-tester\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map