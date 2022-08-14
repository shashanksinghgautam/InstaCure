import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css'],
})
export class RegisterComponentComponent implements OnInit {
  user = new User();
  flag: any
  errorMsg=''

  constructor(private router: Router, private service: RegistrationService) {

  }

  ngOnInit(): void {}
  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{console.log("Login Success");
          this.router.navigate(['/login-component'])
    },
          error=>{console.log("FAILED");
         this.errorMsg= "*Email or Mobile Already Exists! Try With Different Email or Mobile"

        });

  }
}
