import { Component, OnInit, createComponent } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserUpdateComponent } from '../../components/user-update/user-update.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  user: User;
  displayedColumns: string[] = ['idUser', 'userName', 'name', 'lastName', 'identificationNumber', 'phoneNumber', 'update','delete'];

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar) {

      this.user = {
      idUser: 0,
      identificationNumber: "",
      lastName: "",
      name: "",
      phoneNumber: "",
      userName: ""
    }
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(): void {
    this.userService.getUser()
      .subscribe(data => this.users = data);
  }

  createUser(): void {
    const dialogRef = this.dialog.open(UserCreateComponent, { width: '750px' });

    dialogRef.afterClosed().subscribe((result: Boolean) => {
       if(result == false) return;
       this.getUsers();
    }
    );
  }


  putUser(user: User) {
    const dialogRef = this.dialog.open(UserUpdateComponent, { width: '750px', data: user });

    dialogRef.afterClosed().subscribe((result: Boolean) => {
       if(result == false) return;
       this.getUsers();
    });
  }



  deletecUser(user: User ) {
    this.userService.deletecByIdUser(user.idUser).subscribe(data => {
      if (data.idUser != 0)
      this._snackBar.open("Usuario Eliminado ", "Ok");
      this.getUsers();
    });

  }
}
