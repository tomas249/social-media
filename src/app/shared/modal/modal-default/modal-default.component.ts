import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit {

  type = 'default';
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
