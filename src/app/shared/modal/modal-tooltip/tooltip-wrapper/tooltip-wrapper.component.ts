import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ModalService } from '../../modal.service';

@Component({
  selector: 'tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.css']
})
export class TooltipWrapperComponent implements OnInit, AfterViewInit {

  @ViewChild('wrapper') wrapper: ElementRef;
  @ViewChild('animation') animation: ElementRef;
  @Output('clicked') clicked = new EventEmitter();
  @ContentChild('obj') obj:ElementRef;
  @Input() params;

  @Input()
  set trigger(trigger) {
    trigger.addEventListener('mouseenter', this.checkDelay.bind(this));
    trigger.addEventListener('mouseleave', this.closeTooltip.bind(this));
    trigger.addEventListener('click', this.onClick.bind(this));
  }

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
  }

  time;
  objDim;

  ngAfterViewInit() {
    this.objDim = this.obj.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.wrapper.nativeElement, 'width', this.objDim['width']+'px');
    this.renderer.setStyle(this.wrapper.nativeElement, 'height', this.objDim['height']+'px');

    this.wrapper.nativeElement.addEventListener('mouseenter', this.checkDelay.bind(this));
    this.wrapper.nativeElement.addEventListener('mouseleave', this.closeTooltip.bind(this));
    this.wrapper.nativeElement.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    clearTimeout(this.time);
    this.clicked.emit(this.params.user._id);
  }

  checkDelay() {
    this.animation.nativeElement.className = 'loading-avatar';
    clearTimeout(this.time);
    this.time = setTimeout(() => this.openTooltip(), 1500);
  }

  openTooltip() {
    // Close other tooltips if exist
    this.modalService.closeByType('tooltip');

    const content = [
      { module: 'Profile', component:'ProfileCard', params: this.params}
    ];
    const params = {objDimensions: this.objDim};
    const modal = {type: 'tooltip', content, params, keepOpened:true};
    const location = {action: 'set', stack: ['@'+this.params.user.username]};
    this.modalService.open(modal, location, _ => {
      this.closeTooltip();
    });
  }

  closeTooltip() {
    this.renderer.removeClass(this.animation.nativeElement, 'loading-avatar');
    clearTimeout(this.time);
  }

}
