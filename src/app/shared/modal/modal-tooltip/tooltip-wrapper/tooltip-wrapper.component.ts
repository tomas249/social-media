import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.css']
})
export class TooltipWrapperComponent implements OnInit, AfterViewInit {

  @ContentChild('obj') obj:ElementRef;
  @Input() params;

  @Input()
  set trigger(trigger) {
    if (trigger !== null) {
      trigger ? this.checkDelay() : this.closeTooltip() ;
    }
  }
  @Output() status = new EventEmitter<boolean>();

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  time;
  objDim;

  ngAfterViewInit() {
    this.obj.nativeElement.addEventListener('mouseenter', this.checkDelay.bind(this));
    this.wrapper.nativeElement.addEventListener('mouseleave', this.closeTooltip.bind(this));
  }

  checkDelay() {
    this.objDim = this.obj.nativeElement.getBoundingClientRect();
    
    const properties = (({width, height}) => ({width, height}))(this.objDim);
    for (const style in properties) {
      this.renderer.setStyle(this.wrapper.nativeElement, style, properties[style]+'px');
    }
    this.renderer.setStyle(this.wrapper.nativeElement, 'z-index', 3);

    this.status.emit(true);
    clearTimeout(this.time);
    this.time = setTimeout(() => this.openTooltip(), 1500);
  }

  @ViewChild('wrapper') wrapper: ElementRef;
  openTooltip() {
    // // Close other tooltips if exist
    this.modalService.closeByType('tooltip');

    const content = [
      { module: 'Profile', component:'ProfileCard', params: this.params}
    ];
    const params = {objDimensions: this.objDim};
    const modal = {type: 'tooltip', content, params, keepOpened:true};
    const location = {action: 'set', stack: ['@'+this.params.user.username]};
    this.modalService.open(modal, location, (status) => {
      this.status.emit(status)
    });
  }

  closeTooltip() {
    this.renderer.setStyle(this.wrapper.nativeElement, 'z-index', -1);
    this.status.emit(false);
    clearTimeout(this.time);
  }

}
