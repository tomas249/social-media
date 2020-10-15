import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private modal: ModalService
  ) { }

  ngOnInit(): void {
  }

  onLoadSelectView() {
    this.modal.open('DashboardModule', 'DashboardSelectComponent');
  }

}
