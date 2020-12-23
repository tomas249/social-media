import { Component, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-tooltip',
  templateUrl: './modal-tooltip.component.html',
  styleUrls: ['./modal-tooltip.component.css']
})
export class ModalTooltipComponent implements OnInit {

  type = 'tooltip';
  display = false;

  @ViewChild('tooltip') tooltip: ElementRef;

  // Set properties to null in order to access them from service
  objDimensions: {
    bottom: number,
    height: number,
    left: number,
    right: number,
    top: number,
    width: number,
    x: number,
    y: number
  } = null;

  // Initial tooltip dimensions 
  tltpWidth = 342;
  tltpHeigth = 500;
  tltpHeigthMin = 200;

  // Final tooltip dimensions 
  tltpTop;
  tltpBottom;
  tltpLeft;
  tltpRight;

  // Triggerer mask
  maskWidth;
  maskHeight;
  maskTop;
  maskBottom;
  maskLeft;
  maskRight;

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.modalService.initType(this.type, this);
  }

  displayModal() {
    let tltpTop;
    let tltpBottom;

    // Triggerer object dimensions
    const h = this.objDimensions.height;
    const w = this.objDimensions.width;
    const t = this.objDimensions.top;
    const b = this.objDimensions.bottom;
    const l = this.objDimensions.left;
    const r = this.objDimensions.right;
    const x = this.objDimensions.x;
    const y = this.objDimensions.y;

    // Expand mask dimensions
    this.maskHeight = h + 30;
    this.maskWidth = (w + 30)*3;
    this.maskTop = t - 15;
    this.maskLeft = l - 15;

    // Set supositions
    const tH = this.tltpHeigth;
    const tW = this.tltpWidth;
    
    // Get window dimensions
    const wH = window.innerHeight;
    const wW = window.innerWidth;

    // Values to choose best tooltip position
    const availableSpaceX = tW < x;
    const availableSpaceY = tH < this.maskTop-this.maskHeight/2 && tH < wH-y; // Check top/bottom space
    
    const betterTop = y > wH/2 ? 0 : 1;

    const axisY = [
      () => tltpBottom = wH-this.maskTop,
      () => tltpTop = this.maskTop+this.maskHeight
    ];

    // Choose from 5 existing positions
    if (availableSpaceX) {
      axisY[betterTop]();
      this.tltpLeft = this.maskLeft + this.maskWidth/2 - tW/2;
    }
    else if (availableSpaceY) {
      this.tltpLeft = this.maskLeft+this.maskWidth;
      tltpTop = this.maskTop-this.maskHeight/2;
    }
    else if (!availableSpaceY) {
      axisY[betterTop]();
      this.tltpLeft = this.maskLeft;
    }

    // Regulate bottom mask height
    if (this.maskTop + this.maskHeight > wH) {
      this.maskHeight -= wH - this.maskTop + this.maskHeight;
    }

    this.renderer.setStyle(this.tooltip.nativeElement, 'top', tltpTop+'px');
    this.renderer.setStyle(this.tooltip.nativeElement, 'bottom', tltpBottom+'px');
    this.display = true;

  }

  hideModal() {
    this.display = false;
  }
  
  onClose() {
    // Reset this values because they are not used in each tooltip
    this.renderer.removeStyle(this.tooltip.nativeElement, 'top');
    this.renderer.removeStyle(this.tooltip.nativeElement, 'bottom');


    this.modalService.emitResponse(false, false);
    this.modalService.closeByType(this.type);
  }
}
