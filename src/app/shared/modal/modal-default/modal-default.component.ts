import { Component, ElementRef, HostListener, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-default',
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.css']
})
export class ModalDefaultComponent implements OnInit {

  @ViewChild('modalContainer') modalContainer: ElementRef;

  type = 'default';
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
