import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrl: './user-update.component.css'
})
export class UserUpdateComponent implements OnInit {

  @Input('id') idEmpleado!: number;
  private userService = inject(UserService);
  public formBuild = inject(FormBuilder);

  public formUser: FormGroup = this.formBuild.group({
    idUser: [0],
    userName: [''],
    name: [''],
    lastName: [''],
    identificationNumber: [''],
    phoneNumber: ['']
  });


  constructor(
    public dialogRef: MatDialogRef<User>,
    @Inject(MAT_DIALOG_DATA)
    public user: User
  ) {

  }

  ngOnInit(): void {
    this.formUser.reset(this.user);
  }

  dialogoSave(): void {
    this.userService.putUser(this.formUser.getRawValue()).subscribe(data => {
      if (data.idUser != 0) this.dialogRef.close(true);
    });

  }

  dialogClose(): void {
    this.dialogRef.close(false);
  }

}
