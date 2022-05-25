(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-calendar></app-calendar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"row my-2 d-flex flex-column flex-md-row\">\n        <div class=\"col-3 d-flex flex-column justify-content-start align-items-center\">\n            <app-month-select></app-month-select>\n            <app-schedule-date [calendar]=\"calendar\" (emitNewEvent)=\"newEvent($event)\" (emitDeleteEvent)=\"deleteEvent($event)\"></app-schedule-date>\n        </div>\n        <div class=\"col-9 d-flex flex-column justify-content-center align-items-start\">\n            <div *ngFor=\"let week of calendar.scaleSet\">\n                <div class=\"row\">\n                    <div *ngFor=\"let day of week\">\n                        <app-day [activeDay]=\"activeDay\" [day]=\"calendar.content[day]\" (click)=\"setActiveDay(calendar.content[day])\"></app-day>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"mt-3 row justify-content-center\">\n        <a href=\"https://github.com/joelkperkins/google-cal\" target=\"_blank\">View on Github</a>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-control/month-select/month-select.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/date-control/month-select/month-select.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"width: 23vw;\">\n    <div class=\"card-header\">\n        <div class=\"row justify-content-center\">\n            <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"updateYear(prevYear.year)\">\n                {{prevYear.year}}\n            </button>\n            <div class=\"col-6 d-flex justify-content-center\">\n                <h3>{{date.year}}</h3>\n            </div>\n            <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"updateYear(nextYear.year)\">\n                {{nextYear.year}}\n            </button>\n        </div>\n    </div>\n    <div class=\"my-2 row justify-content-around align-items-center\">\n        <div class=\"col-3 d-flex justify-content-center\">\n            <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"updateMonth(prevMonth.month)\">\n                {{prevMonth.monthShort}}\n            </button>\n        </div>\n        <div class=\"col-6 d-flex justify-content-center\">\n            <h1>{{date.monthLong}}</h1>\n        </div>\n        <div class=\"col-3 d-flex justify-content-center\">\n            <button type=\"button\" class=\"btn btn-light btn-sm\" (click)=\"updateMonth(nextMonth.month)\">\n                {{nextMonth.monthShort}}\n            </button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/day/day.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day/day.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col day\">\n    <div class=\"d-flex flex-column flex-md-row\">\n        <div *ngIf=\"currentDay(day.date) && isActive(day.date)\">\n            <strong class=\"number current active\">{{day.num}}</strong>\n            <strong class=\"name m-2\">{{day.name}}</strong>\n        </div>\n        <div *ngIf=\"!currentDay(day.date) && isActive(day.date)\">\n            <strong class=\"number active\">{{day.num}}</strong>\n            <strong class=\"name m-2\">{{day.name}}</strong>\n        </div>\n        <div *ngIf=\"currentDay(day.date) && !isActive(day.date)\">\n            <strong class=\"number current\">{{day.num}}</strong>\n            <strong class=\"name m-2\">{{day.name}}</strong>\n        </div>\n        <div *ngIf=\"!currentDay(day.date) && !isActive(day.date)\">\n            <strong class=\"number\">{{day.num}}</strong>\n            <strong class=\"name m-2\">{{day.name}}</strong>\n        </div>\n    </div>\n    <div *ngFor=\"let event of day.events\">\n        <div class=\"d-flex\">\n            <span class=\"text-muted time mr-1\">{{getTimeString(event.date)}}</span>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule-date/schedule-date.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule-date/schedule-date.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"width: 23vw;\">\n    <div class=\"my-3 row no-gutter d-flex justify-content-between align-items-center\">\n        <div class=\"d-flex\">\n            <button class=\"btn btn-sm btn-light\" (click)=\"updateDate(prevDay)\">\n                <span class=\"text-muted mr-2\">{{prevDay.weekdayShort}}</span>\n                <span class=\"text-muted\">{{prevDay.day}}</span>\n            </button>\n        </div>\n        <div class=\"d-flex justify-content-center\">\n            <span class=\"text-muted mr-2\">{{activeDate.date.weekdayLong}}</span>\n            <span class=\"text-muted\">{{activeDate.date.day}}</span>\n        </div>\n        <div class=\"d-flex\">\n            <button class=\"btn btn-sm btn-light\" (click)=\"updateDate(nextDay)\">\n                <span class=\"text-muted mr-2\">{{nextDay.weekdayShort}}</span>\n                <span class=\"text-muted\">{{nextDay.day}}</span>\n            </button>\n        </div>\n    </div>\n    <div class=\"row schedule\">\n        <div class=\"col-12 d-flex flex-column align-items-center justify-content-start\">\n            <div *ngIf=\"newEvent === false\"class=\"mb-3 d-flex justify-center-center align-items-center\">\n                <button class=\"btn btn-primary\" (click)=\"startNewEvent()\">Schedule Event</button>\n            </div>\n            <div style=\"width: 21vw;\" *ngIf=\"activeDate.events.length > 0 && newEvent === false\">\n                <ul class=\"list-group\">\n                    <li *ngFor=\"let event of activeDate.events\" class=\"list-group-item\">\n                        <div class=\"row d-flex justify-content-start align-items-center\">\n                            <div class=\"col-10\">\n                                <span class=\"mr-5\">{{getTimeString(event.date)}}</span>\n                                <span>{{event.name}}</span>\n                            </div>\n                            <div class=\"col\">\n                                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteEvent(event)\">X</button>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div *ngIf=\"activeDate.events.length === 0 && newEvent === false\">\n                <div class=\"text-center\">\n                    <span class=\"text-muted\">No events scheduled for this day</span>\n                </div>\n            </div>\n            <div *ngIf=\"newEvent === true\">\n                <div class=\"m-3 d-flex flex-column justify-content-center align-items-start\">\n                    <div class=\"mb-3\">\n                        <label for=\"name\" class=\"form-label\">Event Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Dinner\" [(ngModel)]=\"eventName\">\n                    </div>\n                        <div class=\"mb-3\">\n                        <label for=\"time\" class=\"form-label\">Event Time</label>\n                        <input type=\"time\" class=\"form-control\" id=\"time\" [(ngModel)]=\"eventTime\">\n                    </div>\n                </div>\n                <div class=\"d-flex flex-column align-items-center\">\n                    <button class=\"btn btn-success mb-1\" (click)=\"saveEvent()\">Schedule Event</button>\n                    <button class=\"btn btn-danger\" (click)=\"cancelEvent()\">Cancel Event</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = "Fred's Calendar";
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _day_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./day/day.component */ "./src/app/day/day.component.ts");
/* harmony import */ var _date_control_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-control/month-select/month-select.component */ "./src/app/date-control/month-select/month-select.component.ts");
/* harmony import */ var _schedule_schedule_date_schedule_date_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule/schedule-date/schedule-date.component */ "./src/app/schedule/schedule-date/schedule-date.component.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"], _day_day_component__WEBPACK_IMPORTED_MODULE_6__["DayComponent"], _date_control_month_select_month_select_component__WEBPACK_IMPORTED_MODULE_7__["MonthSelectComponent"], _schedule_schedule_date_schedule_date_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleDateComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time.service */ "./src/app/time.service.ts");
/* harmony import */ var _schedule_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schedule-service.service */ "./src/app/schedule-service.service.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_4__);





