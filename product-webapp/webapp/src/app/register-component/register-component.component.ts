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

  myregform!: FormGroup;
  @ViewChild('myregform') public regformref!: NgForm;
  constructor(private router: Router, private service: RegistrationService) {
    this.myregform = new FormGroup({
      uname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      role:new FormControl('',Validators.required)
    });
  }

  ngOnInit(): void {}
  registerUser() {
    this.service.registerUserFromRemote(this.user).subscribe(
      data=>{console.log("Login Success");
          this.router.navigate(['/login-component'])
    },
          error=>console.log("FAILED"));

  }
}
