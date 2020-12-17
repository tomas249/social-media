import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { flatMap, map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  user = null;

  avatarUrl;
  selectedImg;

  uploadProgress;

  @ViewChild('imageSelectInput') imageSelect: ElementRef


  constructor(
    private profileService: ProfileService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.avatarUrl = this.user.avatar.fullPath;
  }

  onImageSelect(event) {
    const image = event.target.files[0];
    // Set image file
    this.selectedImg = image;
    // Display image
    this.createFormData(image, url => { this.avatarUrl = url });
  }

  onCancelSelectedImage() {
    this.avatarUrl = this.user.avatar.fullPath;
    this.selectedImg = null;
  }

  onSave(name, description) {
    // Validate
    if (!name || !description) return;
    let updatedUser = {name, description};

    // Different subscription if avatar is updated too
    let subscription;
    if (this.selectedImg) {
      subscription = this.profileService.updateAvatar(this.selectedImg).pipe(
        mergeMap((res:{completed, message, avatar, progress}) => {
          if (res.completed) {
            const user = Object.assign(updatedUser, {avatar: res.avatar})
            return this.profileService.updateUserData(user);
          }
          else {
            return of(res);
          }
        })
      );
    }
    else {
      subscription = this.profileService.updateUserData(updatedUser);
    }
    
    subscription.subscribe(res => {
      if (res.hasOwnProperty('progress')) {
        this.uploadProgress = res.progress;
      }
      else if (res.success) {
        this.uploadProgress = false; 
        this.modalService.emitResponse(true, res.data);
      }
    });

  }

  /**
   * Image functions
   */

  private createFormData(file, cb) {
    const reader = new FileReader;
    reader.readAsDataURL(file);
    reader.onload = (_event:any) => { 
      // Clear file input
      this.imageSelect.nativeElement.value = '';
      cb(reader.result)
    };
  }

  private tempFilter(media) {
    let response: {format: string, valid: boolean, message: string} = {
      format: null,
      valid: null,
      message: null
    };
    const splittedFormat = media.type.match(/(\w+)\/(\w+)?/);
    response.format = splittedFormat[1]
    if (response.format === 'video') {
      response.valid = !(media.size > 15000000);
      response.message = 'Max size is 15MB';
    }
    else if (response.format === 'image') {
      response.valid = true;
    }
    else {
      response.valid = false;
      response.message = `'<strong>${splittedFormat[2]}</strong>' is not a valid format.`;
    }
    return response;
  }

}