let CalendarComponent = class CalendarComponent {
    constructor(timeService, scheduleService) {
        this.timeService = timeService;
        this.scheduleService = scheduleService;
        // Properties for the calendar
        this.calendar = {
            date: null,
            scale: "month",
            units: "days",
            content: null,
            scaleSet: null,
        };
        // Properties for the schedule
        this.activeDay = null;
        // hold saved events from local storage
        this.savedEvents = [];
    }
    ngOnInit() {
        // get saved events from local storage
        this.savedEvents = this.scheduleService.getSavedEvents();
        // set the schedule active day to today
        this.scheduleService.updateActiveDate(luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].local());
        // subscribe to the schedule active day
        this.scheduleService.activeDate.subscribe((date) => {
            this.activeDay = date;
        });
        // subscribe to the calendar date
        this.timeService.currentDate.subscribe((date) => {
            this.calendar.date = date;
            // init the calendar based on the current date
            this.initCalendar(this.calendar.scale);
        });
    }
    // init calendar based on the current date
    // TODO: add a way to change the scale
    initCalendar(scale = "month") {
        if (scale === "month") {
            // build the month days
            this.calendar.content = this.buildMonthDays();
            // build the weeks
            this.calendar.scaleSet = this.buildWeeks(this.calendar.content, this.calendar.date.daysInMonth);
        }
    }
    // build the days for the current month
    buildMonthDays() {
        return new Array(this.calendar.date.daysInMonth)
            .fill({})
            .map((day, index) => {
            let currentDay = this.calendar.date
                .startOf("month")
                .plus({ days: index });
            day = {
                date: currentDay,
                name: currentDay.weekdayShort,
                num: currentDay.day,
                index: index,
                events: this.checkEvents(currentDay),
            };
            return day;
        });
    }
    // checks if a day has events saved in local storage
    checkEvents(date) {
        return this.savedEvents.filter((event) => {
            event.date = luxon__WEBPACK_IMPORTED_MODULE_4__["DateTime"].fromISO(event.date);
            return (event.date.day === date.day &&
                event.date.month === date.month &&
                event.date.year === date.year);
        });
    }
    // build the weeks for the current month and adds reference to the days
    buildWeeks(days, numberOfDays) {
        const numWeeks = Math.ceil(numberOfDays / 7);
        return new Array(numWeeks).fill([]).map((_, index) => {
            return days.slice(index * 7, (index + 1) * 7).map((day) => {
                return day.index;
            });
        });
    }
    // click on day to set active in the schedule
    setActiveDay(day) {
        this.scheduleService.updateActiveDate(day.date);
    }
    // adds an event to the calendar
    newEvent(e) {
        this.calendar.content[e.date.index].events.push(e.event);
        this.calendar.content[e.date.index].events.sort((a, b) => {
            return a.date.diff(b.date);
        });
        this.scheduleService.saveEvent(e.event);
    }
    // removes an event from the calendar
    deleteEvent(e) {
        this.calendar.content[e.date.index].events = this.calendar.content[e.date.index].events.filter((event) => {
            return event.name !== e.event.name;
        });
        this.scheduleService.deleteEvent(e.event);
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"] },
    { type: _schedule_service_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"] }
];
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-calendar",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")).default]
    })
], CalendarComponent);



