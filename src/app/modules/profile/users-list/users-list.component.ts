import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  userId = null;
  populate = null;
  list;

  count = 0;

  constructor(
    private profileService: ProfileService,
    private modalService: ModalService,
    private navbarService: NavbarService,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.profileService.isFollowingFromList(this.userId, this.populate)
    .pipe(first())
    .subscribe(list => {
      this.list = list;
    });
      // this.list = f[this.populate].map(u => {
        
      //   // const [isFollowing, isOwner] = this.profileService.isFollowing(u._id);
      //   // return {
      //   //   isOwner,
      //   //   isFollowing,
      //   //   user: u
      //   // };
      // });

  }

  follow(item) {
    item.isFollowing = !item.isFollowing;
    item.user.count.followers += !item.isFollowing ? -1 : 1 ;
    this.count += !item.isFollowing ? -1 : 1 ;
    this.profileService.follow(item.user._id).pipe(first()).subscribe();
  }

  go(uid) {
    // Close tooltip if exists
    // this.modalService.closeByType('tooltip');
    this.modalService.forceClose();
    this.navbarService.go(`/u/${uid}/`);
  }

  ngOnDestroy(): void {
    this.modalService.emitResponse(false, this.count);
  }

}
