import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  isFollowing;
  isOwner = true;

  _user;
  @Input() 
  set user(user) {
    this._user = {...user};

    this.profileService.isFollowing(user._id).subscribe(([f, o]) => {
      this.isFollowing = f;
      this.isOwner = o;
    });

    
  }
  get user() {
    return this._user;
  }



  constructor(
    private modalService: ModalService,
    private profileService: ProfileService,
    private navbarService: NavbarService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openPosts() {
    // Close tooltip if exists
    this.modalService.closeByType('tooltip')

    const uid = this.user._id;
    const queryUrl = `/posts?owner=${uid}&parent[size]=0&childLevel=0`

    const content = [
      { title: 'Posts' },
      { module: 'Posts', component: 'PostsList',
        params: {queryUrl} }
    ];
    const modal = {type: 'default', content};
    const location = {action:'add', name:['Posts']};
    this.modalService.open(modal, location);
  }

  openList(populate) {
    // Close tooltip if exists
    this.modalService.closeByType('tooltip');

    const userId = this.user._id;

    const content = [
      { title: populate[0].toUpperCase()+populate.slice(1)+' list' },
      { module: 'Profile', component: 'UsersList',
        params: {userId, populate} }
    ];
    const modal = {type: 'default', content};
    const location = {action:'add', name:['List']};
    this.modalService.open(modal, location, (c) => {
      this.user.count.following += c;
    });
  }

  follow() {
    this.isFollowing = !this.isFollowing;
    this.user.count.followers += !this.isFollowing ? -1 : 1 ;
    this.profileService.follow(this.user._id).pipe(first()).subscribe();
  }

  go(uid) {
    // Close tooltip if exists
    this.modalService.closeByType('tooltip');
    
    this.navbarService.go(`/u/${uid}/`);
    // this.router.navigate(['/u/'+uid]);
  }

}