/***/ }),

/***/ "./src/app/date-control/month-select/month-select.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/date-control/month-select/month-select.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGUtY29udHJvbC9tb250aC1zZWxlY3QvbW9udGgtc2VsZWN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/date-control/month-select/month-select.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/date-control/month-select/month-select.component.ts ***!
  \*********************************************************************/
/*! exports provided: MonthSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthSelectComponent", function() { return MonthSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time.service */ "./src/app/time.service.ts");



let MonthSelectComponent = class MonthSelectComponent {
    constructor(timeService) {
        this.timeService = timeService;
        this.date = null;
        this.nextMonth = null;
        this.prevMonth = null;
        this.prevYear = null;
        this.nextYear = null;
    }
    ngOnInit() {
        // get current date and set next month/year
        this.timeService.currentDate.subscribe((date) => {
            this.date = date;
            this.prevMonth = date.minus({ months: 1 });
            this.nextMonth = date.plus({ months: 1 });
            this.prevYear = date.minus({ years: 1 });
            this.nextYear = date.plus({ years: 1 });
        });
    }
    // update month and change year if necessary
    updateMonth(month) {
        if (this.date.month === 1 && month === 12) {
            this.timeService.updateDateTime(this.date.set({ month: month, year: this.date.year - 1 }));
        }
        else if (this.date.month === 12 && month === 1) {
            this.timeService.updateDateTime(this.date.set({ month: month, year: this.date.year + 1 }));
        }
        else {
            this.timeService.updateDateTime(this.date.set({ month: month }));
        }
    }
    // update year
    updateYear(year) {
        this.timeService.updateDateTime(this.date.set({ year: year }));
    }
};
MonthSelectComponent.ctorParameters = () => [
    { type: _time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"] }
];
MonthSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-month-select",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./month-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/date-control/month-select/month-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./month-select.component.css */ "./src/app/date-control/month-select/month-select.component.css")).default]
    })
], MonthSelectComponent);



