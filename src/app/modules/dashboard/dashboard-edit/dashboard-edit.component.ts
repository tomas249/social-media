import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {

  presetData;
  data;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.presetData = this.dashboardService.getSelectedPreset();
    if (!this.presetData) return;
    
    this.dashboardService.getQuery().subscribe(res => {
      this.data = res.data.data;
      console.log(this.data)
    })
  }

}
