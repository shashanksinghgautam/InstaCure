import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

   user=new User();
   errorMsg=''
   emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  @ViewChild("myform") public formref!: NgForm;
  constructor(private router:Router , private service:RegistrationService) {

   }

  ngOnInit(): void {
  }

   loginUser(){
        this.service.loginUserFromRemote(this.user).subscribe(
          data=>{console.log("Login Success");
          this.router.navigate(['/home'])
        },
          error=>{console.log("FAILED");
          this.errorMsg= "*Invalid Email or Password or Role"
        }
        );
   }
   createNew(){
    this.router.navigate(['./register-component'])
   }
}
