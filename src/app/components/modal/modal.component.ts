import { Component, OnInit, ViewChild, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('modal') modal;

  @Output() close = new EventEmitter()


  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }

  closeModal() {
    this.close.emit();
  }

}
