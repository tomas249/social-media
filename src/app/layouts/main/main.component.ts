import { Component, OnInit, AfterViewInit, ContentChild } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { Router, Route, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
    private token: TokenService,
    private modal: ModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.locationService.subscribeNavItems().subscribe(
      res => 
      setTimeout(() =>{
        this.navItems = res;
        console.log(this.navItems)
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

  goTo(item) {
    if (this.navItems[0].selected !== item.name) {
      this.navItems[0].selected = item.name;
    }

    if (this.navItems[0].type === 'modal') {
      this.modal.change(item.modalPath);
    } else {
      this.router.navigate([item.path]);
    }
  }

  post() {
    this.modal.open('PostsModule', 'PostPublishComponent')
  }

}
