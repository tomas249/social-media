import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ProfileService } from '../profile.service';
import { tap, flatMap, switchMap, filter, takeLast, map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = null;
  avatarUrl; // showAvatar
  selectedImage: File = null;

  constructor(
    private modal: ModalService,
    private profileService: ProfileService,
    private token: TokenService
  ) { }

  ngOnInit(): void {
    this.avatarUrl = this.user.avatar.fullPath;
  }

  @ViewChild('imageSelect') imageSelect: ElementRef
  onImageSelect(event) {
    const image = event.target.files[0];
    
    // Set image file
    this.selectedImage = image;
    // Display image
    this.createFormData(image, url => { this.avatarUrl = url });
  }

  onCancelSelectedImage() {
    this.avatarUrl = this.user.avatar.fullPath;
    this.selectedImage = null;
  }

  onSave(name, description) {
    // Validate
    if (!name || !description) return;
    let updatedUser = {
      name: name.value,
      description: description.value
    };

    let subscription;
    // if (this.selectedImage) {
    //   subscription = this.getNewAvatarUrl().pipe(
    //     tap(avatarPath => {
    //       updatedUser['avatar'] = {
    //         filename: avatarPath,
    //         relativePath: `/a/${avatarPath}`,
    //         fullPath: `${environment.baseUrl}/a/${avatarPath}`
    //       };
    //       // this.token.updateData({ avatar: updatedUser['avatar'] });
    //     }),
    //     switchMap(_ => this.profileService.updateUserData(updatedUser))
    //   );
    // } else {
    //   subscription = this.profileService.updateUserData(updatedUser);
    // }
    
    subscription.subscribe(res => {
      // this.modal.emitResponse({user: res.data});
      // this.modal.close();
    });
  }

  showUploadProgress = false;
  uploadProgress: any = 0;
  private getNewAvatarUrl() {
    this.showUploadProgress = true;
    // return this.profileService.updateAvatar(this.selectedImage).pipe(
    //   tap(res => {
    //     if (res.progress) {
    //       this.uploadProgress = res.progress;
    //     }
    //     else if (res.completed) {
    //       this.uploadProgress = 'Uploaded';
    //     }
    //   }),
    //   takeLast(1),
    //   map(res => res.avatarPath)
    // );
  }

  private createFormData(file, cb) {
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.onload = (_event:any) => { 
      // Clear file input
      this.imageSelect.nativeElement.value = '';
      cb(reader.result)
    };
  }

}
