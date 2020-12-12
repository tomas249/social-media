import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-extended',
  templateUrl: './modal-extended.component.html',
  styleUrls: ['./modal-extended.component.css']
})
export class ModalExtendedComponent implements OnInit {

  type = 'extended';
  display = false;

  constructor(
    private modalService: ModalService
  ) { }
  
  ngOnInit(): void {
    this.modalService.initType(this.type, this);
  }

  onClose() {
    this.modalService.forceClose();
  }

  displayModal() {
    this.display = true;
  }

  hideModal() {
    this.display = false;
  }

}
