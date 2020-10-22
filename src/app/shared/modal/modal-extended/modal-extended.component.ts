import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-extended',
  templateUrl: './modal-extended.component.html',
  styleUrls: ['./modal-extended.component.css']
})
export class ModalExtendedComponent implements OnInit {

  display = false;
  displayMessage = false;
  mContent = null;

  id = -1;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.initiate('extendedModal', this);
  }

}
