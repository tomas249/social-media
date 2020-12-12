import { AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.css']
})
export class TooltipWrapperComponent implements OnInit, AfterViewInit {

  @Input() params;
  @ContentChild('obj') obj:ElementRef;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  time;

  ngAfterViewInit() {
    this.obj.nativeElement.addEventListener('mouseenter', this.checkDelay.bind(this));
    this.obj.nativeElement.addEventListener('mouseleave', this.closeTooltip.bind(this));
  }

  checkDelay() {
    clearTimeout(this.time);
    this.time = setTimeout(() => this.openTooltip(), 1500);
  }

  openTooltip() {
    const a = this.obj.nativeElement.getBoundingClientRect();
    const content = [
      // { title: 'You have nothing to do here' },
      { module: 'Profile', component:'ProfileCard', params: this.params}
      // { module: 'Auth', component:'Logout'}
    ];
    const params = {objDimensions: a};
    const modal = {type: 'tooltip', content, params, keepOpened:true};
    const location = {action: 'set', name: ['ACCOUNT']};
    this.modalService.open(modal, location);
  }

  closeTooltip() {
    clearTimeout(this.time);
  }

}
