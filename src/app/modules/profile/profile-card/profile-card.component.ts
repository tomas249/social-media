import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnDestroy, OnChanges {

  follows = null;
  loadingFollows = true;
  @Input() allowEdit = false;
  @Input() allowRouter = true;
  @Input() user;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private tooltip: TooltipService,
    private modal: ModalService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.profileService.checkIfFollows(this.user._id).subscribe(
      res => {
        this.follows = res;
        this.loadingFollows = false;
      }
    )
  }

  ngOnDestroy(): void {
    this.profileService.removeUser();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user && !changes.user.firstChange) {
      this.follows = this.profileService.checkIfFollowsByList(changes.user.currentValue._id)
    }
  }

  goToUser(username) {
    if (!this.allowRouter) return;
    this.modal.close();
    this.profileService.setUser(this.user);
    this.tooltip.close(true);
    this.router.navigate(['/u/' + username]);
  }

  openList(field) {
    this.tooltip.close(true);
    const currentUserId = this.token.getUserId();
    // console.log({currentUserId, userId: this.user._id, usersField: field})
    this.modal.open('ProfileModule', 'UsersListComponent', 
    {currentUserId, userId: this.user._id, usersField: field});
  }

  followUser(userId) {
    if (!this.checkAuth('In order to follow someone you need to be logged in')) return;
    if (this.follows) this.user.count.followers -= 1;
    else this.user.count.followers += 1;
    this.follows = !this.follows;
    this.profileService.followUser(userId).subscribe(res => {
      // this.user = res.followingCount;
      // console.log(res);
    })
  }

  checkAuth(message) {
    if (!this.token.isLogged()) {
      this.tooltip.close(true);
      this.modal.addMessage(message);
      this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
      return false;
    } else {
      return true;
    }
  }

  onEditUser() {
    this.modal.open('ProfileModule', 'UserEditComponent', {user: this.user});
    this.modal.waitForResponse().subscribe(res => {
      if (res) {
        console.log(res)
        Object.assign(this.user, res.user);
      }
    })
  }

}