/***/ }),

/***/ "./src/app/day/day.component.css":
/*!***************************************!*\
  !*** ./src/app/day/day.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".name {\n    font-size: 1rem;\n}\n\n.number {\n    font-size: 2rem;\n}\n\n.day {\n    border: 1px solid #ccc;\n    height: 10rem;\n    width: 10vw;\n    overflow: hidden;\n    cursor: pointer;\n}\n\n.current {\n    border: .25rem solid #307BFF;\n}\n\n.active {\n    background: #307BFF;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF5L2RheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFHQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGF5L2RheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLm51bWJlciB7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZGF5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGhlaWdodDogMTByZW07XG4gICAgd2lkdGg6IDEwdnc7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmN1cnJlbnQge1xuICAgIGJvcmRlcjogLjI1cmVtIHNvbGlkICMzMDdCRkY7XG59XG5cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMzMDdCRkY7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/day/day.component.ts":
/*!**************************************!*\
  !*** ./src/app/day/day.component.ts ***!
  \**************************************/
/*! exports provided: DayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayComponent", function() { return DayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time.service */ "./src/app/time.service.ts");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);




let DayComponent = class DayComponent {
    constructor(timeService) {
        this.timeService = timeService;
        this.activeDay = null;
    }
    ngOnInit() { }
    // checks if the day is today
    currentDay(day) {
        const today = luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].local();
        return (today.day === day.day &&
            today.month === day.month &&
            today.year === day.year);
    }
    // checks if the day is the active day
    isActive(day) {
        return (this.activeDay.day === day.day &&
            this.activeDay.month === day.month &&
            this.activeDay.year === day.year);
    }
    // converts the day to a string
    // 9:00 AM
    getTimeString(date) {
        return this.timeService.getTimeString(date);
    }
};
DayComponent.ctorParameters = () => [
    { type: _time_service__WEBPACK_IMPORTED_MODULE_2__["TimeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayComponent.prototype, "day", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DayComponent.prototype, "activeDay", void 0);
DayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-day",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/day/day.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./day.component.css */ "./src/app/day/day.component.css")).default]
    })
], DayComponent);



/***/ }),

/***/ "./src/app/schedule-service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/schedule-service.service.ts ***!
  \*********************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);




let ScheduleService = class ScheduleService {
    constructor() {
        this._activeDate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].local());
        this.activeDate = this._activeDate.asObservable();
    }
    // updates the observable date
    updateActiveDate(date) {
        this._activeDate.next(date);
    }
    // save event to local storage
    saveEvent(event) {
        const savedEvents = JSON.parse(localStorage.getItem("events"));
        if (savedEvents === null) {
            localStorage.setItem("events", JSON.stringify([event]));
        }
        else {
            savedEvents.push(event);
            localStorage.setItem("events", JSON.stringify(savedEvents));
        }
    }
    // retrieve saved events from local storage
    getSavedEvents() {
        const savedEvents = JSON.parse(localStorage.getItem("events"));
        if (savedEvents === null) {
            return [];
        }
        else {
            return savedEvents;
        }
    }
    // delete event from local storage
    deleteEvent(event) {
        const savedEvents = JSON.parse(localStorage.getItem("events"));
        if (savedEvents === null) {
            return;
        }
        else {
            const index = savedEvents.indexOf(event);
            savedEvents.splice(index, 1);
            localStorage.setItem("events", JSON.stringify(savedEvents));
        }
    }
};
ScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ScheduleService);



