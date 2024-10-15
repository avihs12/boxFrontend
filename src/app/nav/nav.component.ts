import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { JwtauthService } from '../auth/jwtauth.service';
import { UserService } from '../userES/user.service';
import { User } from '../userES/user';
import { HttpErrorResponse } from '@angular/common/http';
import { jwtauth } from '../auth/jwtauth';
import { LoginpageComponent } from '../loginpage/loginpage.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
     
  username: string = '';
  password: string = '';

  constructor(private Service: JwtauthService,private authser : jwtauth) { }

  ngOnInit(): void {
  }

  isPopUpVisible = false;

  showPopUp() {
    this.isPopUpVisible = !this.isPopUpVisible;
  }

  hidePopUp() {
    this.isPopUpVisible = false;
  }

  login(loginForm: NgForm) {
    this.Service.login(loginForm.value).subscribe(
      (response:any) => {
        console.log(response.jwtToken);
        console.log(response.user.role);
        this.authser.setRole(response.user.role),
        this.authser.setToken(response.jwtToken)
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
