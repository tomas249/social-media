"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TooltipWrapperComponent = void 0;
var core_1 = require("@angular/core");
var TooltipWrapperComponent = /** @class */ (function () {
    function TooltipWrapperComponent(tooltip) {
        this.tooltip = tooltip;
    }
    TooltipWrapperComponent.prototype.ngOnInit = function () {
    };
    TooltipWrapperComponent.prototype.ngAfterViewInit = function () {
        this.tooltipContent.nativeElement.addEventListener('mouseenter', this.checkDelay.bind(this));
        this.tooltipContent.nativeElement.addEventListener('mouseleave', this.closeTooltip.bind(this));
    };
    TooltipWrapperComponent.prototype.checkDelay = function () {
        var _this = this;
        clearTimeout(this.time);
        this.time = setTimeout(function () { return _this.openTooltip(); }, 2000);
    };
    TooltipWrapperComponent.prototype.openTooltip = function () {
        this.tooltipContent.nativeElement.style.zIndex = '10';
        var a = this.tooltipContent.nativeElement.getBoundingClientRect();
        var start = a.y;
        var X = a.x + a.width / 2;
        var Y = a.y + a.height;
        this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', this.params);
    };
    TooltipWrapperComponent.prototype.closeTooltip = function () {
        clearTimeout(this.time);
        this.tooltip.close();
        this.tooltipContent.nativeElement.style.zIndex = '2';
    };
    __decorate([
        core_1.Input()
    ], TooltipWrapperComponent.prototype, "params");
    __decorate([
        core_1.ContentChild('tooltipContent')
    ], TooltipWrapperComponent.prototype, "tooltipContent");
    TooltipWrapperComponent = __decorate([
        core_1.Component({
            selector: 'tooltip-wrapper',
            templateUrl: './tooltip-wrapper.component.html',
            styleUrls: ['./tooltip-wrapper.component.css']
        })
    ], TooltipWrapperComponent);
    return TooltipWrapperComponent;
}());
exports.TooltipWrapperComponent = TooltipWrapperComponent;
