import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard-select',
  templateUrl: './dashboard-select.component.html',
  styleUrls: ['./dashboard-select.component.css']
})
export class DashboardSelectComponent implements OnInit {

  selectedPreset;
  presetsList;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.presetsList = this.dashboardService.getPresets()
  }

  onSelectPreset(presetName) {
    this.selectedPreset = this.presetsList[presetName];
  }

  onQuery(preset) {
    this.dashboardService.selectPreset(preset);
  }

}
