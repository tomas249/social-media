"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalExtendedComponent = void 0;
var core_1 = require("@angular/core");
var ModalExtendedComponent = /** @class */ (function () {
    function ModalExtendedComponent(modalService) {
        this.modalService = modalService;
        this.display = false;
        this.displayMessage = false;
        this.mContent = null;
        this.id = -1;
    }
    ModalExtendedComponent.prototype.ngOnInit = function () {
        this.modalService.initiate('extended', this);
    };
    ModalExtendedComponent = __decorate([
        core_1.Component({
            selector: 'modal-extended',
            templateUrl: './modal-extended.component.html',
            styleUrls: ['./modal-extended.component.css']
        })
    ], ModalExtendedComponent);
    return ModalExtendedComponent;
}());
exports.ModalExtendedComponent = ModalExtendedComponent;
