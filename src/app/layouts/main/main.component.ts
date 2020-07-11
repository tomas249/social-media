import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  navItems: any[] = [];
  locationName: string;
  user;

  constructor(
    private locationService: LocationService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.locationService.subscribeNavItems().subscribe(
      res => 
      setTimeout(() =>{
        this.navItems = res;
      })
    );
    this.locationService.subscribeLocation().subscribe(
      res => 
      setTimeout(() =>{
        this.locationName = res;
      })
    );
    this.token.subscribeAcc().subscribe(
      res =>
      setTimeout(() =>{
        this.user = res;
      })
    );
  }

}
