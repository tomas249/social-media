import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user = null;

  constructor(
    private modal: ModalService,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  onSave(name, description) {
    if (!name || !description) return;
    const updatedUser = {
      name: name.value,
      description: description.value
    };
    this.modal.emitResponse({user: updatedUser});
    this.modal.close();
    this.profileService.updateUserData(updatedUser).subscribe(
      res => {}, err => console.error(err)
    );
  }

}
