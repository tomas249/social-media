import { Component, OnInit, ViewChild, ElementRef, Input, ContentChild, AfterContentInit, HostListener, AfterViewInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';

@Component({
  selector: 'tooltip-wrapper',
  templateUrl: './tooltip-wrapper.component.html',
  styleUrls: ['./tooltip-wrapper.component.css']
})
export class TooltipWrapperComponent implements OnInit, AfterViewInit {

  @Input() params;
  @ContentChild('tooltipContent') tooltipContent: ElementRef;

  constructor(
    private tooltip: TooltipService
  ) { }

  ngOnInit(): void {
  }

  time;

  ngAfterViewInit() {
    this.tooltipContent.nativeElement.addEventListener('mouseenter', this.checkDelay.bind(this));
    this.tooltipContent.nativeElement.addEventListener('mouseleave', this.closeTooltip.bind(this));
  }

  checkDelay() {
    clearTimeout(this.time);
    this.time = setTimeout(() => this.openTooltip(), 2000);
  }

  openTooltip() {
    this.tooltipContent.nativeElement.style.zIndex = '10';
    const a = this.tooltipContent.nativeElement.getBoundingClientRect();
    const start = a.y;
    const X = a.x + a.width / 2;
    const Y = a.y + a.height;
    this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', this.params);
  }

  closeTooltip() {
    clearTimeout(this.time);
    this.tooltip.close();
    this.tooltipContent.nativeElement.style.zIndex = '2';
  }

}
