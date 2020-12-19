import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'modal-tooltip',
  templateUrl: './modal-tooltip.component.html',
  styleUrls: ['./modal-tooltip.component.css']
})
export class ModalTooltipComponent implements OnInit {

  type = 'tooltip';
  display = false;

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

  tltpWidth = 300;
  tltpHeigthMin = 200;

  tltpTop;
  tltpBottom;
  tltpLeft;
  tltpRight;

  maskWidth;
  maskHeight;
  maskTop;
  maskLeft;

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.initType(this.type, this);
  }


  displayModal() {
    // Redefine
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
    this.maskWidth = w + 30;
    this.maskTop = t - 15;
    this.maskLeft = l - 15;

    // Get window dimensions
    const wH = window.innerHeight;
    const wW = window.innerWidth;
    
    // Calculate direction of tooltip
    const betterTop = y > wH/2;
    // const betterLeft = x < wW/2;
    if (betterTop) {
      this.tltpBottom = wH-this.maskTop;
    } else {
      this.tltpTop = this.maskTop+this.maskHeight;
    }
    this.tltpLeft = this.maskLeft + this.maskWidth/2 - this.tltpWidth/2;

    this.display = true;
  }

  hideModal() {
    this.display = false;

  }

  onClose() {
    this.modalService.closeByType(this.type);
  }

}
