import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { NavbarService } from 'src/app/shared/navbar/navbar.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

  // When using this component as modal, there is usually
  // no need to edit the account
  @Input() allowEdit = true;

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
    private tokenService: TokenService,
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
      { title: `@${this.user.username} Posts List` },
      { module: 'Posts', component: 'PostsList',
        params: {queryUrl, showOptPosts: false} }
    ];
    const modal = {type: 'default', content};
    const location = {action:'add', stack:['List', 'Posts'], remove: 1};
    this.modalService.open(modal, location);
  }

  openList(populate) {
    // Close tooltip if exists
    this.modalService.closeByType('tooltip');

    const userId = this.user._id;

    const listName = populate[0].toUpperCase()+populate.slice(1);
    const content = [
      { title: `@${this.user.username} ${listName} list` },
      { module: 'Profile', component: 'UsersList',
        params: {userId, populate} }
    ];
    const modal = {type: 'default', content};
    const location = {action:'add', stack:['List', listName], remove: 1};
    this.modalService.open(modal, location, (c) => {
      this.user.count.following += c;
    });
  }

  follow() {
    if (!this.checkAuth('In order to follow someone you need to be logged in')) return;
    this.isFollowing = !this.isFollowing;
    this.user.count.followers += !this.isFollowing ? -1 : 1 ;
    this.profileService.follow(this.user._id).pipe(first()).subscribe();
  }

  goToUser(uid) {
    // Close tooltip if exists
    this.modalService.closeByType('tooltip');
    
    this.navbarService.go(`/u/${uid}/`);
    // this.router.navigate(['/u/'+uid]);
  }

  onEditAccount() {
    this.modalService.closeByType('tooltip');
    const aroba = `@${this.user.username}`;
    const content = [
      { title: `Editing ${aroba} profile` },
      { module: 'Profile', component: 'ProfileEdit', params: {user: this.user}}
    ];
    const modal = {type: 'extended', content};
    const location = {action:'add', stack:['Edit'], remove:1};
    this.modalService.open(modal, location, (updatedUser) => {
      this.user = Object.assign(this.user, updatedUser);
    });
  }

  private checkAuth(message) {
    if (this.tokenService.isLogged()) {
      return true;
    }
    else {
      // Close tooltip if exists
      this.modalService.closeByType('tooltip');
      // Open auth modal
      const modal = {type: 'default', content: [
        { title: message },
        { module: 'Auth', component: 'Login', params: {navigateEnd: false} }
      ]};
      const location = {action: 'add', stack: ['Login']};
      this.modalService.open(modal, location);
      return false
    }
  }

}
