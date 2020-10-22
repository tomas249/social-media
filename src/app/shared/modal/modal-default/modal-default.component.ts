import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit {

  display = false;
  displayMessage = false;

  constructor(
    private modalService: ModalService
  ) { }

  id = -1;
  text = '000';

  mContent;


  ngOnInit(): void {
    this.modalService.initiate('defaultModal', this);
  }


  close() {}

}




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