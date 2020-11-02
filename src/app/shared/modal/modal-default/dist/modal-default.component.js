"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ModalDefaultComponent = void 0;
var core_1 = require("@angular/core");
var ModalDefaultComponent = /** @class */ (function () {
    function ModalDefaultComponent(modalService) {
        this.modalService = modalService;
        this.display = false;
        this.displayMessage = false;
        this.id = -1;
    }
    ModalDefaultComponent.prototype.ngOnInit = function () {
        this.modalService.initiate('default', this);
    };
    ModalDefaultComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes);
        if (changes.id) {
            console.warn({
                prev: changes.id.previousValue,
                curr: changes.id.currentValue
            });
        }
    };
    ModalDefaultComponent.prototype.close = function () {
        console.log(this.id);
    };
    ModalDefaultComponent = __decorate([
        core_1.Component({
            selector: 'modal-default',
            templateUrl: './modal-default.component.html',
            styleUrls: ['./modal-default.component.css']
        })
    ], ModalDefaultComponent);
    return ModalDefaultComponent;
}());
exports.ModalDefaultComponent = ModalDefaultComponent;
// <!-- The Modal -->
// <div #modalContainer class="modal" [style.display]="display ? 'block' : 'none'">
//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close" (click)="close()">&times;</span>
//     <!-- MODAL NG CONTENT -->
//     <div>
//       <div class="message" #message [style.display]="displayMessage ? 'block' : 'none'">
//         <hr>
//       </div>
//       <ng-container #content></ng-container>
//       <modal-core [mType]="'defaultModal'"></modal-core>
//     </div>
//   </div>
// </div>
