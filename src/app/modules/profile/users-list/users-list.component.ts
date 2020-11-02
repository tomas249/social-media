import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ProfileService } from '../profile.service';
import { TooltipService } from 'src/app/shared/tooltip/tooltip.service';
import { TokenService } from 'src/app/services/token.service';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  loading = true;
  usersList;

  currentUserId = null;
  userId = null;
  usersField = null;

  constructor(
    private profileService: ProfileService,
    private tooltip: TooltipService,
    private token: TokenService,
    private modal: ModalService
  ) { }

  ngOnInit(): void {
    this.profileService.getFollowsFromUser(this.userId, this.usersField)
    .subscribe(res => {
      this.usersList = res.data[0][this.usersField];
      this.loading = false;
    });
  }

  // @ViewChild('img') img:ElementRef
  @ViewChildren('img') img: QueryList<ElementRef>
  image;
  openTooltip(user, i) {
    this.image = this.img.toArray()[i];
    this.image.nativeElement.style.zIndex = '10';
    const a = this.image.nativeElement.getBoundingClientRect();
    const start = a.y;
    const X = a.x + a.width / 2;
    const Y = a.y + a.height;
    this.tooltip.open(start, X, Y, 'ProfileModule', 'ProfileCardComponent', {user});
  }

  closeTooltip() {
    this.tooltip.close();
    this.image.nativeElement.style.zIndex = '2';
  }

  doesItFollow(userId) {
    return this.profileService.checkIfFollowsByList(userId);
  }

  followUser(user) {
    if (!this.checkAuth('In order to follow someone you need to be logged in')) return;
    const follows = this.doesItFollow(user._id);
    if (follows) user.count.followers -= 1;
    else user.count.followers += 1;
    // this.follows = !this.follows;
    this.profileService.followUser(user._id).subscribe(res => {
      // this.user = res.followingCount;
      // console.log(res);
    })
  }


  checkAuth(message) {
    if (!this.token.isLogged()) {
      this.tooltip.close(true);
      // this.modal.addMessage(message);
      // this.modal.open('AuthModule', 'LoginComponent', {navigateEnd: false});
      return false;
    } else {
      return true;
    }
  }

}
