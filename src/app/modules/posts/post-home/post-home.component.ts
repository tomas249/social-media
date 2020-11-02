import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from '../posts.service';
import { LocationService } from 'src/app/services/location.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-post-home',
  templateUrl: './post-home.component.html',
  styleUrls: ['./post-home.component.css']
})
export class PostHomeComponent implements OnInit, OnDestroy {

  isLogged = false;
  loading = true;

  constructor(
    private postsService: PostsService,
    private locationService: LocationService,
    private token: TokenService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.locationService.finishComposition();
    this.postsService.allowSearch = false;
    // this.locationService.addChildLoc('Home', {extend: false});
    // this.token.subscribeAcc().subscribe(
    //   res => {
    //     this.isLogged = !!res;
    //     if (this.isLogged && this.loading) {
    //       this.loading = false;
    //       this.postsService.getFollowersPosts();
    //     }
    //   }
    // );

  }

  ngOnDestroy() {
    this.postsService.allowSearch = true;
    // this.locationService.removeChildLoc(true);
  }

}
