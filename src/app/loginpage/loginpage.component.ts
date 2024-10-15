import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtauthService } from '../auth/jwtauth.service';
import { UserService } from '../userES/user.service';
import { User } from '../userES/user';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtauth } from '../auth/jwtauth';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  public users : User[]=[]; 

  constructor(private Service: UserService) { }

  ngOnInit(): void {
  }
  hide = true;

  public onAddUser(addForm: NgForm): void {
    // document.getElementById('add-employee-form')?.click();

    this.Service.addUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error.error);
      },
      () => {
        addForm.reset();
      }
    );
  }
  public onGetUser(): void {
    // document.getElementById('add-employee-form')?.click();

    this.Service.getUserData().subscribe((data) => {
      this.users = data; // Assign the data to the users property
    });
  }
}
