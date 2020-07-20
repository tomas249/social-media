import { Component, OnInit, ViewChild, Input, HostListener, Output, EventEmitter, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  @ViewChild('contentWrapper') content: ElementRef;

  @ViewChild('modal') modal;
  @Input('name') modalName;

  displayModal = false;

  constructor(
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Create modal
    console.log('Modal created, with name:', this.modalName);
  }

  addContent(template) {
    // this.content.nativeElement.insertAdjacentHTML('beforeend', message)
    this.content.nativeElement.innerHTML = template;
  }

  openModal() {
    this.displayModal = true;
  }

  closeModal() {
    this.displayModal = false;
  }


  // On click outside modal
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (event.target === this.modal.nativeElement) {
      this.closeModal();
    }
  }
}
