import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-extended',
  templateUrl: './modal-extended.component.html',
  styleUrls: ['./modal-extended.component.css']
})
export class ModalExtendedComponent implements OnInit {

  @ViewChild('modalContainer') modalContainer: ElementRef;

  type = 'extended';
  display = false;

  constructor(
    private modalService: ModalService
  ) { }
  
  ngOnInit(): void {
    this.modalService.initType(this.type, this);
  }

  // Close when clicking outside modal
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target === this.modalContainer.nativeElement) {
      this.onClose();
    }
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
