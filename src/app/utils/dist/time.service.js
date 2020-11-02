"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TimeService = void 0;
var core_1 = require("@angular/core");
var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.getTime = function (givenDate) {
        // Local Date
        var d = new Date();
        var localTime = d.getTime();
        var localOffset = d.getTimezoneOffset() * 60000;
        // UTC in msec
        var utc = localTime + localOffset;
        // UTC+2 in msec
        var utc2 = utc + 3600000 * 2;
        // Publication Date
        var date = new Date(givenDate);
        var dtMillisec = date.getTime(); // in msec
        // Difference
        var difDtMillisec = utc2 - dtMillisec;
        var difDate = new Date(difDtMillisec);
        var hours = difDate.getHours();
        var min = difDate.getMinutes();
        var result;
        if (hours == 1) {
            result = 'an hour ago';
        }
        else if (hours > 0) {
            result = hours + ' hours ago';
        }
        else if (min <= 1) {
            result = 'a minute ago';
        }
        else {
            result = min + ' minutes ago';
        }
        return result.toString();
    };
    TimeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TimeService);
    return TimeService;
}());
exports.TimeService = TimeService;
