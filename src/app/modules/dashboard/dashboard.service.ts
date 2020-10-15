import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { presetsList } from './presets';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  presets = presetsList;
  selectedPreset;
  apiConfig;

  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  // Step 1
  getPresets() {
    return this.presets;
  }

  selectPreset(preset) {
    this.selectedPreset = preset.slice(1);
    this.apiConfig = preset[0];
    this.router.navigate(['/full/dashboard/edit']);
  }

  // Step 2
  getSelectedPreset() {
    if (!this.selectedPreset) {
      this.router.navigate(['/full/dashboard/select']);
      return false;
    }
    return this.selectedPreset;
  }

  getQuery() {
    return this.api.get(this.apiConfig.endpoint);
  }
}