/***/ }),

/***/ "./src/app/schedule/schedule-date/schedule-date.component.css":
/*!********************************************************************!*\
  !*** ./src/app/schedule/schedule-date/schedule-date.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlL3NjaGVkdWxlLWRhdGUvc2NoZWR1bGUtZGF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/schedule/schedule-date/schedule-date.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/schedule/schedule-date/schedule-date.component.ts ***!
  \*******************************************************************/
/*! exports provided: ScheduleDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleDateComponent", function() { return ScheduleDateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _schedule_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schedule-service.service */ "./src/app/schedule-service.service.ts");
/* harmony import */ var _time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../time.service */ "./src/app/time.service.ts");




let ScheduleDateComponent = class ScheduleDateComponent {
    constructor(scheduleService, timeService) {
        this.scheduleService = scheduleService;
        this.timeService = timeService;
        this.emitNewEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitDeleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.activeDate = { events: [] };
        this.prevDay = null;
        this.nextDay = null;
        this.newEvent = false;
        this.eventName = "";
        this.eventTime = null;
    }
    ngOnInit() {
        // subscribe the active date and set the next and prev day
        this.scheduleService.activeDate.subscribe((date) => {
            this.activeDate = this.calendar.content[date.day - 1];
            this.prevDay = date.minus({ days: 1 });
            this.nextDay = date.plus({ days: 1 });
        });
    }
    // update the active date in the schedule and adjust month/year if needed
    updateDate(date) {
        if (this.calendar.date.month !== date.month ||
            this.calendar.date.year !== date.year) {
            this.timeService.updateDateTime(this.calendar.date.set({ month: date.month, year: date.year }));
        }
        this.scheduleService.updateActiveDate(date);
    }
    // show the new event form
    startNewEvent() {
        this.newEvent = true;
    }
    // remove the new event form
    cancelEvent() {
        this.newEvent = false;
        this.eventName = "";
        this.eventTime = null;
    }
    // convert the time and emit the new event to the cal component
    saveEvent() {
        if (this.eventName === "" || this.eventTime === null) {
            return;
        }
        let hour = this.eventTime.split(":")[0];
        let min = this.eventTime.split(":")[1];
        const eventDate = this.activeDate.date.set({
            hour: parseInt(hour),
            minute: parseInt(min),
        });
        const event = {
            name: this.eventName,
            date: eventDate,
        };
        this.emitNewEvent.emit({ date: this.activeDate, event: event });
        this.cancelEvent();
    }
    // convert the time to a string
    // 9:00 AM
    getTimeString(date) {
        return this.timeService.getTimeString(date);
    }
    // emit the delete event to the cal component
    deleteEvent(event) {
        this.emitDeleteEvent.emit({ date: this.activeDate, event: event });
    }
};
ScheduleDateComponent.ctorParameters = () => [
    { type: _schedule_service_service__WEBPACK_IMPORTED_MODULE_2__["ScheduleService"] },
    { type: _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScheduleDateComponent.prototype, "calendar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScheduleDateComponent.prototype, "emitNewEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ScheduleDateComponent.prototype, "emitDeleteEvent", void 0);
ScheduleDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-schedule-date",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule-date.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule-date/schedule-date.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule-date.component.css */ "./src/app/schedule/schedule-date/schedule-date.component.css")).default]
    })
], ScheduleDateComponent);



/***/ }),

/***/ "./src/app/time.service.ts":
/*!*********************************!*\
  !*** ./src/app/time.service.ts ***!
  \*********************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);




let TimeService = class TimeService {
    constructor() {
        this._currentDate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].local());
        this.currentDate = this._currentDate.asObservable();
    }
    // updates the observable date
    updateDateTime(date) {
        this._currentDate.next(date);
    }
    // convert time to short string
    // e.g. "9:00 AM"
    getTimeString(date) {
        return date.toLocaleString(luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].TIME_SIMPLE);
    }
};
TimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], TimeService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/warlock/google-cal/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map