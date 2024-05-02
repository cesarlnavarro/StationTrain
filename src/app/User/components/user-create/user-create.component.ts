import { Component, Input, OnInit, inject } from '@angular/core';
import { User } from '../../interfaces/user';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent  {

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
  ) {

  }


  dialogoSave(): void {
    this.userService.postUser(this.formUser.getRawValue()).subscribe(data => {
      if (data.idUser != 0) this.dialogRef.close(true);
    });

  }

  dialogClose(): void {
    this.dialogRef.close(false);
  }
}
